import { useEffect, useRef } from 'react'
import { VERT, FRAG_SIM, FRAG_BLUR, FRAG_COMP } from '../shaders/index'

interface FBO {
  fbo: WebGLFramebuffer
  tex: WebGLTexture
}

interface Uniforms {
  simTime: WebGLUniformLocation | null
  simSlider: WebGLUniformLocation | null
  simElapsed: WebGLUniformLocation | null
  simBack: WebGLUniformLocation | null
  blurDir: WebGLUniformLocation | null
  blurExt: WebGLUniformLocation | null
  blurTex: WebGLUniformLocation | null
  blurRes: WebGLUniformLocation | null
  compScene: WebGLUniformLocation | null
  compGlow: WebGLUniformLocation | null
}

const MAX_IDLE = 180

export function useWebglFire(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  sliderValue: number,
  isActive: boolean,
) {
  const cache = useRef({ active: isActive, slider: sliderValue / 100 })
  useEffect(() => {
    cache.current.active = isActive
    cache.current.slider = sliderValue / 100
  })

  const ultraStart = useRef<number | null>(null)
  useEffect(() => {
    if (isActive && ultraStart.current == null) ultraStart.current = performance.now()
    else if (!isActive) ultraStart.current = null
  }, [isActive])

  /* Exposed so the isActive-watcher effect below can call it. */
  const ensureLoopRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    if (isActive && ensureLoopRef.current) ensureLoopRef.current()
  }, [isActive])

  useEffect(() => {
    const elOrNull = canvasRef.current
    if (!elOrNull) return
    const el: HTMLCanvasElement = elOrNull

    const glCtx = el.getContext('webgl2', { preserveDrawingBuffer: false, antialias: false })
    if (!glCtx) { console.warn('WebGL2 not supported'); return }
    const g: WebGL2RenderingContext = glCtx

    let simProg: WebGLProgram | null = null
    let blurProg: WebGLProgram | null = null
    let compProg: WebGLProgram | null = null
    let vao: WebGLVertexArrayObject | null = null
    let vbo: WebGLBuffer | null = null
    let programsReady = false

    let simA: FBO | null = null
    let simB: FBO | null = null
    let blurH: FBO | null = null
    let blurV: FBO | null = null

    const U: Uniforms = {
      simTime: null, simSlider: null, simElapsed: null, simBack: null,
      blurDir: null, blurExt: null, blurTex: null, blurRes: null,
      compScene: null, compGlow: null,
    }

    let rafId: number | null = null
    let loopRunning = false
    let idleFrames = 0
    let wasActive = false
    let resizeDebounce: ReturnType<typeof setTimeout> | null = null

    function compileShader(type: number, src: string): WebGLShader | null {
      const sh = g.createShader(type)
      if (!sh) return null
      g.shaderSource(sh, src)
      g.compileShader(sh)
      if (!g.getShaderParameter(sh, g.COMPILE_STATUS)) {
        console.error(g.getShaderInfoLog(sh))
        g.deleteShader(sh)
        return null
      }
      return sh
    }

    function linkProgram(vsSrc: string, fsSrc: string): WebGLProgram | null {
      const v = compileShader(g.VERTEX_SHADER, vsSrc)
      const f = compileShader(g.FRAGMENT_SHADER, fsSrc)
      if (!v || !f) return null
      const p = g.createProgram()
      if (!p) return null
      g.attachShader(p, v); g.attachShader(p, f)
      g.bindAttribLocation(p, 0, 'a_pos')
      g.linkProgram(p)
      g.deleteShader(v); g.deleteShader(f)
      if (!g.getProgramParameter(p, g.LINK_STATUS)) { console.error(g.getProgramInfoLog(p)); return null }
      return p
    }

    function compilePrograms(): void {
      simProg  = linkProgram(VERT, FRAG_SIM)
      blurProg = linkProgram(VERT, FRAG_BLUR)
      compProg = linkProgram(VERT, FRAG_COMP)
      if (!simProg || !blurProg || !compProg) return

      vao = g.createVertexArray()
      g.bindVertexArray(vao)
      vbo = g.createBuffer()
      g.bindBuffer(g.ARRAY_BUFFER, vbo)
      g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), g.STATIC_DRAW)
      g.enableVertexAttribArray(0)
      g.vertexAttribPointer(0, 2, g.FLOAT, false, 0, 0)

      U.simTime    = g.getUniformLocation(simProg,  'u_time')
      U.simSlider  = g.getUniformLocation(simProg,  'u_slider')
      U.simElapsed = g.getUniformLocation(simProg,  'u_elapsed')
      U.simBack    = g.getUniformLocation(simProg,  'u_back')
      U.blurDir    = g.getUniformLocation(blurProg, 'u_dir')
      U.blurExt    = g.getUniformLocation(blurProg, 'u_ext')
      U.blurTex    = g.getUniformLocation(blurProg, 'u_tex')
      U.blurRes    = g.getUniformLocation(blurProg, 'u_res')
      U.compScene  = g.getUniformLocation(compProg, 'u_scene')
      U.compGlow   = g.getUniformLocation(compProg, 'u_glow')
      programsReady = true
    }

    function makeFBO(): FBO | null {
      const fbo = g.createFramebuffer(); const tex = g.createTexture()
      if (!fbo || !tex) return null
      g.bindFramebuffer(g.FRAMEBUFFER, fbo)
      g.bindTexture(g.TEXTURE_2D, tex)
      g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, el.width, el.height, 0, g.RGBA, g.UNSIGNED_BYTE, null)
      g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR)
      g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR)
      g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE)
      g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE)
      g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, tex, 0)
      g.clearColor(0,0,0,1); g.clear(g.COLOR_BUFFER_BIT)
      return { fbo, tex }
    }

    function destroyFBO(f: FBO | null): void {
      if (!f) return; g.deleteFramebuffer(f.fbo); g.deleteTexture(f.tex)
    }
    function createFBOs(): void {
      simA = makeFBO(); simB = makeFBO(); blurH = makeFBO(); blurV = makeFBO()
    }
    function destroyFBOs(): void {
      destroyFBO(simA); simA=null; destroyFBO(simB); simB=null
      destroyFBO(blurH); blurH=null; destroyFBO(blurV); blurV=null
    }

    function resize(): void {
      const rect = el.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const dpr = window.devicePixelRatio
      el.width  = Math.round(rect.width  * dpr)
      el.height = Math.round(rect.height * dpr)
      destroyFBOs(); createFBOs()
    }

    function ensureLoop(): void {
      if (!simA || !simB) { resize(); if (!simA || !simB) return }
      if (loopRunning) { idleFrames = 0; return }
      loopRunning = true; idleFrames = 0; wasActive = false
      g.bindFramebuffer(g.FRAMEBUFFER, simA.fbo); g.clear(g.COLOR_BUFFER_BIT)
      g.bindFramebuffer(g.FRAMEBUFFER, simB.fbo); g.clear(g.COLOR_BUFFER_BIT)
      rafId = requestAnimationFrame(render)
    }

    function render(t: number): void {
      const active = cache.current.active
      if (!active && !wasActive) {
        if (++idleFrames > MAX_IDLE) { loopRunning = false; rafId = null; return }
        rafId = requestAnimationFrame(render); return
      }
      idleFrames = 0
      if (active && !wasActive) {
        g.bindFramebuffer(g.FRAMEBUFFER, simA!.fbo); g.clear(g.COLOR_BUFFER_BIT)
        g.bindFramebuffer(g.FRAMEBUFFER, simB!.fbo); g.clear(g.COLOR_BUFFER_BIT)
      }
      wasActive = active
      const elapsed = active ? (performance.now() - (ultraStart.current ?? 0)) / 1000 : -1.0
      const sv = cache.current.slider
      g.viewport(0, 0, el.width, el.height)

      // Pass 1 — fire simulation
      g.bindFramebuffer(g.FRAMEBUFFER, simB!.fbo)
      g.useProgram(simProg)
      g.uniform1f(U.simTime, t * 0.001); g.uniform1f(U.simSlider, sv); g.uniform1f(U.simElapsed, elapsed)
      g.activeTexture(g.TEXTURE0); g.bindTexture(g.TEXTURE_2D, simA!.tex); g.uniform1i(U.simBack, 0)
      g.drawArrays(g.TRIANGLES, 0, 6)

      // Pass 2 — horizontal blur
      g.useProgram(blurProg)
      g.uniform2f(U.blurRes, el.width, el.height)
      g.bindFramebuffer(g.FRAMEBUFFER, blurH!.fbo)
      g.uniform2f(U.blurDir, 1.0, 0.0); g.uniform1f(U.blurExt, 1.0)
      g.bindTexture(g.TEXTURE_2D, simB!.tex); g.uniform1i(U.blurTex, 0)
      g.drawArrays(g.TRIANGLES, 0, 6)

      // Pass 3 — vertical blur
      g.bindFramebuffer(g.FRAMEBUFFER, blurV!.fbo)
      g.uniform2f(U.blurDir, 0.0, 1.0); g.uniform1f(U.blurExt, 0.0)
      g.bindTexture(g.TEXTURE_2D, blurH!.tex)
      g.drawArrays(g.TRIANGLES, 0, 6)

      // Pass 4 — composite to screen
      g.bindFramebuffer(g.FRAMEBUFFER, null)
      g.useProgram(compProg)
      g.activeTexture(g.TEXTURE0); g.bindTexture(g.TEXTURE_2D, simB!.tex); g.uniform1i(U.compScene, 0)
      g.activeTexture(g.TEXTURE1); g.bindTexture(g.TEXTURE_2D, blurV!.tex); g.uniform1i(U.compGlow, 1)
      g.drawArrays(g.TRIANGLES, 0, 6)

      const tmp = simA!; simA = simB!; simB = tmp
      rafId = requestAnimationFrame(render)
    }

    function onContextLost(e: Event): void { e.preventDefault() }
    function onContextRestored(): void {
      programsReady = false; compilePrograms()
      if (programsReady) { resize(); if (cache.current.active) ensureLoop() }
    }

    el.addEventListener('webglcontextlost', onContextLost)
    el.addEventListener('webglcontextrestored', onContextRestored)

    compilePrograms()
    if (!programsReady) return

    const ro = new ResizeObserver(() => {
      if (resizeDebounce) clearTimeout(resizeDebounce)
      resizeDebounce = setTimeout(resize, 80)
    })
    ro.observe(el)
    resize()

    /* Expose ensureLoop so the isActive watcher effect can call it. */
    ensureLoopRef.current = ensureLoop

    if (cache.current.active) ensureLoop()

    return () => {
      ensureLoopRef.current = null
      if (rafId != null) { cancelAnimationFrame(rafId); rafId = null }
      ro.disconnect()
      if (resizeDebounce) clearTimeout(resizeDebounce)
      loopRunning = false
      destroyFBOs()
      if (simProg)  g.deleteProgram(simProg)
      if (blurProg) g.deleteProgram(blurProg)
      if (compProg) g.deleteProgram(compProg)
      if (vao) g.deleteVertexArray(vao)
      if (vbo) g.deleteBuffer(vbo)
      el.removeEventListener('webglcontextlost', onContextLost)
      el.removeEventListener('webglcontextrestored', onContextRestored)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

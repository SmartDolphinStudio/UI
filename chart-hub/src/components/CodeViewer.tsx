import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'

/** A single source file shown in the viewer. */
export interface CodeFile {
  /** File name, e.g. "BarDiagram.tsx" — drives the tab label and the icon. */
  name: string
  /** Full text content of the file. */
  content: string
}

/**
 * CodeViewer — a VS Code-inspired source viewer.
 *
 * - macOS-style window controls + per-file tabs (switchable, multi-file ready)
 * - One-click copy with inline feedback
 * - Dark syntax highlighting (VS Code Dark+ theme) with line numbers
 * - Official brand icons for the most common file types
 */
export default function CodeViewer({ files }: { files: CodeFile[] }) {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)

  // Nothing to render yet — show a quiet empty state instead of a broken box.
  if (files.length === 0) {
    return (
      <div className="flex h-full min-h-64 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-sm text-neutral-400">
        No source files available
      </div>
    )
  }

  const file = files[Math.min(active, files.length - 1)]

  /** Copy the active file to the clipboard, with a transient "copied" state. */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(file.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard can be blocked (e.g. permissions); fail silently.
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-800 shadow-sm">
      {/* Window chrome: traffic lights, file tabs, copy action. */}
      <div className="flex items-center gap-3 border-b border-neutral-800 bg-neutral-900 px-3">
        {/* macOS traffic lights */}
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>

        {/* File tabs — one per source file, active tab highlighted. */}
        <div className="flex min-w-0 flex-1 items-end self-stretch overflow-x-auto">
          {files.map((f, i) => (
            <button
              key={f.name}
              onClick={() => setActive(i)}
              aria-current={i === active ? 'page' : undefined}
              className={
                i === active
                  ? 'flex shrink-0 items-center gap-1.5 border-b-2 border-white bg-neutral-800 px-3 py-2 text-xs text-neutral-100'
                  : 'flex shrink-0 items-center gap-1.5 border-b-2 border-transparent px-3 py-2 text-xs text-neutral-500 hover:bg-neutral-800/60 hover:text-neutral-300'
              }
            >
              <FileIcon name={f.name} />
              {f.name}
            </button>
          ))}
        </div>

        {/* Copy action */}
        <button
          onClick={handleCopy}
          className="flex shrink-0 items-center gap-1.5 rounded px-2 py-1 text-xs text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
        >
          {copied ? (
            <>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code body: syntax-highlighted with a line-number gutter.
          Long lines soft-wrap (like Cursor/VS Code word wrap); wrapped
          fragments stay on the same logical line and never get a new number. */}
      <Highlight
        theme={themes.vsDark}
        code={file.content.trimEnd()}
        language={detectLanguage(file.name)}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <div
            style={{ ...style, background: '#1e1e1e' }}
            className="max-h-[calc(50*1.6em+2rem)] overflow-auto p-4 font-mono text-[13px] leading-[1.6]"
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
                className="table w-full table-fixed"
              >
                <span className="w-10 select-none pr-4 text-right align-top text-neutral-600 [display:table-cell]">
                  {i + 1}
                </span>
                <span className="whitespace-pre-wrap break-words [display:table-cell] [overflow-wrap:anywhere]">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </div>
        )}
      </Highlight>
    </div>
  )
}

/** Map a file extension to a Prism-supported language id. */
function detectLanguage(name: string): string {
  const ext = name.split('.').pop()?.toLowerCase() ?? ''
  switch (ext) {
    case 'tsx':
    case 'jsx':
      return 'tsx'
    case 'ts':
      return 'typescript'
    case 'js':
    case 'mjs':
    case 'cjs':
      return 'javascript'
    case 'css':
      return 'css'
    case 'html':
      return 'html'
    case 'json':
      return 'json'
    case 'md':
    case 'mdx':
      return 'markdown'
    case 'svg':
      return 'xml'
    default:
      return 'plain'
  }
}

/**
 * Official-style brand icons for common file types.
 * Every icon is an inline SVG so no external asset or runtime fetch is needed.
 */
function FileIcon({ name }: { name: string }) {
  const ext = name.split('.').pop()?.toLowerCase() ?? ''

  switch (ext) {
    case 'tsx':
    case 'jsx':
      return <ReactLogo />
    case 'ts':
      return <TypeScriptLogo />
    case 'css':
      return <TailwindLogo />
    case 'svg':
      return <SvgLogo />
    case 'js':
    case 'mjs':
    case 'cjs':
      return <JavaScriptLogo />
    case 'html':
      return <HtmlLogo />
    case 'json':
      return <JsonLogo />
    case 'md':
    case 'mdx':
      return <MarkdownLogo />
    default:
      return <GenericFileLogo />
  }
}

/* ------------------------------------------------------------------ */
/* Brand icons (inline SVG)                                            */
/* ------------------------------------------------------------------ */

/** React — official atom mark. */
function ReactLogo() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="-11.5 -10.23174 23 20.46348">
      <circle r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

/** TypeScript — official blue squared badge. */
function TypeScriptLogo() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 128 128">
      <rect width="128" height="128" rx="14" fill="#007acc" />
      <path
        fill="#fff"
        d="M30.7 67.2h8.2V50.6h7.2v-6.5H23.5v6.5h7.2zm38.4-9.8c-2.1-1.3-5.4-2.4-8.9-2.4-3.8 0-7.7 1.3-7.7 5.3 0 4.4 6.6 5.3 10.8 6.5 4.8 1.3 8.6 3.6 8.6 8.3 0 6.7-5.5 8.9-11.6 8.9-5.1 0-9.1-1.6-11.7-3.8l1.4-5.9c1.8 1.3 4.4 2.8 7.6 2.8 2.7 0 5.7-.9 5.7-3.9 0-4.1-6.2-4.6-10.4-6.2-3.5-1.3-8.8-3.6-8.8-8.8 0-5.4 4.7-7.9 10-7.9 4.6 0 8.3 1.5 10.9 3.3zM84.4 103v-6.9c1 .4 3.5 1.3 6.2 1.3 3.5 0 5.7-1.6 5.7-5.2V58.5h7.7v33.7c0 7.7-5.5 11.6-12.4 11.6-4.2 0-7.4-1.6-9.3-2.8zm9.7-72.3c1.9 0 3.4 1.5 3.4 3.4 0 1.9-1.5 3.4-3.4 3.4-1.9 0-3.4-1.5-3.4-3.4 0-1.9 1.5-3.4 3.4-3.4zm-29.6 0c1.9 0 3.4 1.5 3.4 3.4 0 1.9-1.5 3.4-3.4 3.4-1.9 0-3.4-1.5-3.4-3.4 0-1.9 1.5-3.4 3.4-3.4z"
      />
    </svg>
  )
}

/** Tailwind CSS — official wind mark. */
function TailwindLogo() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 32 32">
      <path
        fill="#38bdf8"
        d="M16 6C9.5 6 5.4 9.6 3.7 16.8c2.1-3.6 4.6-5 7.4-4.2 1.6.45 2.75 1.75 4 3 1.9 1.95 4.05 4.2 8.2 4.2 6.5 0 10.6-3.6 12.3-10.8-2.1 3.6-4.6 5-7.4 4.2-1.6-.45-2.75-1.75-4-3C19.3 9.85 17.15 6 16 6zM3.7 16.8C1.6 20.4 1.1 24 2.8 31.2 4.9 27.6 7.4 26.2 10.2 27c1.6.45 2.75 1.75 4 3 1.9 1.95 4.05 4.2 8.2 4.2 6.5 0 10.6-3.6 12.3-10.8-2.1 3.6-4.6 5-7.4 4.2-1.6-.45-2.75-1.75-4-3-1.9-1.95-4.05-4.2-8.2-4.2-6.5 0-10.6 3.6-12.3 10.8z"
        transform="scale(1.3) translate(-3 -3)"
      />
    </svg>
  )
}

/** SVG — simple brand block. */
function SvgLogo() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" stroke="#ffb74d" strokeWidth="1.6" />
      <path
        d="M9 15.5L5.5 12 9 8.5M15 8.5l3.5 3.5L15 15.5"
        stroke="#ffb74d"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** JavaScript — yellow squared badge. */
function JavaScriptLogo() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 128 128">
      <rect width="128" height="128" rx="14" fill="#f7df1e" />
      <path
        fill="#323330"
        d="M83.8 101.4c3.4 2.6 7.9 4.5 13.6 4.5 5.7 0 9.4-2.9 9.4-6.9 0-4.8-3.7-6.5-10-8.3l-2.9-1.2c-8.4-3.6-13.9-8.1-13.9-17.6 0-8.8 6.7-15.5 17.2-15.5 7.5 0 12.9 2.6 16.8 9.4l-9.2 5.9c-2-3.2-4.2-4.5-7.6-4.5-3.5 0-5.7 2.2-5.7 5.2 0 3.6 2.2 5.1 9.9 7.4l2.9 1.2c9.9 4.3 15.5 8.6 15.5 18.4 0 10.5-8.3 16.2-19.4 16.2-10.9 0-17.9-5.2-21.3-12zM45.9 102.9c2.5 1.4 6.7 2.7 10.9 2.7 5.7 0 9.3-1.9 9.3-9.2V57.1h13v38.6c0 15.2-8.9 22-21.8 22-9.5 0-16.9-4.4-20-10.2z"
      />
    </svg>
  )
}

/** HTML5 — official shield. */
function HtmlLogo() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 128 128">
      <path fill="#E44D26" d="M9.03 0h110l-10.06 115.3L64.03 128 27.1 115.3z" />
      <path fill="#F16529" d="M64.03 118.1l29.2-8.5 8.6-97.9H64.03z" />
      <path
        fill="#fff"
        d="M64.03 26.8H42.4l.7 7.6h20.93zm0 15.2H35.4l.7 7.6h27.93zm0 30.5l-.1.02-11.9-3.2-.8-9.1H43.4l1.6 17.9 19.03 5.2zM78.7 51.2l.4-4.5H64.03v-7.6h16.8l.8-9H64.03v-7.6l22.3-.01zM64.03 79.5v.03l11.4-3.1 1.5-16.8h-12.9z"
      />
      <path fill="#EBEBEB" d="M64.03 26.8v7.6H42.4l-.7-7.6zm0 15.2v7.6H35.4l-.7-7.6zm0 30.5v.02l-.1.02-11.9-3.2-.8-9.1H43.4l1.6 17.9 19.03 5.2zm11.6-19.8h-11.6v-7.6h12.9l1.5 16.8-11.4 3.1v.03l-.1-.03V56.5z" />
    </svg>
  )
}

/** JSON — braces glyph. */
function JsonLogo() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" stroke="#8bc34a" strokeWidth="1.6" />
      <path
        d="M9.5 7.5a2 2 0 00-2 2v1.5c0 .8-.5 1.5-1.2 1.5.7 0 1.2.7 1.2 1.5v1.5a2 2 0 002 2M14.5 7.5a2 2 0 012 2v1.5c0 .8.5 1.5 1.2 1.5-.7 0-1.2.7-1.2 1.5v1.5a2 2 0 01-2 2"
        stroke="#8bc34a"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Markdown — "M" glyph on a rounded square. */
function MarkdownLogo() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" stroke="#42a5f5" strokeWidth="1.6" />
      <path
        d="M6 15V9l2.5 3L11 9v6M14 9h2.5v3M16.5 12h2l-2 3-2-3"
        stroke="#42a5f5"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Generic file — neutral document glyph for unknown types. */
function GenericFileLogo() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7z" opacity="0.35" />
      <path d="M13 2v7h7" opacity="0.8" />
      <rect x="9" y="13" width="6" height="1.6" rx="0.8" opacity="0.9" />
      <rect x="9" y="16" width="4" height="1.6" rx="0.8" opacity="0.6" />
      <rect x="9" y="10" width="5" height="1.6" rx="0.8" opacity="0.7" />
    </svg>
  )
}

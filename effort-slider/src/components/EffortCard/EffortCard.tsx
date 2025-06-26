/**
 * @file        EffortCard.tsx
 * @author      Astraeus
 * @created     2026-06-18 20:08:51 UTC
 * @license     GPL-2.0-only
 *
 * Effort-level slider card with a WebGL2 fire animation that ignites when
 * the slider reaches 100 (the "Ultracode" threshold). Includes squircle
 * clip paths, a status label with a flip-up entrance animation, and a
 * masked canvas layer rendered in screen blend mode.
 *
 * Visual design and animation behavior are heavily inspired by the
 * effort-level slider UI found in Claude Code by Anthropic.
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: SmartDolphinStudio@gmail.com
 */

import { useRef, useMemo, CSSProperties } from 'react'
import { useSliderState } from './hooks/useSliderState'
import { useWebglFire } from './hooks/useWebglFire'

/** Shared squircle clip-path data. */
const SQUIRCLE_CARD =
  'M 0.053,0 C 0.029,0 0.012,0.008 0.005,0.02 C 0.002,0.028 0,0.038 0,0.053' +
  ' L 0,0.947 C 0,0.962 0.002,0.972 0.005,0.98 C 0.012,0.992 0.029,1 0.053,1' +
  ' L 0.947,1 C 0.971,1 0.988,0.992 0.995,0.98 C 0.998,0.972 1,0.962 1,0.947' +
  ' L 1,0.053 C 1,0.038 0.998,0.028 0.995,0.02 C 0.988,0.008 0.971,0 0.947,0 Z'

const SQUIRCLE_TRACK =
  'M 0.033,0 C 0.018,0 0.007,0.012 0.003,0.035 C 0.001,0.055 0,0.1 0,0.15' +
  ' L 0,0.85 C 0,0.9 0.001,0.945 0.003,0.965 C 0.007,0.988 0.018,1 0.033,1' +
  ' L 0.967,1 C 0.982,1 0.993,0.988 0.997,0.965 C 0.999,0.945 1,0.9 1,0.85' +
  ' L 1,0.15 C 1,0.1 0.999,0.055 0.997,0.035 C 0.993,0.012 0.982,0 0.967,0 Z'

/** Thumb width in px; used to align dots with the thumb-center travel. */
const THUMB_W = 29
/** Five discrete stops the thumb snaps to, expressed as track fractions. */
const DOT_FRACTIONS = [0, 0.25, 0.5, 0.75, 1]

/** Left offset that matches the native range thumb center for a given fraction. */
function dotLeft(fraction: number): string {
  return `calc(${THUMB_W / 2}px + ${fraction} * (100% - ${THUMB_W}px))`
}

export default function EffortCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const uid = useMemo(() => Math.random().toString(36).slice(2, 8), [])
  const clipId = `squircle-${uid}`
  const clipTrackId = `squircle-track-${uid}`

  const { sliderValue, isActive, isFull, isAnimating, statusLabel, onInput, onMouseUp, onTouchEnd } = useSliderState()

  
  useWebglFire(canvasRef, sliderValue, isActive)

  const cardClipStyle: CSSProperties = { clipPath: `url(#${clipId})` }
  const trackClipStyle: CSSProperties = { clipPath: `url(#${clipTrackId})` }

  const pct = Math.min(sliderValue + 2, 100)
  const canvasMaskStyle: CSSProperties = {
    maskImage: `linear-gradient(to right, black 0%, black ${pct}%, transparent ${pct}%)`,
    WebkitMaskImage: `linear-gradient(to right, black 0%, black ${pct}%, transparent ${pct}%)`,
  }

  return (
    <>
      {/* Hidden SVG defs for squircle clip paths */}
      <svg
        style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={SQUIRCLE_CARD} />
          </clipPath>
          <clipPath id={clipTrackId} clipPathUnits="objectBoundingBox">
            <path d={SQUIRCLE_TRACK} />
          </clipPath>
        </defs>
      </svg>

      {/* Card shadow wrapper */}
      <div style={CARD_SHADOW_STYLE}>
        <div style={{ ...CARD_STYLE, ...cardClipStyle }}>

          {/* Header */}
          <div style={HEADER_STYLE}>
            <div style={HEADER_LEFT_STYLE}>
              <span style={LABEL_TEXT_STYLE}>Effort</span>
              <span
                style={{
                  ...STATUS_TEXT_STYLE,
                  ...(isActive ? STATUS_GLOWING_STYLE : {}),
                }}
                className={isAnimating ? 'effort-animate-up' : ''}
              >
                {statusLabel}
              </span>
            </div>
            <button
              style={HELP_BTN_STYLE}
              aria-label="Visit the author's website"
              onClick={() => window.open('https://astraeuszhao.com', '_blank', 'noopener,noreferrer')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" style={{ height: 18, width: 'auto', display: 'block' }}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            </button>
          </div>

          {/* Scale labels */}
          <div style={SCALE_LABELS_STYLE}>
            <span>Faster</span>
            <span>Smarter</span>
          </div>

          {/* Track */}
          <div
            style={{
              ...TRACK_WRAPPER_STYLE,
              ...trackClipStyle,
              ...(isActive ? TRACK_ACTIVE_STYLE : {}),
            }}
          >
            <div style={TRACK_BG_STYLE} />

            {/* Dots */}
            <div style={DOTS_LAYER_STYLE}>
              {DOT_FRACTIONS.map((fraction, i) => (
                <span
                  key={i}
                  style={{
                    ...DOT_STYLE,
                    left: dotLeft(fraction),
                    opacity: isFull ? 0 : isActive ? 0.25 : 1,
                    transition: 'opacity 0.6s',
                  }}
                />
              ))}
            </div>

            {/* WebGL fire canvas */}
            <canvas
              ref={canvasRef}
              style={{
                ...CANVAS_STYLE,
                ...canvasMaskStyle,
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 4 : 2,
              }}
            />

            {/* Range input */}
            <input
              type="range"
              min={0}
              max={100}
              value={sliderValue}
              onChange={onInput} onMouseUp={onMouseUp} onTouchEnd={onTouchEnd}
              className={isActive ? 'effort-glowing' : ''}
              style={RANGE_STYLE}
            />
          </div>

        </div>
      </div>

      <style>{CSS_STRING}</style>
    </>
  )
}

/* 闂佸啿鍘滈崑鎾绘煃閸忓浜?static style objects 闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸?*/

const CARD_SHADOW_STYLE: CSSProperties = {
  transition: 'filter 0.2s ease',
}

const CARD_STYLE: CSSProperties = {
  background: '#000000',
  width: 376,
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 20,
  padding: '18px 20px 16px',
  userSelect: 'none',
}

const HEADER_STYLE: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 14,
}

const HEADER_LEFT_STYLE: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 7,
  fontSize: 16,
  fontWeight: 500,
  perspective: 280,
  perspectiveOrigin: 'center 120%',
}

const LABEL_TEXT_STYLE: CSSProperties = {
  color: '#b0b0c7',
  fontWeight: 700,
  lineHeight: 1.3,
}

const STATUS_TEXT_STYLE: CSSProperties = {
  display: 'inline-block',
  color: '#a1a1aa',
  transition: 'color 0.3s, text-shadow 0.3s',
  willChange: 'transform, opacity, filter',
  verticalAlign: 'middle',
  transformOrigin: 'center bottom',
  transform: 'rotateX(0deg) translateY(0)',
}

const STATUS_GLOWING_STYLE: CSSProperties = {
  color: '#c084fc',
  textShadow: '0 0 12px rgba(168,85,247,0.6)',
  fontWeight: 600,
}

const HELP_BTN_STYLE: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#a1a1aa',
  background: 'none',
  border: 'none',
  padding: 0,
  lineHeight: 1,
}

const SCALE_LABELS_STYLE: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14,
  fontWeight: 800,
  color: '#b0b0b8',
  marginBottom: 7,
  letterSpacing: '0.04em',
}

const TRACK_WRAPPER_STYLE: CSSProperties = {
  position: 'relative',
  height: 30,
  borderRadius: 10,
  overflow: 'hidden',
  border: '1px solid #1a1a1e',
  background: '#0c0c0c',
  isolation: 'isolate',
}

const TRACK_ACTIVE_STYLE: CSSProperties = {}

const TRACK_BG_STYLE: CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(135deg, #111113, #0a0a0b)',
  zIndex: 0,
}

const DOTS_LAYER_STYLE: CSSProperties = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 1,
}

const DOT_STYLE: CSSProperties = {
  position: 'absolute',
  width: 5,
  height: 5,
  borderRadius: '50%',
  background: '#494950',
  top: '50%',
  transform: 'translate(-50%, -50%)',
}

const CANVAS_STYLE: CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  mixBlendMode: 'screen',
  transition: 'opacity 0.3s',
}

const RANGE_STYLE: CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  background: 'transparent',
  appearance: 'none',
  WebkitAppearance: 'none',
  cursor: 'pointer',
  zIndex: 5,
  outline: 'none',
  margin: 0,
  padding: 0,
}

/* 闂佸啿鍘滈崑鎾绘煃閸忓浜?injected CSS (thumb styles require pseudo-element selectors) 闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸嬫捇鏌嶉崗澶婁壕闂佸啿鍘滈崑鎾绘煃閸忓浜鹃梺鍐插帨閸?*/

const CSS_STRING = `
@keyframes flipUpFromBottom {
  0%   { opacity: 0; transform: translateY(18px) rotateX(-80deg); filter: blur(4px); }
  100% { opacity: 1; transform: translateY(0)    rotateX(0deg);   filter: blur(0);   }
}

.effort-animate-up {
  animation: flipUpFromBottom 0.42s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 29px; height: 29px;
  border-radius: 10px;
  background: linear-gradient(170deg, #ffffff 0%, #f0f0f2 40%, #e4e4e6 100%);
  border: 0.5px solid rgba(0,0,0,0.08);
  box-shadow:
    0 0.5px 1px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.25),
    0 6px 16px rgba(0,0,0,0.12),
    inset 0 0.5px 0 rgba(255,255,255,0.85),
    inset 0 -0.5px 0 rgba(0,0,0,0.06);
  cursor: grab;
  transition: box-shadow 0.4s ease, transform 0.15s ease;
}
input[type='range']::-webkit-slider-thumb:active {
  cursor: grabbing;
  transform: scale(0.95);
  box-shadow:
    0 0.5px 1px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.3),
    0 3px 8px rgba(0,0,0,0.15),
    inset 0 0.5px 0 rgba(255,255,255,0.7),
    inset 0 -1px 0 rgba(0,0,0,0.08);
}
input[type='range'].effort-glowing::-webkit-slider-thumb {
  box-shadow:
    0 0.5px 1px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.25),
    0 6px 16px rgba(0,0,0,0.12),
    0 0 28px rgba(168,85,247,0.5), 0 0 50px rgba(168,85,247,0.25),
    inset 0 0.5px 0 rgba(255,255,255,0.85),
    inset 0 -0.5px 0 rgba(0,0,0,0.06);
}
input[type='range'].effort-glowing::-webkit-slider-thumb:active {
  box-shadow:
    0 0.5px 1px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.3),
    0 3px 8px rgba(0,0,0,0.15),
    0 0 32px rgba(168,85,247,0.55), 0 0 56px rgba(168,85,247,0.3),
    inset 0 0.5px 0 rgba(255,255,255,0.7),
    inset 0 -1px 0 rgba(0,0,0,0.08);
}
input[type='range']::-moz-range-thumb {
  width: 26px; height: 26px;
  border-radius: 9px;
  background: linear-gradient(170deg, #ffffff 0%, #f0f0f2 40%, #e4e4e6 100%);
  border: 0.5px solid rgba(0,0,0,0.08);
  box-shadow:
    0 0.5px 1px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.25),
    0 6px 16px rgba(0,0,0,0.12);
  cursor: grab;
  transition: box-shadow 0.4s ease;
}
input[type='range']::-moz-range-thumb:active { cursor: grabbing; transform: scale(0.95); }
input[type='range'].effort-glowing::-moz-range-thumb {
  box-shadow:
    0 0.5px 1px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.25),
    0 6px 16px rgba(0,0,0,0.12),
    0 0 28px rgba(168,85,247,0.5), 0 0 50px rgba(168,85,247,0.25);
}
input[type='range']::-moz-range-track {
  background: transparent; border: none; height: 30px;
}
`

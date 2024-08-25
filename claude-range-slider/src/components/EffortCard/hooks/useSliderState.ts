/**
 * @file        useSliderState.ts
 * @author      Astraeus
 * @created     2026-06-18 20:08:51 UTC
 * @license     GPL-2.0-only
 *
 * Manages slider value, derived status labels, and the flip-up animation
 * that fires when the slider reaches the "Ultracode" threshold.
 *
 * @disclaimer
 * This file is distributed under GNU General Public License v2.0. Anyone who modifies any source files of this project shall fully open-source all modified codes under the same GPLv2 license. The author assumes no liability for any direct or indirect economic losses and legal risks arising from the usage of this code. All interpretation rights of this repository belong exclusively to Astraeus. Contact: SmartDolphinStudio@gmail.com
 */

import { useState, useEffect, useRef, useCallback } from 'react'

export type StatusLabel = 'Flow' | 'Lite' | 'Pro' | 'Max' | 'Ultracode'

export interface SliderState {
  sliderValue: number
  isActive: boolean
  isFull: boolean
  isAnimating: boolean
  statusLabel: StatusLabel
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  onMouseUp: () => void
  onTouchEnd: () => void
}

const THRESHOLD = 100
const ANIMATION_DURATION = 150
const SNAP_THRESHOLD = 1

const SNAP_POINTS = [0, 25, 50, 75, 100]

function snapToNearest(value: number): number {
  return SNAP_POINTS.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  )
}

function getLabel(value: number): StatusLabel {
  if (value <= 0) return 'Flow'
  if (value <= 25) return 'Lite'
  if (value <= 50) return 'Pro'
  if (value <= 75) return 'Max'
  if (value < THRESHOLD) return 'Max'
  return 'Ultracode'
}

export function useSliderState(): SliderState {
  const [targetValue, setTargetValue] = useState(75)
  const [sliderValue, setSliderValue] = useState(75)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prevLabelRef = useRef<StatusLabel>(getLabel(75))
  const animationRef = useRef<number | null>(null)
  const startValueRef = useRef(75)
  const startTimeRef = useRef(0)

  const statusLabel = getLabel(sliderValue)
  const isActive = sliderValue >= THRESHOLD
  const isFull = sliderValue === 100

  useEffect(() => {
    const prev = prevLabelRef.current
    const next = statusLabel

    if (next === 'Ultracode' && prev !== 'Ultracode') {
      if (timerRef.current != null) clearTimeout(timerRef.current)
      setIsAnimating(true)
      timerRef.current = setTimeout(() => {
        setIsAnimating(false)
        timerRef.current = null
      }, 460)
    } else if (next !== 'Ultracode' && prev === 'Ultracode') {
      if (timerRef.current != null) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
      setIsAnimating(false)
    }

    prevLabelRef.current = next
  }, [statusLabel])

  useEffect(() => {
    return () => {
      if (timerRef.current != null) clearTimeout(timerRef.current)
      if (animationRef.current != null) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  useEffect(() => {
    if (Math.abs(targetValue - sliderValue) < SNAP_THRESHOLD) {
      setSliderValue(targetValue)
      return
    }

    startValueRef.current = sliderValue
    startTimeRef.current = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1)

      const eased = 1 - Math.pow(1 - progress, 3)
      const current = startValueRef.current + (targetValue - startValueRef.current) * eased

      setSliderValue(Math.round(current))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current != null) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }
  }, [targetValue])

  const onInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetValue(parseInt(e.target.value, 10))
  }, [])

  const onMouseUp = useCallback(() => {
    const snapped = snapToNearest(sliderValue)
    setTargetValue(snapped)
  }, [sliderValue])

  const onTouchEnd = useCallback(() => {
    const snapped = snapToNearest(sliderValue)
    setTargetValue(snapped)
  }, [sliderValue])

  return { sliderValue, isActive, isFull, isAnimating, statusLabel, onInput, onMouseUp, onTouchEnd }
}
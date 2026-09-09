"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  variant?: "fade" | "image"
  delay?: number
}

export function Reveal({ children, as, className, variant = "fade", delay = 0 }: RevealProps) {
  const Tag = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement | null>(null)
  // Armed = the entrance animation is active (element starts hidden, then
  // reveals). We only arm elements that begin below the fold. Everything
  // else — including SSR output and anything already on screen — stays
  // visible, so content is never permanently clipped if JS is slow or the
  // observer misses.
  const [armed, setArmed] = useState(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    const belowFold = rect.top > window.innerHeight * 0.9
    if (!belowFold) return

    setArmed(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    )
    observer.observe(node)

    // Safety net: never leave content hidden if the observer misses.
    const fallback = window.setTimeout(() => setRevealed(true), 1600)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  const animate = armed && !revealed

  return (
    <Tag
      ref={ref as never}
      className={cn(variant === "image" ? "reveal-img" : "reveal", animate && "is-hidden", className)}
      style={delay && animate ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

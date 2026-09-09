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
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn(variant === "image" ? "reveal-img" : "reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

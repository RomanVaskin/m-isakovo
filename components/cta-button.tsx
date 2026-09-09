"use client"

import type { ReactNode } from "react"
import { useBooking } from "@/components/booking-provider"
import { cn } from "@/lib/utils"

export function CtaButton({
  children,
  variant = "solid",
  className,
}: {
  children: ReactNode
  variant?: "solid" | "accent" | "outline"
  className?: string
}) {
  const { open } = useBooking()
  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-md px-8 text-sm font-medium transition-all",
        variant === "solid" && "bg-foreground text-background hover:opacity-90",
        variant === "accent" && "bg-accent text-accent-foreground hover:opacity-90",
        variant === "outline" && "border border-border text-foreground hover:bg-muted",
        className,
      )}
    >
      {children}
    </button>
  )
}

"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"
import { BookingDialog } from "@/components/booking-dialog"

type BookingContextValue = {
  open: () => void
  close: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error("useBooking must be used within BookingProvider")
  return ctx
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, close])

  return (
    <BookingContext.Provider value={{ open, close }}>
      {children}
      <BookingDialog open={isOpen} onClose={close} />
    </BookingContext.Provider>
  )
}

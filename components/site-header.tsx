"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { nav, site } from "@/lib/site-data"
import { useBooking } from "@/components/booking-provider"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { open } = useBooking()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "border-b border-border bg-background/90 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
        <a
          href="#top"
          className={cn(
            "flex flex-col leading-none transition-colors",
            solid ? "text-foreground" : "text-background",
          )}
        >
          <span className="font-display text-lg font-semibold tracking-tight">Малое Исаково</span>
          <span
            className={cn(
              "mt-0.5 font-mono text-[10px] uppercase tracking-[0.28em]",
              solid ? "text-muted-foreground" : "text-background/70",
            )}
          >
            Истра Строй Сервис
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors",
                solid ? "text-muted-foreground hover:text-foreground" : "text-background/80 hover:text-background",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={open}
            className={cn(
              "hidden h-10 items-center rounded-md px-5 text-sm font-medium transition-all md:inline-flex",
              solid
                ? "bg-foreground text-background hover:opacity-90"
                : "bg-background/10 text-background ring-1 ring-inset ring-background/40 backdrop-blur-sm hover:bg-background/20",
            )}
          >
            Записаться на просмотр
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden",
              solid ? "text-foreground" : "text-background",
            )}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border/60 py-4 text-base text-foreground last:border-none"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                open()
              }}
              className="mt-4 h-12 rounded-md bg-accent text-sm font-medium text-accent-foreground"
            >
              Записаться на просмотр
            </button>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{site.phone}</p>
          </nav>
        </div>
      )}
    </header>
  )
}

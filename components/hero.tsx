"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { site, stats } from "@/lib/site-data"
import { useBooking } from "@/components/booking-provider"

export function Hero() {
  const { open } = useBooking()

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <Image
        src="/images/hero-house.jpg"
        alt="Современная резиденция Малое Исаково в лесу на берегу Истринского водохранилища"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite/60 via-graphite/20 to-graphite/80" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-28 sm:px-8 md:pb-20">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-background/80 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {site.subtitle}
        </p>

        <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.95] tracking-tight text-background animate-in fade-in slide-in-from-bottom-6 duration-1000 sm:text-7xl md:text-8xl">
          Малое Исаково
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85 animate-in fade-in slide-in-from-bottom-6 delay-150 duration-1000">
          Резиденции комфорт-класса, скрытые в глубине векового леса на берегу большой воды. Твоё маленькое
          счастье — в 45 минутах от Москвы.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center animate-in fade-in slide-in-from-bottom-6 delay-300 duration-1000">
          <a
            href="#houses"
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Выбрать дом
          </a>
          <button
            type="button"
            onClick={open}
            className="inline-flex h-12 items-center justify-center rounded-md bg-background/10 px-8 text-sm font-medium text-background ring-1 ring-inset ring-background/40 backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            Получить презентацию
          </button>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-background/20 pt-8 animate-in fade-in delay-500 duration-1000">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-semibold tracking-tight text-background sm:text-4xl">
                {s.value}
                {s.unit && <span className="ml-1 text-base font-normal text-background/70">{s.unit}</span>}
              </dt>
              <dd className="mt-1 text-sm text-background/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto hidden w-full max-w-7xl px-8 pb-8 md:block">
        <a
          href="#concept"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-background/70 transition-colors hover:text-background"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Листайте вниз
        </a>
      </div>
    </section>
  )
}

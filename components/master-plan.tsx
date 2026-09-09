"use client"

import Image from "next/image"
import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { masterPlanPhases } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const markers: Record<string, { top: string; left: string }> = {
  "1": { top: "68%", left: "30%" },
  "2": { top: "34%", left: "58%" },
  "3": { top: "58%", left: "72%" },
  "4": { top: "46%", left: "44%" },
  "5": { top: "24%", left: "22%" },
}

export function MasterPlan() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="master-plan" className="bg-graphite text-background">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/60">Генеральный план</p>
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Более 30 резиденций в трёх очередях
          </Reveal>
          <Reveal as="p" delay={140} className="mt-6 text-pretty leading-relaxed text-background/70">
            Три очереди строительства, досугово-развлекательный центр и ландшафтный парк — единая
            структура посёлка в окружении леса и воды.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal variant="image" className="relative overflow-hidden rounded-lg lg:col-span-8">
            <div className="relative aspect-4/3 sm:aspect-video lg:aspect-4/3">
              <Image
                src="/images/masterplan-aerial.png"
                alt="Аэрофотоснимок генерального плана посёлка Малое Исаково"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-graphite/10" />
              {masterPlanPhases.map((p) => {
                const pos = markers[p.id]
                const isActive = active === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    style={{ top: pos.top, left: pos.left }}
                    onMouseEnter={() => setActive(p.id)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(p.id)}
                    onBlur={() => setActive(null)}
                    aria-label={p.title}
                    className={cn(
                      "absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sm font-medium ring-2 ring-background/70 transition-all",
                      isActive ? "scale-125 bg-accent text-accent-foreground ring-accent" : "bg-background/90 text-graphite",
                    )}
                  >
                    {p.id}
                  </button>
                )
              })}
            </div>
          </Reveal>

          <div className="lg:col-span-4">
            <ul className="grid gap-px overflow-hidden rounded-lg border border-background/15">
              {masterPlanPhases.map((p) => {
                const isActive = active === p.id
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(p.id)}
                      onMouseLeave={() => setActive(null)}
                      className={cn(
                        "flex w-full items-center gap-4 border-t border-background/10 px-5 py-5 text-left transition-colors first:border-t-0",
                        isActive ? "bg-background/10" : "bg-transparent",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors",
                          isActive ? "bg-accent text-accent-foreground" : "bg-background/15 text-background",
                        )}
                      >
                        {p.id}
                      </span>
                      <span className="text-sm font-medium">{p.title}</span>
                      <span
                        className={cn(
                          "ml-auto font-mono text-[10px] uppercase tracking-wider",
                          p.type === "amenity" ? "text-accent" : "text-background/40",
                        )}
                      >
                        {p.type === "amenity" ? "объект" : "очередь"}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { locationMap } from "@/lib/site-data"

const facts = [
  { label: "До Москвы", value: "45 минут" },
  { label: "Расположение", value: "Истринское водохранилище" },
  { label: "Окружение", value: "Вековой лесной массив" },
]

export function Location() {
  return (
    <section id="location" className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Расположение</p>
            </Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              45 минут от Москвы, на берегу большой воды
            </Reveal>
            <Reveal as="p" delay={140} className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Посёлок находится на Истринском водохранилище в глубине лесного массива — сочетание
              транспортной доступности и полной приватности.
            </Reveal>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border">
              {facts.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-4 bg-background px-6 py-5">
                  <dt className="text-sm text-muted-foreground">{f.label}</dt>
                  <dd className="text-right font-display text-lg font-medium text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-7">
            <Reveal variant="image" className="relative aspect-square overflow-hidden rounded-lg border border-border bg-secondary md:aspect-4/3">
              <Image
                src={locationMap}
                alt="Схема расположения посёлка Малое Исаково на Истринском водохранилище"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

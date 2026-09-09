import { Reveal } from "@/components/reveal"

const facts = [
  { label: "До Москвы", value: "45 минут" },
  { label: "Расположение", value: "Истринское водохранилище" },
  { label: "Окружение", value: "Вековой лесной массив" },
]

// Точка посёлка «Малое Исаково».
const LAT = 56.087807
const LON = 36.837036
const YANDEX_MAP_EMBED_SRC = `https://yandex.ru/map-widget/v1/?ll=${LON}%2C${LAT}&z=16&pt=${LON}%2C${LAT}%2Cpm2rdm`
const YANDEX_ROUTE_URL = `https://yandex.ru/maps/?rtext=~${LAT}%2C${LON}&rtt=auto`

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
            <Reveal
              variant="image"
              className="relative h-[400px] w-full overflow-hidden rounded-lg border border-border bg-secondary sm:h-[420px] md:h-[520px]"
            >
              <iframe
                src={YANDEX_MAP_EMBED_SRC}
                title="Малое Исаково на Яндекс Картах"
                width="100%"
                height="100%"
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
              <a
                href={YANDEX_ROUTE_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-5 py-2.5 text-sm font-medium text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background"
              >
                Построить маршрут
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

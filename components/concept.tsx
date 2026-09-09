import { Reveal } from "@/components/reveal"

export function Concept() {
  return (
    <section id="concept" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">О проекте</p>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal as="h2" className="text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Загородный посёлок, где современная архитектура растворяется в вековом лесу у большой воды.
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Малое Исаково — это доступные резиденции комфорт-класса на Истринском водохранилище. Более
            30 резиденций в трёх очередях строительства, собственный досугово-развлекательный центр и
            ландшафтный парк — всё в получасе с небольшим от Москвы.
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {[
              { k: "Лес", v: "Вековой массив вокруг посёлка" },
              { k: "Вода", v: "Берег Истринского водохранилища" },
              { k: "Приватность", v: "Скрыто от посторонних глаз" },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 100} className="bg-background p-6">
                <p className="font-display text-xl font-medium text-foreground">{item.k}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"
import { houseTypes, featuredResidence } from "@/lib/site-data"

export function Houses() {
  return (
    <section id="houses" className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Дома</p>
            </Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Резиденции комфорт-класса
            </Reveal>
          </div>
          <Reveal delay={120} className="text-pretty text-sm leading-relaxed text-muted-foreground md:max-w-xs md:text-right">
            Конфигурации и планировки уточняются под запрос. Ниже — направления резиденций и
            документально подтверждённый пример из презентации.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {houseTypes.map((h, i) => (
            <Reveal key={h.id} delay={i * 90} className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={h.image || "/placeholder.svg"}
                  alt={`${h.name} — современный дом в Малом Исаково`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {h.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-medium text-foreground">{h.name}</h3>
                <div className="mt-4 flex gap-6 text-sm">
                  <div>
                    <p className="text-muted-foreground">Площадь</p>
                    <p className="mt-0.5 font-medium text-foreground">{h.area}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Этажность</p>
                    <p className="mt-0.5 font-medium text-foreground">{h.floors}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{h.note}</p>
                <CtaButton variant="outline" className="mt-6 w-full">
                  Подробнее
                </CtaButton>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 overflow-hidden rounded-lg border border-border bg-foreground text-background">
          <div className="grid gap-8 p-8 sm:grid-cols-2 md:grid-cols-4 md:items-center md:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-background/60">Пример из презентации</p>
              <p className="mt-2 font-display text-2xl font-medium">Резиденция №{featuredResidence.number}</p>
            </div>
            <Metric label="Площадь" value={`${featuredResidence.area} м²`} />
            <Metric label="Этаж" value={featuredResidence.floor} />
            <div className="sm:text-right">
              <p className="text-sm text-background/60">Цена</p>
              <p className="mt-1 font-display text-2xl font-medium">{featuredResidence.price} ₽</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-background/60">{label}</p>
      <p className="mt-1 font-display text-2xl font-medium">{value}</p>
    </div>
  )
}

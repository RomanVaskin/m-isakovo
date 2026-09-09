import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"
import { featuredResidence } from "@/lib/site-data"

const specs = [
  { label: "Общая площадь", value: `${featuredResidence.area} м²` },
  { label: "Этажность", value: "2 этажа" },
  { label: "Отделка", value: "Тёплый контур" },
  { label: "Участок", value: "уточняется" },
  { label: "Терраса", value: "уточняется" },
  { label: "Спальни", value: "уточняется" },
]

export function FloorPlans() {
  return (
    <section id="plans" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Планировки</p>
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Планировка резиденции №{featuredResidence.number}
          </Reveal>
          <Reveal as="p" delay={140} className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Пример из презентации: {featuredResidence.area} м², {featuredResidence.floor} этаж. Полные
            планы этажей и детальные планировки других резиденций предоставляем по запросу.
          </Reveal>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
            {specs.map((s) => (
              <div key={s.label} className="bg-background p-5">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                <dd className="mt-1.5 font-display text-lg font-medium text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>

          <CtaButton variant="accent" className="mt-8 w-full sm:w-auto">
            Запросить планировку
          </CtaButton>
        </div>

        <div className="md:col-span-7">
          <Reveal variant="image" className="relative aspect-square overflow-hidden rounded-lg border border-border bg-secondary md:aspect-4/3">
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                План этажа
              </span>
              <span className="font-display text-2xl font-medium text-foreground">
                {featuredResidence.area} м² · {featuredResidence.floor} этаж
              </span>
              <span className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                Детальная планировка добавляется из проектной документации.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

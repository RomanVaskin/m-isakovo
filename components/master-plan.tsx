import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { masterPlanPhases } from "@/lib/site-data"

export function MasterPlan() {
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
            Более 30 резиденций в 45 минутах от Москвы
          </Reveal>
          <Reveal as="p" delay={140} className="mt-6 text-pretty leading-relaxed text-background/70">
            Актуальный генеральный план показывает три очереди строительства, досугово-развлекательный
            центр и ландшафтный парк.
          </Reveal>
        </div>

        <Reveal variant="image" delay={160} className="mt-14 overflow-hidden rounded-lg">
          <div className="relative aspect-4/3 sm:aspect-video">
            <Image
              src="/images/masterplan-aerial.webp"
              alt="Генеральный план посёлка Малое Исаково с пятью обозначенными зонами"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {masterPlanPhases.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 80}
              className="flex items-center gap-3 rounded-lg border border-background/15 bg-background/5 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background/15 text-sm font-medium">
                {p.id}
              </span>
              <span className="text-sm font-medium leading-5">{p.title}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

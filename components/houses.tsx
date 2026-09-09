import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"
import { residences } from "@/lib/site-data"

export function Houses() {
  return (
    <section id="houses" className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 md:pt-36">
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
              Три резиденции для разных сценариев жизни
            </Reveal>
          </div>
          <Reveal delay={120} className="text-pretty text-sm leading-relaxed text-muted-foreground md:max-w-xs md:text-right">
            «Ницца», «Прованс» и «Милан» сохраняют единый архитектурный язык, но отличаются площадью,
            планировкой и характером пространства.
          </Reveal>
        </div>
      </div>

      {residences.map((residence, i) => (
        <ResidenceBlock key={residence.id} residence={residence} index={i} />
      ))}
    </section>
  )
}

function ResidenceBlock({
  residence,
  index,
}: {
  residence: (typeof residences)[number]
  index: number
}) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
      <div className="grid items-end gap-6 border-t border-border pt-10 md:grid-cols-[1fr_auto]">
        <div>
          <h3 className="font-display text-2xl font-medium text-foreground sm:text-3xl">{residence.name}</h3>
          <p className="mt-1.5 text-muted-foreground">{residence.tagline}</p>
        </div>
        <p className="font-display text-3xl font-medium text-foreground">{residence.area}</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {residence.images.map((src, i) => (
          <div key={src} className="relative aspect-4/3 overflow-hidden rounded-lg sm:aspect-video md:aspect-4/3">
            <Image
              src={src || "/placeholder.svg"}
              alt={`${residence.name}, архитектурный вид ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-lg border border-border bg-background">
          <div className="relative aspect-square sm:aspect-4/3">
            <Image
              src={residence.plan || "/placeholder.svg"}
              alt={`Планировка и экспликация: ${residence.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-3 sm:p-6"
            />
          </div>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">{residence.description}</p>

          <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
            <div className="bg-background p-5">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">«Тёплый контур»</dt>
              <dd className="mt-1.5 font-display text-lg font-medium text-foreground">
                от {residence.warmPrice}
              </dd>
            </div>
            <div className="bg-background p-5">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">«Предчистовая»</dt>
              <dd className="mt-1.5 font-display text-lg font-medium text-foreground">
                от {residence.finishPrice}
              </dd>
            </div>
          </dl>

          <div className="mt-7">
            <h4 className="font-display text-lg font-medium text-foreground">Экспликация помещений</h4>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {residence.rooms.map((room) => (
                <li key={room} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {room}
                </li>
              ))}
            </ul>
          </div>

          <CtaButton variant={index === 0 ? "accent" : "outline"} className="mt-8 w-full sm:w-auto">
            Узнать о резиденции
          </CtaButton>
        </div>
      </div>
    </div>
  )
}

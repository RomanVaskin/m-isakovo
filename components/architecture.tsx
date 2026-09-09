import Image from "next/image"
import { Reveal } from "@/components/reveal"

const materials = ["Натуральное дерево", "Бетон", "Камень", "Металл", "Панорамное остекление"]

export function Architecture() {
  return (
    <section id="architecture" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <div className="max-w-3xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Архитектура</p>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Клубная привилегия эко-минимализма
        </Reveal>
        <Reveal
          as="p"
          delay={140}
          className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Современное архитектурное решение создаёт гармонию каждой улицы, атмосферу единения с
          природой и безупречного комфорта. Строгая геометрия, большие террасы и панорамные окна —
          дом становится продолжением ландшафта.
        </Reveal>
      </div>

      <Reveal variant="image" className="mt-14 overflow-hidden rounded-lg">
        <Image
          src="/images/architecture-street.png"
          alt="Улица современных резиденций Малое Исаково"
          width={1600}
          height={900}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />
      </Reveal>

      <div className="mt-10 flex flex-wrap gap-3">
        {materials.map((m, i) => (
          <Reveal
            key={m}
            delay={i * 60}
            className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground"
          >
            {m}
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {[
          {
            t: "Гармония улиц",
            d: "Единый архитектурный код формирует спокойный, цельный облик всего посёлка.",
          },
          {
            t: "Единение с природой",
            d: "Дома интегрированы в лес: панорамные окна открывают виды на деревья и воду.",
          },
          {
            t: "Безупречный комфорт",
            d: "Продуманная геометрия, свет и материалы работают на ощущение спокойствия.",
          },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 100} className="border-t border-border pt-6">
            <h3 className="font-display text-xl font-medium text-foreground">{c.t}</h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{c.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

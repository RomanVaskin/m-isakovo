import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { ecosystem } from "@/lib/site-data"

export function Infrastructure() {
  return (
    <section id="infrastructure" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <div className="max-w-2xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Инфраструктура</p>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Экосистема вашего комфорта
        </Reveal>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal variant="image" className="overflow-hidden rounded-lg lg:col-span-7">
          <Image
            src="/images/club-complex.png"
            alt="Клубный комплекс посёлка Малое Исаково"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="h-full w-full object-cover"
          />
        </Reveal>

        <div className="flex flex-col justify-center gap-px lg:col-span-5">
          {ecosystem.map((e, i) => (
            <Reveal
              key={e.title}
              delay={i * 100}
              className="border-t border-border py-8 first:border-t-0 first:pt-0"
            >
              <h3 className="font-display text-2xl font-medium text-foreground">{e.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{e.text}</p>
            </Reveal>
          ))}
          <Reveal delay={220} className="border-t border-border py-8">
            <h3 className="font-display text-2xl font-medium text-foreground">Ландшафтный парк</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Отдельная зелёная зона внутри посёлка для прогулок и отдыха на природе.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

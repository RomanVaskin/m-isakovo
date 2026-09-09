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
          Клубная и детская инфраструктура
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {ecosystem.map((e, i) => (
          <Reveal
            key={e.title}
            variant="image"
            delay={i * 120}
            className="overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="relative aspect-4/3">
              <Image
                src={e.image}
                alt={e.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 sm:p-8">
              <h3 className="font-display text-2xl font-medium text-foreground">{e.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{e.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <Reveal
          as="h3"
          className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl"
        >
          Ландшафтный парк и прогулочные зоны
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground"
        >
          Пятая зона генерального плана объединяет прогулочные пространства среди леса и у воды.
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["/projects/maloe-isakovo/forest-water.webp", "Лес и вода рядом с посёлком"],
            ["/projects/maloe-isakovo/infrastructure-1.webp", "Прогулочная зона посёлка"],
            ["/projects/maloe-isakovo/infrastructure-2.webp", "Благоустроенная территория"],
          ].map(([src, alt], i) => (
            <Reveal
              key={src}
              variant="image"
              delay={i * 90}
              className="relative aspect-4/3 overflow-hidden rounded-lg"
            >
              <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

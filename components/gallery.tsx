import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { gallery } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <div className="max-w-2xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Галерея</p>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Архитектура, природа, детали
        </Reveal>
      </div>

      <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[280px] lg:grid-cols-4">
        {gallery.map((img, i) => (
          <Reveal
            key={img.src}
            variant="image"
            delay={(i % 4) * 80}
            className={cn(
              "group relative overflow-hidden rounded-lg",
              img.span === "wide" && "col-span-2",
              img.span === "tall" && "row-span-2",
            )}
          >
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { facadeOptions } from "@/lib/site-data"

export function FacadeMaterials() {
  return (
    <section id="materials" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <div className="max-w-2xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Материалы фасада</p>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Два варианта фасадных решений
        </Reveal>
        <Reveal as="p" delay={140} className="mt-6 text-pretty leading-relaxed text-muted-foreground">
          Фасад в комплектации «Предчистовая» выполняется из одного материала или в комбинированном
          варианте.
        </Reveal>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {facadeOptions.map((option, i) => (
          <Reveal
            key={option.id}
            delay={i * 120}
            className="overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="grid grid-cols-2 gap-3 p-3">
              {option.images.map((src, j) => (
                <div key={src} className="relative aspect-4/3 overflow-hidden rounded-md">
                  <Image
                    src={src}
                    alt={`${option.title}: изображение ${j + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="p-7 sm:p-8">
              <p className="font-mono text-xs text-accent">Вариант {i + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-medium text-foreground">{option.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{option.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

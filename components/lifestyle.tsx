import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function Lifestyle() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[80vh] w-full">
        <Image
          src="/images/lifestyle-terrace.png"
          alt="Терраса резиденции с зоной отдыха на закате"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/85 via-graphite/30 to-graphite/40" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 md:pb-24">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/70">Образ жизни</p>
            </Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-6 max-w-3xl text-balance font-display text-3xl font-medium leading-tight tracking-tight text-background sm:text-4xl md:text-5xl"
            >
              Утро у воды, день в лесу, вечер на террасе у огня
            </Reveal>
            <Reveal
              as="p"
              delay={140}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/80"
            >
              Современный загородный ритм: прогулки по лесу, тишина большой воды, просторные террасы и
              время для семьи — в получасе от города, но будто в другом мире.
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {["Прогулки", "Вода", "Лес", "Террасы", "Семья", "Отдых"].map((tag, i) => (
                <Reveal key={tag} delay={i * 60} className="font-display text-lg text-background/90">
                  {tag}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

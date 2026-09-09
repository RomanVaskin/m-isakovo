import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { naturePoints } from "@/lib/site-data"

export function Nature() {
  return (
    <section className="bg-graphite text-background">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[60vh] overflow-hidden md:min-h-full">
          <Image
            src="/images/nature-water.png"
            alt="Истринское водохранилище в окружении леса на рассвете"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-20 sm:px-10 md:px-16 md:py-28">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/60">
              Природа и расположение
            </p>
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Тишина, которую не нарушит шум города
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden">
            {naturePoints.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="flex gap-6 border-t border-background/15 py-6 first:border-t-0"
              >
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-medium">{p.title}</h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-background/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Reveal } from "@/components/reveal"
import { purchaseOptions } from "@/lib/site-data"

export function Purchase() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <div className="max-w-2xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Способы приобретения</p>
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Гибкие условия покупки
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {purchaseOptions.map((o, i) => (
          <Reveal
            key={o.title}
            delay={i * 100}
            className="flex flex-col rounded-lg border border-border p-8"
          >
            <span className="font-mono text-sm text-accent">0{i + 1}</span>
            <h3 className="mt-6 font-display text-2xl font-medium text-foreground">{o.title}</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{o.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

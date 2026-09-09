import { Reveal } from "@/components/reveal"
import { shellSpec } from "@/lib/site-data"

export function ShellSpec() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Комплектация</p>
            </Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Две комплектации: «Тёплый контур» и «Предчистовая»
            </Reveal>
            <Reveal as="p" delay={140} className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Дом передаётся с подготовленными коммуникациями, ограждением и монолитным благоустройством
              участка — на выбор чёрновая или предчистовая отделка.
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {shellSpec.map((block, i) => (
                <Reveal key={block.group} delay={i * 90} className="bg-background p-7">
                  <h3 className="font-display text-lg font-medium text-foreground">{block.group}</h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

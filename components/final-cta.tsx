import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[70vh] w-full">
        <Image
          src="/images/house-c.png"
          alt="Резиденция Малое Исаково на закате"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-graphite/70" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/70">
                Твоё маленькое счастье
              </p>
            </Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-background sm:text-5xl md:text-6xl"
            >
              Найдите свой дом в Малом Исаково
            </Reveal>
            <Reveal
              as="p"
              delay={140}
              className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/80"
            >
              Приезжайте на просмотр — покажем резиденции, территорию и природу посёлка. Или получите
              подробную презентацию проекта.
            </Reveal>
            <Reveal delay={220} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaButton variant="accent">Записаться на просмотр</CtaButton>
              <CtaButton variant="outline" className="border-background/40 bg-background/10 text-background hover:bg-background/20">
                Получить презентацию
              </CtaButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

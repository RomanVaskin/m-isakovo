import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/site-data"

export function Developer() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        <Reveal className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:gap-10 sm:text-left">
          <Image
            src="/brand/developer-logo.svg"
            alt={site.developer}
            width={160}
            height={160}
            className="h-20 w-auto shrink-0 md:h-24"
          />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">Девелопер проекта</p>
            <p className="mt-3 font-display text-xl font-medium text-foreground">{site.developer}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

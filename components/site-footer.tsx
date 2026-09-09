import { nav, site, phones } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="bg-graphite text-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-tight">Малое Исаково</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-background/60">
              Истра Строй Сервис
            </p>
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-background/70">
              Доступные резиденции комфорт-класса на Истринском водохранилище. Твоё маленькое счастье
              в 45 минутах от Москвы.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-wider text-background/50">Разделы</p>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-background/80 transition-colors hover:text-background">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wider text-background/50">Контакты</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-background/80">
              {phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-background">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-background">
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-background/60">{site.address}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-background/15 pt-8 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Малое Исаково · Истра Строй Сервис</p>
          <p>Не является публичной офертой. Характеристики уточняйте у отдела продаж.</p>
        </div>
      </div>
    </footer>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Малое Исаково — Резиденции комфорт-класса на Истринском водохранилище',
  description:
    'Малое Исаково — доступные резиденции комфорт-класса в 45 минутах от Москвы, скрытые в глубине векового лесного массива на берегу Истринского водохранилища.',
  generator: 'v0.app',
  metadataBase: new URL('https://m-isakova.ro'),
  openGraph: {
    title: 'Малое Исаково — Твоё маленькое счастье',
    description:
      'Современные резиденции комфорт-класса в лесу на берегу Истринского водохранилища. Более 30 резиденций, 45 минут от Москвы.',
    type: 'website',
    locale: 'ru_RU',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f4ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`light ${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

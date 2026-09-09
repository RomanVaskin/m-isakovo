import { BookingProvider } from "@/components/booking-provider"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Concept } from "@/components/concept"
import { Nature } from "@/components/nature"
import { Architecture } from "@/components/architecture"
import { Houses } from "@/components/houses"
import { FloorPlans } from "@/components/floor-plans"
import { MasterPlan } from "@/components/master-plan"
import { Infrastructure } from "@/components/infrastructure"
import { ShellSpec } from "@/components/shell-spec"
import { Lifestyle } from "@/components/lifestyle"
import { Gallery } from "@/components/gallery"
import { Location } from "@/components/location"
import { Purchase } from "@/components/purchase"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <BookingProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Concept />
        <Nature />
        <Architecture />
        <Houses />
        <FloorPlans />
        <MasterPlan />
        <Infrastructure />
        <ShellSpec />
        <Lifestyle />
        <Gallery />
        <Location />
        <Purchase />
        <FinalCta />
      </main>
      <SiteFooter />
    </BookingProvider>
  )
}

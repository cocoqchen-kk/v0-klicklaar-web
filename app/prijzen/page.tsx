import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { PricingTiersSection } from "@/components/pricing-tiers-section"
import { PricingTestimonialsSection } from "@/components/pricing-testimonials-section"
import { PricingFinalCtaSection } from "@/components/pricing-final-cta-section"

export default function PrijzenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <PricingTiersSection />
        <PricingTestimonialsSection />
        <PricingFinalCtaSection />
      </main>

      <Footer />
    </div>
  )
}

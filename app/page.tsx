import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { NetworkSection } from "@/components/network-section"
import { IndustriesSection } from "@/components/industries-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <TestimonialsSection />
      <FeaturesSection />
      <PricingSection />
      <NetworkSection />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </main>
  )
}

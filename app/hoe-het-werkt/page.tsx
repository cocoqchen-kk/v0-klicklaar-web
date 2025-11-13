import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HoeHetWerktHero from "@/components/hoe-het-werkt-hero"
import OnboardingStepsSection from "@/components/onboarding-steps-section"
import PlatformFeaturesSection from "@/components/platform-features-section"
import OnzeBoekehoudersSection from "@/components/onze-boekhouders-section"
import HoeHetWerktFinalCTA from "@/components/hoe-het-werkt-final-cta"

export default function HoeHetWerktPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <HoeHetWerktHero />
        <OnboardingStepsSection />
        <PlatformFeaturesSection />
        <OnzeBoekehoudersSection />
        <HoeHetWerktFinalCTA />
      </main>

      <Footer />
    </div>
  )
}

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DienstenHeroSection from "@/components/diensten-hero-section"
import BoekhoudingServiceSection from "@/components/boekhouding-service-section"
import AccountingServiceSection from "@/components/accounting-service-section"
import LiveInsightSection from "@/components/live-insight-section"
import PersonalAdvisorSection from "@/components/personal-advisor-section"
import RiskManagementSection from "@/components/risk-management-section"
import DienstenCTASection from "@/components/diensten-cta-section"

export default function DienstenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <DienstenHeroSection />
        <BoekhoudingServiceSection />
        <AccountingServiceSection />
        <LiveInsightSection />
        <PersonalAdvisorSection />
        <RiskManagementSection />
        <DienstenCTASection />
      </main>

      <Footer />
    </div>
  )
}

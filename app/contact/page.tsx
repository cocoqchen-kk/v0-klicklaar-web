import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactHeroSection from "@/components/contact-hero-section"
import ContactMethodsSection from "@/components/contact-methods-section"
import ContactTeamSection from "@/components/contact-team-section"
import ContactOfficesSection from "@/components/contact-offices-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <ContactHeroSection />
        <ContactMethodsSection />
        <ContactTeamSection />
        <ContactOfficesSection />
      </main>

      <Footer />
    </div>
  )
}

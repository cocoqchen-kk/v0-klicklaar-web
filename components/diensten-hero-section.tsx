import Image from "next/image"
import { Shield, Headphones, Star } from "lucide-react"

export default function DienstenHeroSection() {
  return (
    <section className="bg-[#EEF0FD] py-12 md:py-16 lg:py-20">
      {/* Header Text Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8">
            Jouw administratie. <span className="text-[#5B6FED]">Veilig bij ons.</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#6B7280] max-w-5xl mx-auto leading-relaxed px-4">
            Je krijgt een betrokken partner die jouw cijfers begrijpt, met je meedenkt en altijd bereikbaar is. Wij
            maken de administratie van jouw eenmanszaak of VOF simpel en overzichtelijk. Zodat jij je kunt focussen op
            ondernemen in plaats van op papierwerk. We zijn er. Altijd. En dichtbij.
          </p>
        </div>
      </div>

      {/* Hero Image Section with Floating Card */}
      <div className="relative w-full">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/professional-business-advisors-woman-and-man-stand.jpg"
            alt="Professional business team"
            fill
            className="object-cover"
            priority
          />

          {/* Floating Card - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute bottom-8 left-8 lg:left-16 bg-white rounded-2xl shadow-xl p-6 max-w-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#E8EBFD] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#5B6FED]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1F2937] mb-1">100% Veilig & Betrouwbaar</h3>
                <p className="text-sm text-[#6B7280]">Jouw data in goede handen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Floating Card - Shown below image on mobile */}
        <div className="md:hidden container mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#E8EBFD] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#5B6FED]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1F2937] mb-1">100% Veilig & Betrouwbaar</h3>
                <p className="text-sm text-[#6B7280]">Jouw data in goede handen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 mt-12 md:mt-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E8EBFD] rounded-full flex items-center justify-center">
              <Headphones className="w-5 h-5 text-[#5B6FED]" />
            </div>
            <span className="text-[#1F2937] text-base md:text-lg font-medium">24/7 ondersteuning</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E8EBFD] rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-[#5B6FED]" />
            </div>
            <span className="text-[#1F2937] text-base md:text-lg font-medium">Service op maat</span>
          </div>
        </div>
      </div>
    </section>
  )
}

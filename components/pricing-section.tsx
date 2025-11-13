import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFF5F5] py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
      {/* Decorative shape in bottom left */}
      <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-[#FFE5E5] rounded-tr-full opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Transparante prijzen</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">Eenvoudig, eerlijk en zonder verborgen kosten</p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#5B6FED] to-[#4A5ED8] p-8 md:p-12 lg:p-16">
            {/* Decorative hand illustrations background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-10 w-40 h-40 md:w-60 md:h-60">
                <svg viewBox="0 0 200 200" className="w-full h-full text-blue-900">
                  <path
                    d="M100 20 L120 60 L160 80 L140 120 L160 160 L120 140 L100 180 L80 140 L40 160 L60 120 L40 80 L80 60 Z"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
              </div>
              <div className="absolute bottom-10 right-20 w-32 h-32 md:w-48 md:h-48">
                <svg viewBox="0 0 200 200" className="w-full h-full text-blue-900">
                  <path
                    d="M60 40 C60 40 80 60 100 60 C120 60 140 40 140 40 L140 160 L60 160 Z"
                    fill="currentColor"
                    opacity="0.2"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Price */}
              <div className="mb-8 md:mb-12">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">€</span>
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">49,90</span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-white">/maand</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 md:space-y-5 mb-8 md:mb-10 max-w-md mx-auto">
                {[
                  "Volledige boekhouding",
                  "BTW-aangiften",
                  "Persoonlijke begeleiding",
                  "Bereikbaar op alle werkdagen",
                  "Maandelijkse rapportages",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-[#F9C22E] flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#5B6FED] stroke-[3]" />
                      </div>
                    </div>
                    <span className="text-base md:text-lg lg:text-xl text-white font-normal">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <button className="bg-white text-[#5B6FED] px-12 md:px-16 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
                  Start nu
                </button>
              </div>

              {/* Footer text */}
              <p className="text-sm md:text-base text-white/90">Geen opzegtermijn • Opzeggen kan altijd</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

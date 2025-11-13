import Image from "next/image"
import { Check, Phone } from "lucide-react"

export default function LiveInsightSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Icon and Badge */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium">Live Inzicht</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 leading-tight">
              Altijd inzicht - met 24/7 support
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Ondernemen vraagt om actuele cijfers, en die heb je bij Klicklaar altijd bij de hand. Via onze live app
              zie je direct rapportages, trends en resultaten, zodat je op elk moment weet hoe je bedrijf ervoor staat.
              Heb je een vraag of twijfel je over een keuze? Onze support is 24/7 bereikbaar en je krijgt snel een
              persoonlijk antwoord.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Live rapportages en trends",
                "Actuele cijfers altijd bij de hand",
                "24/7 bereikbare support",
                "Snel persoonlijk antwoord",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-800 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gray-800" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Probeer de app
            </button>
          </div>

          {/* Right Column - Image with Decorative Elements */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/laptop-hands-typing.jpg"
                alt="Person working on laptop"
                width={800}
                height={900}
                className="w-full h-auto object-cover"
              />

              {/* Decorative Elements */}
              {/* Dark circle - top center */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-20 bg-gray-800 rounded-full" />

              {/* Light purple circle - top right */}
              <div className="absolute top-12 right-8 w-32 h-32 bg-[#E8E7F4] rounded-full opacity-70" />

              {/* Coral circle - right side */}
              <div className="absolute top-1/3 right-4 w-16 h-16 bg-[#ED7461] rounded-full" />

              {/* Phone Icon Card - bottom center */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center">
                <div className="w-12 h-12 bg-[#5B6FED] rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

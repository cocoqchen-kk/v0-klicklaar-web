import { FileText, BarChart3, Check } from "lucide-react"
import Image from "next/image"

export default function BoekhoudingServiceSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Icon and Badge */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                <FileText className="w-8 h-8 text-[#5B6FED]" />
              </div>
              <span className="inline-block px-6 py-2 rounded-full primary text-white text-sm font-medium">
                Service
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Boekhouding - jouw facturen en aangiften geregeld
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Facturen, bonnetjes en aangiften – wij zorgen dat alles netjes en op tijd verwerkt wordt. Je
              factuuradministratie, IB- en BTW-aangiften lopen soepel door, zonder dat jij je zorgen hoeft te maken over
              deadlines of boetes. Met onze online app heb je je administratie altijd bij de hand en houd je grip op je
              cijfers, waar je ook bent.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-[#5B6FED]" strokeWidth={3} />
                </div>
                <span className="text-base md:text-lg text-gray-900 font-medium">
                  Factuuradministratie volledig geregeld
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-[#5B6FED]" strokeWidth={3} />
                </div>
                <span className="text-base md:text-lg text-gray-900 font-medium">
                  IB- en BTW-aangiften op tijd ingediend
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-[#5B6FED]" strokeWidth={3} />
                </div>
                <span className="text-base md:text-lg text-gray-900 font-medium">Online app voor 24/7 toegang</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-[#5B6FED]" strokeWidth={3} />
                </div>
                <span className="text-base md:text-lg text-gray-900 font-medium">Geen deadlines of boetes meer</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-8 py-3 primary text-white rounded-lg font-medium hover:bg-[#4A5ED8] transition-colors text-base md:text-lg">
              Kennismaking
            </button>
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-100">
              <Image
                src="/woman-working-on-laptop-relaxed.jpg"
                alt="Woman working on laptop"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />

              {/* Decorative Chart Icon - Top Right */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-[#5B6FED]" />
              </div>

              {/* Decorative Circle - Bottom Left */}
              <div className="absolute bottom-8 left-8 w-20 h-20 rounded-full bg-[#ED7461] opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

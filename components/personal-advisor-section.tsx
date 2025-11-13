import Image from "next/image"
import { Users, Check } from "lucide-react"

export default function PersonalAdvisorSection() {
  const features = [
    "Vaste boekhouder die jouw bedrijf kent",
    "Meedenken over kansen en risico's",
    "Persoonlijk advies op maat",
    "Vertrouwenspersoon het hele jaar",
  ]

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Image with decorative elements */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#1a1a1a] rounded-lg z-10" />
              <div className="absolute -top-12 left-16 w-20 h-20 bg-[#FFE8E8] rounded-2xl" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/professional-business-advisors-woman-and-man-stand.jpg"
                  alt="Professional business advisors"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />

                {/* Floating card at bottom */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg">
                    <Users className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="font-semibold text-gray-900">Persoonlijke aanpak</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Icon and badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-14 h-14 bg-[#EEF0FD] rounded-xl">
                <Users className="w-7 h-7 text-[#5B6FED]" />
              </div>
              <span className="px-4 py-2 bg-[#5B6FED] text-white text-sm font-medium rounded-lg">Persoonlijk</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Je eigen boekhouder én adviseur
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Bij ons heb je geen wisselende contactpersonen, maar een vaste boekhouder die jouw bedrijf kent. Hij of
              zij kijkt verder dan alleen de cijfers en denkt met je mee over kansen, risico's en slimme keuzes. Zo
              combineer je zekerheid met persoonlijk advies – een vertrouwenspersoon die naast je staat, het hele jaar
              door.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#EEF0FD] flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#5B6FED]" strokeWidth={3} />
                    </div>
                  </div>
                  <span className="text-base md:text-lg text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="px-8 py-3 bg-[#5B6FED] text-white font-semibold rounded-lg hover:bg-[#4A5ED4] transition-colors duration-200 shadow-md hover:shadow-lg">
              Kennismaking
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

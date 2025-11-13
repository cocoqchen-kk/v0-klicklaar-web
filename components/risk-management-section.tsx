import { Check } from "lucide-react"
import Image from "next/image"

export default function RiskManagementSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Icon and Badge */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-[#FFE8E5] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#ED7461]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="px-4 py-2 bg-[#ED7461] text-white rounded-full text-sm font-medium">Bescherming</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] leading-tight">
              Risk Management &<br />
              Legal Compliance
            </h2>

            {/* Description */}
            <p className="text-[#4a5565] text-base md:text-lg leading-relaxed">
              Ondernemen brengt risico's en regels met zich mee. Wij helpen je die helder in kaart te brengen en te
              voorkomen dat je voor verrassingen komt te staan. Van duidelijke contracten en naleving van wet- en
              regelgeving tot advies over aansprakelijkheid, verzekeringen en financiële buffers – wij zorgen dat je
              bedrijf juridisch waterdicht is en bestand tegen tegenvallers. Zo werk je met rust en vertrouwen aan je
              groei.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#ED7461] flex-shrink-0 mt-0.5" />
                <span className="text-[#1a1a1a] text-base md:text-lg font-medium">
                  Contracten en voorwaarden goed geregeld
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#ED7461] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#1a1a1a] text-base md:text-lg font-medium">
                    Voldoen aan wettelijke verplichtingen
                  </span>
                  <span className="text-[#4a5565] text-sm ml-1">(o.a. AVG, bewaarplicht)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#ED7461] flex-shrink-0 mt-0.5" />
                <span className="text-[#1a1a1a] text-base md:text-lg font-medium">
                  Inzicht in aansprakelijkheid en risico's
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#ED7461] flex-shrink-0 mt-0.5" />
                <span className="text-[#1a1a1a] text-base md:text-lg font-medium">
                  Advies over verzekeringen en financiële buffers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#ED7461] flex-shrink-0 mt-0.5" />
                <span className="text-[#1a1a1a] text-base md:text-lg font-medium">
                  Zekerheid en bescherming zonder gedoe
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <button className="px-8 py-3 bg-[#ED7461] text-white rounded-lg font-medium hover:bg-[#E56854] transition-colors">
              Kennismaken
            </button>
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/notebook-pen-documents.jpg"
                alt="Notebook en documenten"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />

              {/* Decorative Circles */}
              <div className="absolute bottom-12 left-8 w-32 h-32 rounded-full bg-[#E8E5F8] opacity-80"></div>
              <div className="absolute bottom-16 left-12 w-16 h-16 rounded-full bg-[#ED7461]"></div>

              {/* Document Icon Card */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5B6FED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

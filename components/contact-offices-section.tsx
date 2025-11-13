import { MapPin } from "lucide-react"
import Image from "next/image"

export default function ContactOfficesSection() {
  const offices = [
    { city: "Amsterdam", address: "Strawinskylaan 6" },
    { city: "Rotterdam", address: "Coolsingel 65" },
    { city: "Utrecht", address: "Stadsplateau 7" },
    { city: "Eindhoven", address: "Schimmelt 2-16" },
    { city: "Zwolle", address: "Grote Voort 293-A" },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101828] mb-4 md:mb-6">
            Altijd dichtbij met onze kantoren
          </h2>
          <p className="text-base md:text-lg text-[#4a5565] max-w-2xl mx-auto">
            Bezoek ons in één van onze moderne kantoren door heel Nederland. Persoonlijk contact blijft belangrijk.
          </p>
        </div>

        {/* Office Hero Image */}
        <div className="mb-12 md:mb-16">
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/modern-office-reception-with-klicklaar-branding.jpg"
              alt="Modern Klicklaar office reception with wood paneling and branding"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Office Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#dbeafe] mb-4">
                <MapPin className="w-6 h-6 text-[#4155d2]" />
              </div>
              <h3 className="text-xl font-bold text-[#101828] mb-2">{office.city}</h3>
              <p className="text-[#4a5565]">{office.address}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#4155d2] to-[#5b6fd8] p-12 md:p-16 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Klaar om te beginnen?
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Neem vandaag nog contact met ons op en ontdek hoe wij jouw boekhouding kunnen vereenvoudigen.
            </p>
            <button className="bg-white text-[#4155d2] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Plan Kennismaken
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      category: "Zorg",
      categoryColor: "primary",
      title: "Freelancers Zorg",
      description: "Specialistische boekhouding voor zorgverleners, fysiotherapeuten en andere freelancers in de zorg.",
      image: "/healthcare-professional.jpg",
      linkColor: "text-[#5B6FED]",
    },
    {
      category: "Bouw",
      categoryColor: "bg-[#ED7461]",
      title: "Freelancers Bouw",
      description:
        "Expertise in bouwadministratie, uitbesteding en materiaalkosten­registratie voor zelfstandigen in de bouw.",
      image: "/construction-work.jpg",
      linkColor: "text-[#ED7461]",
    },
    {
      category: "Transport",
      categoryColor: "bg-[#6e6e6e]",
      title: "Freelancers Taxi & Transport",
      description: "Gespecialiseerde administratie voor taxi- en transportondernemers, inclusief kilometerregistratie.",
      image: "/transport-taxi.jpg",
      linkColor: "text-[#6e6e6e]",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">Wij begrijpen jouw vakgebied</h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#5B6FED] border-2 border-[#5B6FED] px-6 py-3 rounded-lg hover:primary hover:text-white transition-colors font-medium"
          >
            Alle branches
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image with Badge */}
              <div className="relative h-64 md:h-56">
                <Image src={industry.image || "/placeholder.svg"} alt={industry.title} fill className="object-cover" />
                <span
                  className={`absolute top-4 left-4 ${industry.categoryColor} text-white px-6 py-2 rounded-full font-medium`}
                >
                  {industry.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-4">{industry.title}</h3>
                <p className="text-[#6e6e6e] leading-relaxed mb-6">{industry.description}</p>
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 ${industry.linkColor} font-medium hover:gap-3 transition-all`}
                >
                  Lees verder
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

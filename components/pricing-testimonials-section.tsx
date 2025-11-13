import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export function PricingTestimonialsSection() {
  const testimonials = [
    {
      name: "Frank Laenen",
      company: "Grand Café 1466",
      companyColor: "text-[#4155d2]",
      borderColor: "ring-[#4155d2]",
      linkColor: "text-[#4155d2]",
      quote:
        '"Toen anderen op de rem trapten, gaf Frank juist gas. Midden in coronatijd startte hij zijn horecazaak Grand Café 1466 - met drie ton eigen geld, een ster..."',
      image: "/businessman-in-cafe.jpg",
    },
    {
      name: "Viktor Brons",
      company: "Basilica Vastgoed",
      companyColor: "text-[#ed7461]",
      borderColor: "ring-[#ed7461]",
      linkColor: "text-[#ed7461]",
      quote:
        '"Met zijn bedrijf ondersteunt hij eigenaren van historische panden, waar emotie en erfgoed samenkomen. Toen hij te maken kreeg met lange betaaltermijnen en..."',
      image: "/real-estate-professional.jpg",
      companySubtitle: "Management",
    },
    {
      name: "Toon van Rooij",
      company: "Hogshead",
      companyColor: "text-[#6e6e6e]",
      borderColor: "ring-[#1a1a1a]",
      linkColor: "text-[#6e6e6e]",
      quote:
        '"Toon\'s passie voor whisky groeide uit van een hobby tot Hogshead Imports, een import- en groothandelsbedrijf gespecialiseerd in onafhankelijke..."',
      image: "/whisky-bar-owner.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#e8e8f5]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#1a1a1a]">
          Al 1.036 freelancers gingen jou voor!
        </h2>

        {/* Rating */}
        <div className="flex items-center justify-center gap-3 mb-12 md:mb-16">
          <span className="text-base md:text-lg text-[#6e6e6e] font-medium">Uitstekend</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-[#4155d2] text-[#4155d2]" />
            ))}
          </div>
          <span className="text-base md:text-lg text-[#6e6e6e] font-medium">4.7 uit 5</span>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
              {/* Profile Section */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`relative flex-shrink-0 rounded-full ring-4 ${testimonial.borderColor} overflow-hidden`}
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{testimonial.name}</h3>
                  <p className={`text-base font-medium ${testimonial.companyColor}`}>{testimonial.company}</p>
                  {testimonial.companySubtitle && (
                    <p className={`text-base font-medium ${testimonial.companyColor}`}>{testimonial.companySubtitle}</p>
                  )}
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#6e6e6e] text-base leading-relaxed mb-8 flex-1">{testimonial.quote}</p>

              {/* Read More Link */}
              <a
                href="#"
                className={`inline-flex items-center gap-2 ${testimonial.linkColor} font-semibold text-base hover:gap-3 transition-all`}
              >
                Lees verder
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

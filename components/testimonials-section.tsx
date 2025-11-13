import { ArrowRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Frank Laenen",
      company: "Grand Café 1466",
      avatarColor: "blue",
      text: '"Toen anderen op de rem trapten, gaf Frank juist gas. Midden in coronatijd startte hij zijn horecazaak Grand Café 1466 - met drie ton eigen geld, een ster..."',
      linkColor: "text-blue-600",
      avatar: "/frank-cafe-owner.jpg",
    },
    {
      name: "Viktor Brons",
      company: "Basilica Vastgoed",
      companyLine2: "Management",
      avatarColor: "coral",
      text: '"Met zijn bedrijf ondersteunt hij eigenaren van historische panden, waar emotie en erfgoed samenkomen. Toen hij te maken kreeg met lange betaaltermijnen en..."',
      linkColor: "text-[#FF6B5A]",
      avatar: "/viktor-business-professional.jpg",
    },
    {
      name: "Toon van Rooij",
      company: "Hogshead",
      avatarColor: "black",
      text: '"Toon\'s passie voor whisky groeide uit van een hobby tot Hogshead Imports, een import- en groothandelsbedrijf gespecialiseerd in onafhankelijke..."',
      linkColor: "text-gray-700",
      avatar: "/toon-whisky-business.jpg",
    },
  ]

  return (
    <section className="bg-[#F7F8FC] py-16 px-4 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Al 1.036 freelancers gingen jou voor!
          </h2>

          {/* Rating */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-gray-600 text-lg">Uitstekend</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-[#5B6FED] text-[#5B6FED]" />
              ))}
            </div>
            <span className="text-gray-600 text-lg">4.7 uit 5</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              {/* Avatar and Info */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`
                  relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0
                  ${testimonial.avatarColor === "blue" ? "ring-4 ring-[#5B6FED]" : ""}
                  ${testimonial.avatarColor === "coral" ? "ring-4 ring-[#FF6B5A]" : ""}
                  ${testimonial.avatarColor === "black" ? "ring-4 ring-black" : ""}
                `}
                >
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                  <p
                    className={`text-base ${testimonial.avatarColor === "blue" ? "text-[#5B6FED]" : ""}${
                      testimonial.avatarColor === "coral" ? "text-[#FF6B5A]" : ""
                    }${testimonial.avatarColor === "black" ? "text-gray-600" : ""}`}
                  >
                    {testimonial.company}
                  </p>
                  {testimonial.companyLine2 && <p className="text-[#FF6B5A] text-base">{testimonial.companyLine2}</p>}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-base leading-relaxed mb-6 text-justify">{testimonial.text}</p>

              {/* Read More Link */}
              <button
                className={`flex items-center gap-2 font-medium ${testimonial.linkColor} hover:gap-3 transition-all`}
              >
                Lees verder
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

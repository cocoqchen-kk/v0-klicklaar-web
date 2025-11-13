import Image from "next/image"

export function NetworkSection() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Image with decorative elements */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/woman-working-with-dog.jpg"
                alt="Freelancer working at home with dog"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />

              {/* Decorative circles */}
              <div className="absolute top-0 left-8 w-20 h-20 bg-[#5B6FED] rounded-full -translate-y-1/2 md:w-24 md:h-24 lg:w-28 lg:h-28"></div>
              <div className="absolute top-12 right-8 w-24 h-24 bg-[#E8E9FF] rounded-full md:w-32 md:h-32 lg:w-36 lg:h-36"></div>
              <div className="absolute top-8 right-0 w-12 h-12 bg-[#ED7461] rounded-full translate-x-1/2 md:w-16 md:h-16"></div>
              <div className="absolute bottom-0 right-32 w-32 h-32 bg-[#5B6FED] rounded-full translate-y-1/2 md:w-40 md:h-40 lg:w-48 lg:h-48"></div>

              {/* Decorative shape boxes */}
              <div className="absolute bottom-24 left-0 w-32 h-20 bg-white rounded-2xl shadow-lg -translate-x-1/3 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#ED7461] rounded-full"></div>
              </div>
              <div className="absolute bottom-32 right-8 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-[#5B6FED] rounded-xl"></div>
              </div>
              <div className="absolute top-1/2 left-0 w-28 h-12 bg-[#ED7461] rounded-full -translate-x-1/2 opacity-80"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1A1A1A] leading-tight">
              Je bent pas gelukkig als jij geld kan verdienen.
            </h2>

            <div className="space-y-4 text-[#6E6E6E] text-base sm:text-lg leading-relaxed">
              <p>
                Bij Klicklaar sta je er niet alleen voor. Je hoort bij een netwerk van ondernemers die elkaar helpen,
                leren en zaken doen. Omdat we onze klanten goed kennen, brengen we je in contact met de juiste mensen.
              </p>

              <p>
                We delen kennis over wat echt telt voor groei: marketing, HR, juridische vragen, belastingen en
                boekhouding. Zo word jij sterker als ondernemer.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-[#5B6FED] text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#4A5FDC] transition-colors shadow-md w-full sm:w-auto">
                Word onderdeel van ons netwerk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

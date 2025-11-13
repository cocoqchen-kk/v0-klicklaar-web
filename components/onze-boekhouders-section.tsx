import { CheckCircle2, Users } from "lucide-react"
import Image from "next/image"

export default function OnzeBoekehoudersSection() {
  const features = ["Meer tijd voor jou", "Proactief advies", "5x per jaar gesprek", "Belastingoptimalisatie"]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Onze Boekhouders</h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Onze boekhouders zijn anders dan anderen. De belangrijkste reden? Ze hebben tijd. Tijd om jou en je
                bedrijf te leren kennen. Tijd om de diepte in te gaan en te zoeken naar manieren om je belastingdruk te
                verlagen, je te helpen kansen te verzilveren en risico&apos;s verantwoord te houden.
              </p>

              <p>
                Natuurlijk controleren ze ook je boekhouding, maar door Klicklaar&apos;s technologie kunnen ze hier veel
                minder tijd aan besteden dan de gemiddelde collega — omdat de administratie al klopt.
              </p>

              <p>
                Als klant heb je dus een boekhouder die bereikbaar is en met je meedenkt. Vijf keer per jaar heb je een
                adviesgesprek: een maand voor elk BTW-tijdvak, en een maand vóór de aangifte inkomstenbelasting. Zo
                organiseren we proactiviteit en signaleren we samen kansen en problemen voordat ze ontstaan.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5B6FED] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button className="primary text-white px-8 py-3 rounded-lg font-medium hover:bg-[#4A5FDC] transition-colors">
                Kennismaking
              </button>
            </div>
          </div>

          {/* Right Column - Image with Decorative Elements */}
          <div className="relative lg:pl-8">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-12 w-16 h-16 bg-[#ED7461] rounded-full opacity-60 -z-10" />
            <div className="absolute top-20 right-32 w-32 h-32 bg-[#E8EBFD] rounded-full opacity-80 -z-10" />

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/professional-woman-in-tan-blazer-smiling.jpg"
                alt="Professional accountant"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />

              {/* Floating Phone Mockup */}
              <div className="absolute top-8 right-4 w-32 md:w-40 lg:w-48 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-800">
                <Image
                  src="/office-workspace-with-people.jpg"
                  alt="Office workspace"
                  width={200}
                  height={300}
                  className="w-full h-auto"
                />
              </div>

              {/* Floating "Persoonlijk Meedenken" Card */}
              <div className="absolute bottom-8 right-4 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FEE8E5] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#ED7461]" />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Persoonlijk</div>
                  <div className="text-gray-600 text-xs">Meedenken</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

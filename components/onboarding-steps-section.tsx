import { Check } from "lucide-react"

export default function OnboardingStepsSection() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Onboarding in 3 stappen
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            Van kennismaking tot je eerste factuur - zo simpel werkt het bij Klicklaar
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20 relative">
          {/* Connecting lines - hidden on mobile */}
          <div
            className="hidden md:block absolute top-[60px] left-1/6 right-1/6 h-[2px] bg-gray-300"
            style={{
              left: "calc(33.333% - 30px)",
              right: "calc(33.333% - 30px)",
              width: "calc(33.333% + 60px)",
            }}
          >
            <div className="absolute left-0 right-0 h-full bg-gray-300" />
          </div>
          <div
            className="hidden md:block absolute top-[60px] bg-gray-300"
            style={{
              left: "calc(66.666% - 30px)",
              right: "calc(-33.333% + 30px)",
              height: "2px",
              width: "calc(33.333% + 60px)",
            }}
          >
            <div className="absolute left-0 right-0 h-full bg-gray-300" />
          </div>

          {/* Step 1 */}
          <div className="relative">
            <div className="bg-[#E8EBFD] rounded-2xl p-8 md:p-10 text-center h-full flex flex-col items-center justify-start">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#5B6FED] flex items-center justify-center text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8 relative z-10">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Kennismaken</h3>
              <p className="text-gray-600 text-base md:text-lg">We leren je organisatie kennen.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-[#FDF3F1] rounded-2xl p-8 md:p-10 text-center h-full flex flex-col items-center justify-start">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#ED7461] flex items-center justify-center text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8 relative z-10">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Op maat pakket</h3>
              <p className="text-gray-600 text-base md:text-lg mb-3">
                We stellen een servicepakket samen dat past bij jouw behoeften.
              </p>
              <p className="text-gray-600 text-base md:text-lg">
                Je kunt je eenvoudig inschrijven via het Klicklaar Portal.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-[#F0F0F0] rounded-2xl p-8 md:p-10 text-center h-full flex flex-col items-center justify-start">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8 relative z-10">
                3
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Validatie & Controle</h3>
              <p className="text-gray-600 text-base md:text-lg">
                We verifiëren je bedrijfsidentiteit via KVK- en btw-registratie, voeren een risicobeoordeling uit en
                koppelen je bankrekening.
              </p>
            </div>
          </div>
        </div>

        {/* Historical Documents Box */}
        <div className="border-2 border-gray-200 rounded-2xl p-8 md:p-10 lg:p-12 mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4 md:mb-6">
            En hoe gaan we om met historische documenten?
          </h3>
          <p className="text-base md:text-lg text-gray-600 text-center mb-6 md:mb-8 max-w-3xl mx-auto">
            Geen zorgen: er zijn geen overstapkosten en we brengen hiervoor geen extra kosten in rekening.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              <span className="text-gray-700 text-sm md:text-base">Geen overstapkosten</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              <span className="text-gray-700 text-sm md:text-base">Geen extra kosten</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              <span className="text-gray-700 text-sm md:text-base">Volledig verzorgd</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-[#5B6FED] hover:bg-[#4A5ED9] text-white font-semibold px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-lg text-base md:text-lg transition-colors">
            Start je onboarding
          </button>
        </div>
      </div>
    </section>
  )
}

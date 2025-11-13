import { Calculator, CheckCircle2 } from "lucide-react"

export default function AccountingServiceSection() {
  const features = [
    "Belastingaangiften volledig uit handen",
    "Jaarrekening netjes en op tijd",
    "Analyse en rapportages (o.a. cashflow, winst/verlies)",
    "Advies en interpretatie voor betere beslissingen",
    "100% volgens de regels, geen stress of verrassingen",
  ]

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image with decorative elements */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/workspace-coffee-notebook.jpg"
                alt="Workspace met koffie en notebook"
                className="w-full h-auto"
              />

              {/* Decorative circles */}
              <div className="absolute top-8 right-12 w-24 h-24 md:w-32 md:h-32 bg-[#E8E9F7] rounded-full opacity-60"></div>
              <div className="absolute top-16 right-20 w-12 h-12 md:w-16 md:h-16 bg-[#5B6FED] rounded-full opacity-80"></div>
              <div className="absolute top-20 right-16 w-8 h-8 md:w-10 md:h-10 bg-[#C8CBD9] rounded-full opacity-50"></div>

              {/* Decorative bars at bottom */}
              <div className="absolute bottom-12 left-12 flex flex-col gap-2">
                <div className="w-20 h-3 bg-[#5B6FED] rounded-full"></div>
                <div className="w-24 h-3 bg-[#ED7461] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            {/* Icon and badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FEE8E4] rounded-2xl flex items-center justify-center">
                <Calculator className="w-7 h-7 md:w-8 md:h-8 text-[#ED7461]" />
              </div>
              <span className="bg-[#ED7461] text-white px-5 py-2 rounded-full text-sm md:text-base font-medium">
                Expertise
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-6 leading-tight">
              Accounting - meer rust en zekerheid
            </h2>

            <p className="text-base md:text-lg text-[#6B7280] mb-8 leading-relaxed">
              Meer dan alleen cijfers verwerken – wij zorgen dat je belastingaangiften volledig uit handen worden
              genomen en je jaarrekening netjes en op tijd klaarstaat. Daarnaast helpen we je met analyse en rapportage:
              winst- en verliesoverzichten, cashflow, advies en interpretatie. Zo krijg je niet alleen rust en
              zekerheid, maar ook inzicht in je bedrijf en richting voor de toekomst.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ED7461] flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg text-[#1F2937] font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-[#ED7461] hover:bg-[#DC6350] text-white px-8 py-3.5 rounded-lg text-base md:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
              Start voor €49,- p.m.
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

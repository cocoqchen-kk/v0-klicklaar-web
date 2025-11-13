import { Check } from "lucide-react"

export function PricingTiersSection() {
  const plans = [
    {
      name: "Essential",
      description: "Voor nieuwe en kleine zelfstandige bedrijven",
      price: "49",
      period: "Per Maand",
      isPopular: false,
      features: [
        "Registreer kosten simpel met een foto",
        "Factureren met één klik",
        "Notificaties als er (nog niet) is betaald",
        { text: "Factuuradministratie", subtext: "(tot +/- 120 facturen per jaar)" },
        "Facturen altijd makkelijk terug te vinden",
        "Integratie van één bankrekening",
        "IB en BTW aangifte wordt voor je geregeld",
        "1 account voor het bedrijfsportaal",
        "24/7 online support",
      ],
    },
    {
      name: "Growth",
      description: "Voor zelfstandige professionals en eenmanszaken zonder personeel",
      price: "99",
      period: "Per Maand",
      isPopular: true,
      features: [
        "Registreer kosten simpel met een foto",
        "Factureren met één klik",
        "Factuur (niet) betaald? Je hoort het direct",
        "Administratie tot +/- 240 facturen p.j",
        "Facturen altijd makkelijk terug te vinden",
        "Integratie van meerdere bankrekeningen",
        "Belastingaangifte volg­status",
        "IB en BTW wordt voor je geregeld",
        "Inkomstenbelastingaangifte (inclusief fiscale partner)",
        "Druk-op-de-knop jaarrekening",
        "1 account voor het bedrijfsportaal",
        "24/7 online support",
        "Persoonlijke boekhouder",
      ],
    },
    {
      name: "Prime",
      description: "Voor grotere eenmanszaken met personeel en vennootschappen onder firma",
      price: "129",
      period: "Per Maand",
      isPopular: false,
      features: [
        "Factureren met één klik",
        "Notificaties als er (nog niet) is betaald",
        "Onbeperkt aantal facturen",
        "Facturen makkelijk terug te vinden",
        "Integratie van meerdere bankrekeningen",
        "Belastingaangifte volg­status",
        "BTW-aangiften",
        "Inkomstenbelastingaangifte (inclusief fiscale partner)",
        "Belastingcontroles per kwartaal",
        "Aangepaste rapportages",
        "Jaarrekening",
        "2 accounts voor het bedrijfsportaal",
        "24/7 online support",
        "Prioritaire offline support",
        "Persoonlijke boekhouder",
        "Persoonlijk belastingadviseur",
      ],
    },
  ]

  return (
    <section className="bg-[#EEF0FD] py-16 md:py-20 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            De juiste boekhouding & administratie met het <span className="text-[#4654EA]">juiste service pakket</span>.
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                plan.isPopular ? "border-2 border-[#4654EA] shadow-xl" : "border border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#4654EA] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Meest Populair
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{plan.name}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-6 min-h-[48px]">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">€ {plan.price},-</span>
                </div>
                <p className="text-sm text-gray-600">{plan.period}</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check
                        className={`w-5 h-5 ${plan.isPopular ? "text-[#4654EA]" : "text-[#2E7D32]"} stroke-[2.5]`}
                      />
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed">
                      {typeof feature === "string" ? (
                        feature
                      ) : (
                        <>
                          {feature.text}
                          <br />
                          <span className="text-gray-500 text-xs">{feature.subtext}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.isPopular
                    ? "bg-[#4654EA] text-white hover:bg-[#3644D0]"
                    : "bg-[#4A5565] text-white hover:bg-[#364153]"
                }`}
              >
                Kies dit pakket
              </button>

              {/* Footer Note */}
              <p className="text-xs text-gray-500 text-center mt-4">Prijzen zijn exclusief btw.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

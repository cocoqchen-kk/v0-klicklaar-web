import { Headphones, Users, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      title: "Altijd snel antwoord",
      description: "Geen stilte meer wanneer je vragen hebt.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      title: "Begrijpelijke uitleg",
      description: "Over je cijfers en belastingvoordelen.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-700",
      title: "Persoonlijke begeleiding",
      description: "Zodat jij nooit voor verrassingen staat.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      title: "Aandacht en oplossingen op maat",
      description: "Via mail, WhatsApp, telefoon of online meeting.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      title: "Inclusief 1-op-1 advies",
      description: "(1 uur per maand) om écht verder te komen.",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile and Tablet: Stacked Layout */}
        <div className="lg:hidden">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Altijd een boekhouder
              <br />
              die er écht voor je is
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Voor ondernemende freelancers die meer willen dan alleen cijfers inboeken.
            </p>
          </div>

          <div className="relative mb-8 md:mb-12 rounded-2xl overflow-hidden bg-gray-100">
            <img
              src="/professional-business-advisors-woman-and-man-stand.jpg"
              alt="Professional business advisors"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg ${feature.iconBg} ${feature.iconColor} flex items-center justify-center`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full sm:w-auto primary hover:bg-[#4A5DD8] text-white font-medium px-8 py-3.5 rounded-lg transition-colors">
            Kennismaken
          </button>
        </div>

        {/* Desktop: Two Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">
          {/* Left Column: Content */}
          <div>
            <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Altijd een boekhouder
              <br />
              die er écht voor je is
            </h2>
            <p className="text-lg xl:text-xl text-gray-600 mb-10">
              Voor ondernemende freelancers die meer willen dan alleen cijfers inboeken.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg ${feature.iconBg} ${feature.iconColor} flex items-center justify-center`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="primary hover:bg-[#4A5DD8] text-white font-medium px-10 py-3.5 rounded-lg transition-colors">
              Kennismaken
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/professional-business-advisors-woman-in-coral-top-.jpg"
                alt="Professional business advisors"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

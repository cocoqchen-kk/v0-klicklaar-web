"use client"

import { FileText, CreditCard, Upload, Calculator, TrendingUp, Zap, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PlatformFeaturesSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-20">
          Met het Klicklaar Platform
        </h2>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative max-w-sm w-full">
              {/* Phone mockup */}
              <img
                src="/mobile-app-interface-showing-klicklaar-dashboard-w.jpg"
                alt="Klicklaar Platform App"
                className="w-full rounded-3xl shadow-2xl"
              />

              {/* Floating cards */}
              <div className="absolute top-8 -left-4 md:-left-12 bg-white rounded-xl shadow-lg p-4 max-w-[200px] animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-[#5B6FED]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Instant Verwerking</p>
                    <p className="text-xs text-gray-600">Direct in je boekhouding</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 -left-4 md:-left-12 bg-white rounded-xl shadow-lg p-4 max-w-[200px] animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-coral-100 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-[#ED7461]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Smart Notificaties</p>
                    <p className="text-xs text-gray-600">Bij betalingen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-4 order-1 lg:order-2">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#5B6FED]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Facturen versturen in jouw stijl</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Verstuur je facturen in jouw stijl, met één klik. Vanuit de auto of van achter je bureau — direct
                    verwerkt in je boekhouding.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-[#ED7461]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bankrekening koppelen</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Koppel je bankrekening; bij (niet-)betaling krijg je een notificatie.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Upload className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Eenvoudig bonnetjes uploaden</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Upload eenvoudig kostenfacturen of bonnetjes (foto is genoeg); het systeem herkent de kostensoort en
                    boekt direct in je administratie.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-[#5B6FED]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">BTW-aangifte moeiteloos</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    BTW-aangifte moeiteloos: die staat altijd klaar zodra je facturen en kosten in het platform staan.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#ED7461]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">En nog veel meer</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kilometers/uren registreren, live rapportages inzien, betaalverzoeken sturen, enzovoort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <Button className="primary hover:bg-[#4654ea] text-white px-8 py-6 text-lg rounded-lg">
            Probeer het platform
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  )
}

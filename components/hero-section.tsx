import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-[#E8EAFF] via-[#F3F4FF] to-[#E8EEFF] px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight">
            <span className="text-[#1F2937]">Jij onderneemt. </span>
            <span className="text-[#5B6FED]">Wij doen je cijfers.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#6B7280] max-w-4xl mx-auto">
            Betrouwbare boekhouding voor freelancers. Met aandacht voor jou, altijd dichtbij.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="primary hover:bg-[#4A5ED8] text-white px-8 py-3.5 text-base font-semibold rounded-lg"
            >
              <Link href="/start">Start vanaf €49,- p/m</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#5B6FED] text-[#5B6FED] hover:primary hover:text-white px-8 py-3.5 text-base font-semibold bg-white rounded-lg"
            >
              <Link href="/kennismaking">Plan kennismaking</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="relative border-4 border-[#5B6FED]">
          <img
            src="/diverse-business-professionals-team-standing-toget.jpg"
            alt="Klicklaar team of diverse business professionals"
            className="w-full h-auto object-cover"
          />

          <div className="absolute bottom-8 left-8 hidden md:block">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-[320px]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-green-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Boekhouding up-to-date</h3>
                  <p className="text-gray-600 text-base mt-1">Realtime inzicht in je financiën</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden px-4 -mt-6 relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-5">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Boekhouding up-to-date</h3>
                <p className="text-gray-600 text-sm mt-1">Realtime inzicht in je financiën</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" strokeWidth={2.5} />
            </div>
            <span className="text-gray-700 font-medium text-lg">Geen opzegtermijn</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#5B6FED]" strokeWidth={2.5} />
            </div>
            <span className="text-gray-700 font-medium text-lg">100% veilig</span>
          </div>
        </div>
      </div>
    </section>
  )
}

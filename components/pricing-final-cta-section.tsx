import Link from "next/link"

export function PricingFinalCtaSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#5b7ce6] via-[#6b88f0] to-[#7a94f7] py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 right-12 md:right-24 lg:right-32 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#4a6bd6] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">Klaar om te starten?</h2>

          <p className="text-lg md:text-xl text-white/95 mb-3 max-w-3xl mx-auto">
            Kies het pakket dat bij je past, je kunt altijd later aanpassen.
          </p>

          <p className="text-lg md:text-xl text-white/95 mb-10 md:mb-12 max-w-3xl mx-auto">
            Ontdek hoe eenvoudig het is met een gratis kennismaking of start vandaag met KlicKlaar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#5b7ce6] font-semibold rounded-lg hover:bg-white/95 transition-colors text-lg"
            >
              Start vanaf €49,- pm.
            </Link>

            <Link
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#5b7ce6] font-semibold rounded-lg hover:bg-white/95 transition-colors text-lg"
            >
              Plan Kennismaken
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

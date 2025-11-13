export function CTASection() {
  return (
    <section className="bg-[#EEF0FD] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
            Klaar om te starten?
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-8 lg:mb-10">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Laat ons kennismaken en ontdek hoe wij jouw boekhouding kunnen vereenvoudigen.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Geen verplichtingen, gewoon een vrijblijvend gesprek.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-[#5B6FED] hover:bg-[#4A5DD8] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200">
              Plan een kennismaking
            </button>
            <button className="w-full sm:w-auto bg-transparent hover:bg-white border-2 border-[#5B6FED] text-[#5B6FED] font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200">
              Bel ons: 020 123 4567
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

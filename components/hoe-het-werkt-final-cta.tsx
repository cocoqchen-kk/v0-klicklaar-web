export default function HoeHetWerktFinalCTA() {
  return (
    <section className="bg-[#EEF0FD] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Klaar om te ervaren hoe het werkt?
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Plan een vrijblijvende kennismaking en ontdek hoe onze technologie en persoonlijke aanpak jouw boekhouding
            kunnen vereenvoudigen. Geen verplichtingen, gewoon een persoonlijk gesprek over jouw situatie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16">
            <button className="w-full sm:w-auto bg-[#5B6FED] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#4A5FDC] transition-colors text-base md:text-lg">
              Plan Kennismaken
            </button>
            <button className="w-full sm:w-auto bg-white text-[#5B6FED] px-8 py-3.5 rounded-lg font-medium border-2 border-[#5B6FED] hover:bg-[#5B6FED] hover:text-white transition-colors text-base md:text-lg">
              Start vanaf €49,- pm.
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center text-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="5" y="11" width="14" height="10" rx="2" strokeWidth="2" />
                <path d="M12 11V7" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 7h8" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-sm md:text-base">App & web toegang</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm md:text-base">100% veilig</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm md:text-base">Direct aan de slag</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function DienstenCTASection() {
  return (
    <section className="bg-[#EEF0FD] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <button className="primary text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#4A5DD8] transition-colors duration-200">
              Klaar om te starten?
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 max-w-5xl mx-auto leading-tight">
            Laat ons jouw administratie overnemen
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-8 lg:mb-10">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Plan een vrijblijvende kennismaking en ontdek hoe wij jouw boekhouding kunnen vereenvoudigen. Geen
              verplichtingen, gewoon een persoonlijk gesprek over jouw situatie.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 lg:mb-16">
            <button className="w-full sm:w-auto primary hover:bg-[#4A5DD8] text-white font-semibold px-10 py-3.5 rounded-lg transition-colors duration-200 text-base lg:text-lg">
              Kennismaken
            </button>
            <button className="w-full sm:w-auto bg-transparent hover:bg-white border-2 border-[#5B6FED] text-[#5B6FED] font-semibold px-10 py-3.5 rounded-lg transition-colors duration-200 text-base lg:text-lg">
              Start voor €49,- pm.
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center items-center">
            {/* Badge 1 */}
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700 font-medium text-base lg:text-lg">Geen verborgen kosten</span>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <span className="text-gray-700 font-medium text-base lg:text-lg">100% veilig</span>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700 font-medium text-base lg:text-lg">Geen opzegtermijn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DienstenCTASection

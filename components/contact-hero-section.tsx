export default function ContactHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#4155D2] via-[#5B6FE3] to-[#7B8FF5] py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Je kunt ons bereiken,
            <br />
            altijd en overal. 24/7.
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Voor al je vragen over boekhouding, belastingen en ondernemen staan we klaar.
          </p>
        </div>
      </div>
    </section>
  )
}

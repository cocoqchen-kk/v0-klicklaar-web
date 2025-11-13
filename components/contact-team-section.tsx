export default function ContactTeamSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">Ontmoet ons team</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-base md:text-lg text-[#4a5565] leading-relaxed">
              Achter Klicklaar staat een team van ervaren professionals die je graag helpen.
            </p>
            <p className="text-base md:text-lg text-[#4a5565] leading-relaxed">
              Wij combineren expertise met een persoonlijke aanpak, zodat jij je volledig kunt richten op waar je goed
              in bent.
            </p>
          </div>
        </div>

        {/* First Row - Image Left, Cards Right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16 items-center">
          {/* Team Image 1 */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-[#e5e7eb] aspect-[4/3]">
              <img
                src="/two-professional-women-colleagues-in-office.jpg"
                alt="Klicklaar team members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info Cards Right */}
          <div className="space-y-6 order-1 md:order-2">
            {/* Persoonlijke begeleiding card */}
            <div className="bg-[#f0f4ff] border border-[#4654ea]/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#4654ea] mb-4">Persoonlijke begeleiding</h3>
              <p className="text-[#4a5565] leading-relaxed">
                Bij Klicklaar krijg je altijd te maken met echte mensen die jouw situatie begrijpen. Geen chatbots of
                automatische antwoorden, maar persoonlijk contact met specialisten die weten waar je als freelancer
                tegenaan loopt.
              </p>
            </div>

            {/* Altijd bereikbaar card */}
            <div className="bg-[#fff5f3] border border-[#ed7461]/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#ed7461] mb-4">Altijd bereikbaar</h3>
              <p className="text-[#4a5565] leading-relaxed">
                Of je nu een snelle vraag hebt of uitgebreid advies nodig hebt – wij staan klaar. Via WhatsApp, e-mail
                of telefoon krijg je snel antwoord van een van onze experts.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - Cards Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Info Cards Left */}
          <div className="space-y-6 order-1">
            {/* Jaren van ervaring card */}
            <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-4">Jaren van ervaring</h3>
              <p className="text-[#4a5565] leading-relaxed">
                Ons team bestaat uit ervaren accountants en belastingadviseurs die al jaren freelancers en kleine
                ondernemers begeleiden. We kennen alle ins en outs van jouw sector.
              </p>
            </div>

            {/* Proactief meedenken card */}
            <div className="bg-[#f0f4ff] border border-[#4654ea]/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#4654ea] mb-4">Proactief meedenken</h3>
              <p className="text-[#4a5565] leading-relaxed">
                We kijken niet alleen naar je huidige situatie, maar denken ook vooruit. Tijdens onze maandelijkse
                gesprekken bespreken we kansen en geven we advies voor de toekomst.
              </p>
            </div>
          </div>

          {/* Team Image 2 */}
          <div className="order-2">
            <div className="relative rounded-3xl overflow-hidden bg-[#e5e7eb] aspect-[4/3]">
              <img
                src="/professional-business-team-woman-and-man-colleague.jpg"
                alt="Klicklaar team members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

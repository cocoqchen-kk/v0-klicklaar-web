import { MessageCircle, Mail, Phone } from "lucide-react"

export default function ContactMethodsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#101828] mb-8 md:mb-10">
          Wij staan altijd voor je klaar
        </h2>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-5 mb-12 md:mb-16 lg:mb-20">
          <p className="text-base md:text-lg text-[#4a5565] leading-relaxed">
            We leggen je cijfers begrijpelijk uit, wijzen je op belastingvoordelen en zorgen dat je nooit voor
            verrassingen komt te staan.
          </p>
          <p className="text-base md:text-lg text-[#4a5565] leading-relaxed">
            Of je nu snel iets wilt checken via WhatsApp, een mail stuurt of liever belt: je krijgt altijd aandacht en
            een oplossing die bij jou past.
          </p>
          <p className="text-base md:text-lg text-[#4a5565] leading-relaxed">
            En omdat ondernemen ook vraagt om vooruitkijken, krijg je bij ons maandelijks één uur 1-op-1 advies. Zo
            zorgen we samen dat jij grip houdt op je bedrijf én met vertrouwen verder kunt groeien.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl border-2 border-[#00a63e] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-[#00a63e]" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-semibold text-[#00a63e] mb-3">WhatsApp</h3>
            <p className="text-[#4a5565] mb-4">Snel een vraag? App ons!</p>
            <a href="tel:+31612345678" className="text-[#00a63e] font-medium hover:underline text-lg">
              +31 6 12 34 56 78
            </a>
          </div>

          {/* E-mail Card */}
          <div className="bg-[#e3e9fb] rounded-2xl border-2 border-[#4654ea] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-[#4654ea]" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-semibold text-[#4654ea] mb-3">E-mail</h3>
            <p className="text-[#4a5565] mb-4">Stuur ons een bericht</p>
            <a href="mailto:hallo@klicklaar.nl" className="text-[#4654ea] font-medium hover:underline text-lg">
              hallo@klicklaar.nl
            </a>
          </div>

          {/* Telefoon Card */}
          <div className="bg-[#fbe8e5] rounded-2xl border-2 border-[#ff6b5a] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-[#ff6b5a]" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-semibold text-[#ff6b5a] mb-3">Telefoon</h3>
            <p className="text-[#4a5565] mb-4">Bel ons direct</p>
            <a href="tel:0850667788" className="text-[#ff6b5a] font-medium hover:underline text-lg">
              085 - 066 77 88
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

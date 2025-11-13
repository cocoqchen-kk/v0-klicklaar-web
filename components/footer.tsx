import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-12 h-12 md:w-16 md:h-16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 30 L50 70 L35 70 L20 50 Z" fill="#5B6FED" />
                  <path d="M50 30 L80 70 L65 70 L50 50 L35 70 Z" fill="#5B6FED" />
                  <rect x="20" y="75" width="60" height="8" rx="2" fill="#ED7461" />
                </svg>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Betrouwbare boekhoudservice voor ondernemende freelancers.
            </p>
          </div>

          {/* Diensten column */}
          <div>
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 md:mb-6">Diensten</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/diensten/boekhouding"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Boekhouding
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/btw-aangiften"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  BTW-aangiften
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/jaarrekening"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Jaarrekening
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten/belastingadvies"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Belastingadvies
                </Link>
              </li>
            </ul>
          </div>

          {/* Bedrijf column */}
          <div>
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 md:mb-6">Bedrijf</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/over-ons/over-ons"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/carriere"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Carrière
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 md:mb-6">Contact</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="tel:0201234567"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  020 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@klicklaar.nl"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  info@klicklaar.nl
                </a>
              </li>
              <li className="text-gray-300 text-sm md:text-base">Amsterdam, Nederland</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8 md:mb-12"></div>

        {/* Office locations */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-center text-white text-base md:text-lg mb-6 md:mb-8">Altijd dichtbij met kantoren in</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 text-center">
            <div>
              <p className="text-[#ED7461] font-semibold mb-1 text-sm md:text-base">Amsterdam</p>
              <p className="text-gray-300 text-xs md:text-sm">Strawinskylaan 6</p>
            </div>
            <div>
              <p className="text-[#ED7461] font-semibold mb-1 text-sm md:text-base">Den Haag</p>
              <p className="text-gray-300 text-xs md:text-sm">Schimmelt 2-16</p>
            </div>
            <div>
              <p className="text-[#ED7461] font-semibold mb-1 text-sm md:text-base">Eindhoven</p>
              <p className="text-gray-300 text-xs md:text-sm">Schimmelt 2-16</p>
            </div>
            <div>
              <p className="text-[#ED7461] font-semibold mb-1 text-sm md:text-base">Rotterdam</p>
              <p className="text-gray-300 text-xs md:text-sm">Coolsingel 65</p>
            </div>
            <div>
              <p className="text-[#ED7461] font-semibold mb-1 text-sm md:text-base">Utrecht</p>
              <p className="text-gray-300 text-xs md:text-sm">Stadsplateau 7</p>
            </div>
            <div>
              <p className="text-[#ED7461] font-semibold mb-1 text-sm md:text-base">Zwolle</p>
              <p className="text-gray-300 text-xs md:text-sm">Grote Voort 293-A</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-xs md:text-sm">© 2025 Klicklaar. Alle rechten voorbehouden.</div>
      </div>
    </footer>
  )
}

export default Footer

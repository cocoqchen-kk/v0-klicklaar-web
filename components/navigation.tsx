"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  {/* K letter with blue and orange styling */}
                  <path d="M8 8 L8 40 L14 40 L14 26 L28 40 L36 40 L20 24 L35 8 L27 8 L14 22 L14 8 Z" fill="#5B6FED" />
                  <rect x="8" y="38" width="28" height="4" fill="#FF6B35" rx="2" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <Link href="/diensten" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Diensten
            </Link>
            <Link href="/hoe-het-werkt" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Hoe het werkt
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors outline-none">
                Jouw branche
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/ecommerce" className="w-full cursor-pointer">
                    E-commerce
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/zorg" className="w-full cursor-pointer">
                    Zorg & Wellness
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/bouw" className="w-full cursor-pointer">
                    Bouw & Onderhoud
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/taxi" className="w-full cursor-pointer">
                    Taxi & Transport
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/creator" className="w-full cursor-pointer">
                    Creative & Design
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/it" className="w-full cursor-pointer">
                    IT & Software
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/prijzen" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Prijzen
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors outline-none">
                Over ons
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/over-ons/over-ons" className="w-full cursor-pointer">
                    Over ons
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/over-ons/ons-klanten" className="w-full cursor-pointer">
                    Ons klanten
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/over-ons/community" className="w-full cursor-pointer">
                    Community
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Tablet Navigation (compressed) */}
          <div className="hidden md:flex lg:hidden md:items-center md:gap-4">
            <Link href="/diensten" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors">
              Diensten
            </Link>
            <Link
              href="/hoe-het-werkt"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Hoe het werkt
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors outline-none">
                Branche
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/ecommerce" className="w-full cursor-pointer">
                    E-commerce
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/zorg" className="w-full cursor-pointer">
                    Zorg & Wellness
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/bouw" className="w-full cursor-pointer">
                    Bouw & Onderhoud
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/taxi" className="w-full cursor-pointer">
                    Taxi & Transport
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/creator" className="w-full cursor-pointer">
                    Creative & Design
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/jouw-branche/it" className="w-full cursor-pointer">
                    IT & Software
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/prijzen" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors">
              Prijzen
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors outline-none">
                Over ons
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/over-ons/over-ons" className="w-full cursor-pointer">
                    Over ons
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/over-ons/ons-klanten" className="w-full cursor-pointer">
                    Ons klanten
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/over-ons/community" className="w-full cursor-pointer">
                    Community
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors">
              Contact
            </Link>
          </div>

          {/* Right side buttons (Desktop & Tablet) */}
          <div className="hidden md:flex md:items-center md:gap-3 lg:gap-4">
            <Link
              href="/inloggen"
              className="text-gray-700 hover:text-gray-900 font-medium text-sm lg:text-base transition-colors"
            >
              Inloggen
            </Link>
            <Button asChild className="primary hover:bg-[#4A5ED8] text-white px-4 lg:px-6 text-sm lg:text-base">
              <Link href="/kennismaking">Kennismaking</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/diensten"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Diensten
            </Link>
            <Link
              href="/hoe-het-werkt"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hoe het werkt
            </Link>

            <div className="py-2">
              <div className="text-gray-900 font-semibold mb-2">Jouw branche</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/jouw-branche/ecommerce"
                  className="block text-gray-600 hover:text-gray-900 py-1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  E-commerce
                </Link>
                <Link
                  href="/jouw-branche/zorg"
                  className="block text-gray-600 hover:text-gray-900 py-1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Zorg & Wellness
                </Link>
                <Link
                  href="/jouw-branche/bouw"
                  className="block text-gray-600 hover:text-gray-900 py-1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bouw & Onderhoud
                </Link>
                <Link
                  href="/jouw-branche/taxi"
                  className="block text-gray-600 hover:text-gray-900 py-1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Taxi & Transport
                </Link>
                <Link
                  href="/jouw-branche/creator"
                  className="block text-gray-600 hover:text-gray-900 py-1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Creative & Design
                </Link>
                <Link
                  href="/jouw-branche/it"
                  className="block text-gray-600 hover:text-gray-900 py-1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  IT & Software
                </Link>
              </div>
            </div>

            <Link
              href="/prijzen"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prijzen
            </Link>

            <div className="py-2">
              <div className="text-gray-900 font-semibold mb-2">Over ons</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/over-ons/over-ons"
                  className="block text-gray-600 hover:text-gray-900 py-1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Over ons
                </Link>
                <Link
                  href="/over-ons/ons-klanten"
                  className="block text-gray-600 hover:text-gray-900 py-1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ons klanten
                </Link>
                <Link
                  href="/over-ons/community"
                  className="block text-gray-600 hover:text-gray-900 py-1 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Community
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 space-y-3 border-t border-gray-200">
              <Link
                href="/inloggen"
                className="block text-center text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inloggen
              </Link>
              <Button asChild className="w-full bg-[#5B6FED] hover:bg-[#4A5ED8] text-white">
                <Link href="/kennismaking" onClick={() => setMobileMenuOpen(false)}>
                  Kennismaking
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

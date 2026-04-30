"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#destinos", label: "Destinos" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[#1B3C87] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+5531933005502" className="flex items-center gap-2 hover:text-[#F5D547] transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(31) 93300-5502</span>
            </a>
            <a href="mailto:triplieagenciadeturismo@gmail.com" className="flex items-center gap-2 hover:text-[#F5D547] transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">triplieagenciadeturismo@gmail.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            Seg - Sex: 9h às 18h | Sáb: 9h às 13h
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-triplie.png"
                alt="Tripliê - Agência de Turismo"
                width={440}
                height={160}
                className="h-24 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={isHomePage ? link.href : `/${link.href}`}
                  className="text-[#1B3C87] font-medium hover:text-[#F47920] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F47920] transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                asChild
                className="bg-[#F47920] hover:bg-[#d96810] text-white font-semibold px-6 py-2 rounded-full transition-all hover:scale-105"
              >
                <a href="https://wa.me/5531933005502" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#1B3C87]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={isHomePage ? link.href : `/${link.href}`}
                    className="text-[#1B3C87] font-medium hover:text-[#F47920] transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  asChild
                  className="bg-[#F47920] hover:bg-[#d96810] text-white font-semibold px-6 py-2 rounded-full mt-2"
                >
                  <a href="https://wa.me/5531933005502" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

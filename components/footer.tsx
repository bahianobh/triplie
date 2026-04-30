"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Destinos", href: "#destinos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

const services = [
  "Passagens Aéreas",
  "Hospedagem",
  "Aluguel de Carros",
]

export function Footer() {
  return (
    <footer id="contato" className="bg-[#1B3C87] text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-triplie-white.png"
              alt="Tripliê - Agência de Turismo"
              width={160}
              height={60}
              className="h-14 w-auto mb-6"
            />
            <p className="text-white/70 mb-6 leading-relaxed">
              Sua agência de turismo de confiança. Transformamos sonhos de viagem em 
              experiências inesquecíveis.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F47920] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F47920] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-[#F5D547] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#F47920] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Rua Faisão, 1015<br />
                  Flávio Marques Lisboa, BH - MG
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#F47920] flex-shrink-0" />
                <a href="tel:+5531933005502" className="text-white/70 hover:text-[#F5D547] transition-colors">
                  (31) 93300-5502
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#F47920] flex-shrink-0" />
                <a href="mailto:triplieagenciadeturismo@gmail.com" className="text-white/70 hover:text-[#F5D547] transition-colors">
                  triplieagenciadeturismo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#F47920] flex-shrink-0" />
                <span className="text-white/70">
                  Seg - Sex: 9h às 18h<br />
                  Sáb: 9h às 13h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 Tripliê - Agência de Turismo. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
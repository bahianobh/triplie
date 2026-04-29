"use client"

import { Button } from "@/components/ui/button"
import { Plane, MapPin, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(27, 60, 135, 0.95), rgba(27, 60, 135, 0.7)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')`
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <Plane className="h-32 w-32 text-white transform rotate-45" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Plane className="h-48 w-48 text-[#F5D547] transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F5D547] text-[#1B3C87] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="h-4 w-4" />
            Mais de 500 destinos disponíveis
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Sua próxima{" "}
            <span className="text-[#F5D547]">aventura</span>{" "}
            começa aqui
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Descubra destinos incríveis com a Tripliê. Cuidamos de cada detalhe da sua viagem 
            para que você viva experiências inesquecíveis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-[#F47920] hover:bg-[#d96810] text-white font-semibold px-8 py-6 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
            >
              <Plane className="mr-2 h-5 w-5" />
              Explorar Destinos
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1B3C87] font-semibold px-8 py-6 rounded-full text-lg transition-all"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Planejar Viagem
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#F5D547]">10+</div>
              <div className="text-white/80 text-sm md:text-base">Anos de experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#F5D547]">5000+</div>
              <div className="text-white/80 text-sm md:text-base">Clientes satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#F5D547]">50+</div>
              <div className="text-white/80 text-sm md:text-base">Países atendidos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="oklch(0.98 0.02 95)"
          />
        </svg>
      </div>
    </section>
  )
}

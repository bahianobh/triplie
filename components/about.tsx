"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Globe } from "lucide-react"

const features = [
  "Atendimento personalizado e humanizado",
  "Pacotes exclusivos e personalizados",
  "Suporte 24 horas durante a viagem",
  "Melhores preços garantidos",
  "Parcelamento facilitado",
  "Equipe especializada e experiente",
]

const stats = [
  { icon: Award, value: "10+", label: "Anos de experiência" },
  { icon: Users, value: "5000+", label: "Clientes atendidos" },
  { icon: Globe, value: "50+", label: "Países" },
]

export function About() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                alt="Viajantes explorando destinos incríveis"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#F5D547] rounded-full flex items-center justify-center">
                  <Award className="h-7 w-7 text-[#1B3C87]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1B3C87]">10+ Anos</div>
                  <div className="text-muted-foreground text-sm">de experiência</div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F47920] rounded-2xl -z-10" />
          </div>

          {/* Content side */}
          <div>
            <Badge className="bg-[#F5D547] text-[#1B3C87] hover:bg-[#F5D547] mb-4">
              Sobre a Tripliê
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3C87] mb-6 leading-tight">
              Transformamos{" "}
              <span className="text-[#F47920]">sonhos de viagem</span>{" "}
              em realidade
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A Tripliê nasceu da paixão por viagens e do desejo de proporcionar 
              experiências inesquecíveis. Somos especialistas em criar roteiros 
              personalizados que atendem às suas necessidades e superam suas expectativas.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#F47920] flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8 py-6 border-y border-border">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1B3C87]/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-[#1B3C87]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1B3C87]">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-[#F47920] hover:bg-[#d96810] text-white font-semibold px-8 rounded-full"
            >
              Conhecer nossa história
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

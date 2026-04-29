"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Hotel, Car } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Passagens Aéreas",
    description: "Encontramos as melhores tarifas para voos nacionais e internacionais com as principais companhias aéreas.",
  },
  {
    icon: Hotel,
    title: "Hospedagem",
    description: "Hotéis, resorts e pousadas selecionados para garantir conforto e qualidade na sua estadia.",
  },
  {
    icon: Car,
    title: "Aluguel de Carros",
    description: "Locação de veículos em qualquer destino para você explorar com liberdade e comodidade.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-[#1B3C87] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#F5D547] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F47920] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#F5D547] text-[#1B3C87] hover:bg-[#F5D547] mb-4">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tudo o que você precisa{" "}
            <span className="text-[#F5D547]">em um só lugar</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Da passagem ao seguro viagem, cuidamos de cada detalhe para que você 
            apenas aproveite sua viagem.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#F47920] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

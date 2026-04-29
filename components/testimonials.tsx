"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "São Paulo, SP",
    avatar: "MS",
    rating: 5,
    text: "A Tripliê transformou nossa lua de mel em um sonho! O atendimento foi impecável do início ao fim. Cada detalhe foi pensado com carinho.",
    trip: "Lua de mel em Santorini",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    location: "Rio de Janeiro, RJ",
    avatar: "CM",
    rating: 5,
    text: "Já viajei com a Tripliê 3 vezes e cada experiência foi melhor que a anterior. O suporte durante a viagem é diferenciado!",
    trip: "Família no Caribe",
  },
  {
    id: 3,
    name: "Ana Beatriz",
    location: "Belo Horizonte, MG",
    avatar: "AB",
    rating: 5,
    text: "Profissionais incríveis! Me ajudaram com o visto americano e montaram um roteiro perfeito para Orlando. Super recomendo!",
    trip: "Disney com as crianças",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#F5D547] text-[#1B3C87] hover:bg-[#F5D547] mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3C87] mb-4">
            O que nossos clientes{" "}
            <span className="text-[#F47920]">dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre suas experiências conosco.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <Quote className="h-10 w-10 text-[#F5D547] mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#F5D547] text-[#F5D547]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  {`"${testimonial.text}"`}
                </p>

                {/* Trip badge */}
                <Badge variant="secondary" className="bg-[#1B3C87]/10 text-[#1B3C87] mb-6">
                  {testimonial.trip}
                </Badge>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 bg-[#F47920] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1B3C87]">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

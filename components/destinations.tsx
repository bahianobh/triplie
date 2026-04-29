"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowRight } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Fernando de Noronha",
    country: "Brasil",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073&auto=format&fit=crop",
    price: "A partir de R$ 3.500",
    rating: 4.9,
    tag: "Mais vendido",
  },
  {
    id: 2,
    name: "Paris",
    country: "França",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    price: "A partir de R$ 8.200",
    rating: 4.8,
    tag: "Romântico",
  },
  {
    id: 3,
    name: "Cancún",
    country: "México",
    image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?q=80&w=2070&auto=format&fit=crop",
    price: "A partir de R$ 5.900",
    rating: 4.7,
    tag: "Praia",
  },
  {
    id: 4,
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop",
    price: "A partir de R$ 4.800",
    rating: 4.9,
    tag: "Aventura",
  },
  {
    id: 5,
    name: "Santorini",
    country: "Grécia",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2069&auto=format&fit=crop",
    price: "A partir de R$ 9.500",
    rating: 4.8,
    tag: "Lua de mel",
  },
  {
    id: 6,
    name: "Maldivas",
    country: "Maldivas",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop",
    price: "A partir de R$ 12.000",
    rating: 5.0,
    tag: "Luxo",
  },
]

export function Destinations() {
  return (
    <section id="destinos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge className="bg-[#F5D547] text-[#1B3C87] hover:bg-[#F5D547] mb-4">
            Destinos em Destaque
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3C87] mb-4">
            Conheça nossos destinos{" "}
            <span className="text-[#F47920]">mais procurados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Selecionamos os melhores destinos do Brasil e do mundo para você viver 
            experiências únicas e inesquecíveis.
          </p>
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#F47920] text-white">
                  {destination.tag}
                </Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{destination.country}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-[#F5D547] text-[#F5D547]" />
                    <span className="font-semibold text-[#1B3C87]">{destination.rating}</span>
                  </div>
                  <span className="text-[#F47920] font-bold">{destination.price}</span>
                </div>
                <Button 
                  className="w-full bg-[#1B3C87] hover:bg-[#152d66] text-white group/btn"
                >
                  Ver detalhes
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-[#1B3C87] text-[#1B3C87] hover:bg-[#1B3C87] hover:text-white font-semibold px-8 rounded-full"
          >
            Ver todos os destinos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

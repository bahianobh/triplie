import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Em uma aplicação real, estes dados viriam de um CMS ou banco de dados.
const allDestinations = [
  {
    id: 1,
    name: "Gramado",
    country: "Brasil",
    image: "/images/gramado.jpg",
    price: "A partir de R$ 579,90",
    rating: 4.9,
    tag: "Mais vendido",
  },
  {
    id: 2,
    name: "Caldas Novas",
    country: "Brasil",
    image: "/images/caldas-novas.jpg",
    price: "A partir de R$ 659,90",
    rating: 4.8,
    tag: "Relaxante",
  },
  {
    id: 3,
    name: "São Paulo",
    country: "Brasil",
    image: "/images/sao-paulo.jpg",
    price: "A partir de R$ 290,00",
    rating: 4.7,
    tag: "Urbano",
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
  {
    id: 7,
    name: "Rio de Janeiro",
    country: "Brasil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
    price: "A partir de R$ 450,00",
    rating: 4.8,
    tag: "Cidade Maravilhosa",
  },
  {
    id: 8,
    name: "Paris",
    country: "França",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760c0341?q=80&w=2070&auto=format&fit=crop",
    price: "A partir de R$ 8.500",
    rating: 4.9,
    tag: "Romântico",
  },
  {
    id: 9,
    name: "Tóquio",
    country: "Japão",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop",
    price: "A partir de R$ 11.200",
    rating: 4.9,
    tag: "Cultura",
  },
];

export default function DestinosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Cabeçalho da Página */}
            <div className="text-center pt-10 pb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3C87] mb-4">
                Explore Nossos Destinos
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Encontre a viagem perfeita para você. De praias paradisíacas a metrópoles vibrantes, temos o destino ideal.
              </p>
            </div>

            {/* Grade de Destinos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allDestinations.map((destination) => (
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
                    <Button className="w-full bg-[#1B3C87] hover:bg-[#152d66] text-white group/btn">
                      Ver detalhes
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
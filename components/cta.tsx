"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-[#F5D547] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F47920]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B3C87]/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white text-[#1B3C87] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MessageCircle className="h-4 w-4" />
            Fale com um especialista
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B3C87] mb-6">
            Pronto para sua próxima viagem?
          </h2>
          <p className="text-[#1B3C87]/80 text-lg mb-10 max-w-2xl mx-auto">
            Deixe seu e-mail e receba ofertas exclusivas, dicas de viagem e novidades 
            sobre os melhores destinos diretamente na sua caixa de entrada.
          </p>

          {/* Newsletter form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-10">
            <Input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="h-14 px-6 rounded-full border-[#1B3C87]/20 bg-white text-[#1B3C87] placeholder:text-[#1B3C87]/50 focus-visible:ring-[#1B3C87]"
            />
            <Button 
              size="lg"
              className="h-14 bg-[#1B3C87] hover:bg-[#152d66] text-white font-semibold px-8 rounded-full whitespace-nowrap"
            >
              <Send className="mr-2 h-5 w-5" />
              Receber ofertas
            </Button>
          </div>

          {/* WhatsApp CTA */}
          <div className="pt-8 border-t border-[#1B3C87]/20">
            <p className="text-[#1B3C87]/70 mb-4">Ou fale diretamente com nossa equipe</p>
            <Button 
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 rounded-full"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

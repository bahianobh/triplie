import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Tripliê | Agência de Turismo',
  description: 'Sua próxima aventura começa aqui. Pacotes de viagem, passagens aéreas, hospedagem e muito mais. Tripliê - Agência de Turismo.',
  keywords: 'agência de turismo, viagens, pacotes de viagem, passagens aéreas, hospedagem, turismo, férias, Tripliê',
  authors: [{ name: 'Tripliê' }],
  openGraph: {
    title: 'Tripliê | Agência de Turismo',
    description: 'Sua próxima aventura começa aqui. Pacotes de viagem, passagens aéreas, hospedagem e muito mais.',
    url: 'https://triplie.com.br',
    siteName: 'Tripliê',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tripliê | Agência de Turismo',
    description: 'Sua próxima aventura começa aqui. Pacotes de viagem, passagens aéreas, hospedagem e muito mais.',
  },
}

export const viewport: Viewport = {
  themeColor: '#1B3C87',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

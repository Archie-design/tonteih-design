import type { Metadata } from 'next'
import { Playfair_Display, Noto_Serif_TC } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
})

const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
})
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | 美東歐美室內設計',
    default: '美東歐美室內設計',
  },
  description: '全方位室內統包設計服務，以嚴謹的建築思維處理每一處細節。台北市信義區。',
  metadataBase: new URL('https://tonteih-design.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body className={`${playfair.variable} ${notoSerifTC.variable} bg-[var(--color-surface)] text-[var(--color-on-surface)] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

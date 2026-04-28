import type { Metadata } from 'next'
import { Playfair_Display, Noto_Serif_TC } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
})

const notoSerifTC = Noto_Serif_TC({
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
  preload: false,
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tonteih-design.vercel.app'

export const metadata: Metadata = {
  title: {
    template: '%s | 美東歐美室內設計',
    default: '美東歐美室內設計',
  },
  description: '30年房屋設計與空間規劃經驗，專精歐風、工業風、海洋風。桃園市海山中街，免費到府估價。',
  metadataBase: new URL(siteUrl),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
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

import type { Metadata } from 'next'
import { Playfair_Display, Noto_Serif_TC, Liu_Jian_Mao_Cao } from 'next/font/google'
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

const liuJianMaoCao = Liu_Jian_Mao_Cao({
  weight: '400',
  variable: '--font-brush',
  display: 'swap',
  preload: false,
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tonteih-design.vercel.app'

export const metadata: Metadata = {
  title: {
    template: '%s | 美東歐美室內設計',
    default: '美東歐美室內設計',
  },
  description: '30年房屋設計與空間規劃經驗，專精歐風、工業風、海洋風。桃園市蘆竹區海山中街，免費到府估價。',
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
      <body className={`${playfair.variable} ${notoSerifTC.variable} ${liuJianMaoCao.variable} bg-[var(--color-surface)] text-[var(--color-on-surface)] antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-primary)] focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-label focus:font-bold focus:shadow-lg"
        >
          跳至主要內容
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

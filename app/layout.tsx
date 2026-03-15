import type { Metadata } from 'next'
import { Inter, Syne, Space_Mono } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Nakul Tyagi — Senior Frontend Developer',
  description:
    'Senior Frontend Developer at Flipkart. 5+ years building scalable web & mobile apps used by millions. React, Angular, Next.js, React Native.',
  authors: [{ name: 'Nakul Tyagi' }],
  openGraph: {
    title: 'Nakul Tyagi — Senior Frontend Developer',
    description: '5+ years shipping products at scale. Currently at Flipkart (Supermoney).',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${spaceMono.variable}`}>
      <body className="bg-white text-[#111111]">
        <ScrollProgress />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StreakTracker – Daily Learning Streak',
  description: 'Track your daily study habits and maintain your streak',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-stone-50 text-stone-900 min-h-screen font-body antialiased">
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 py-10">{children}</main>
      </body>
    </html>
  )
}

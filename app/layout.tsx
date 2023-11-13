import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/themeProviders'
const font = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '800', '900'] })
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "@/components/ui/toaster"
import AuthProvider from '@/context/AuthContext'
import Header from '@/components/layout/Header'
import NavAside from '@/components/layout/NavAside'

export const metadata: Metadata = {
  title: {
    absolute: 'ZİNCİRKIRAN | Panel'
  },
  description: 'Zincirkıran Hareketi: Milliyetçi-Toplumcu bir entelijansiya hareketi olarak başkaldırıyı savunur, Türk milliyetçiliğini kurtuluş reçetesi olarak sunar.',
  creator: 'Emircan Yaşar',
  robots: 'noindex, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <AuthProvider>
    <html lang="tr" suppressHydrationWarning>
      <body className={cn(font.className, "bg-white dark:bg-darkerColor text-darkColor dark:text-white overflow-x-hidden")}>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem={true}
        storageKey='theme'
        >
          <Header/>
          <div className='flex container h-[calc(100vh_-_101px)]'>
            <NavAside/>
          <Toaster />
          {children}
          </div>
        </ThemeProvider>
        </body>
    </html>
    </AuthProvider>
  )
}

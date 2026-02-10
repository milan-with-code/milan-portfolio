import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf8' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1419' },
  ],
  userScalable: true,
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Milan Detruja - React Native & Web Developer',
  description: 'React Native (CLI & Expo) specialist and web developer. Building production-grade mobile apps and Next.js web applications. 3+ years experience.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['React Native', 'React', 'Next.js', 'Mobile App Development', 'Web Developer', 'Full Stack'],
  authors: [{ name: 'Milan Detruja' }],
  openGraph: {
    title: 'Milan Detruja - React Native & Web Developer',
    description: 'Building cross-platform mobile apps with React Native and web applications with React/Next.js',
    url: 'https://milandetruja.com',
    type: 'website',
    images: [
      {
        url: 'https://og-image.vercel.app/Milan%20Detruja%20-%20React%20Native%20Developer.png?theme=dark',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milan Detruja - React Native & Web Developer',
    description: 'Building production-grade mobile and web applications',
    creator: '@milandetruja',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      {/* Background gradient - subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent animate-fade-in" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 animate-stagger">
          {/* Tagline */}
          <div className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/5 px-4 py-2 animate-fade-in">
            <p className="text-sm font-medium text-accent">Welcome to my portfolio</p>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-balance sm:text-6xl lg:text-7xl animate-slide-up">
            Hi, I'm <span className="text-accent">Milan Detruja</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-xl text-muted-foreground text-balance sm:text-2xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            React Native (CLI & Expo) + React & Next.js Developer
          </p>

          {/* Description */}
          <p className="mb-10 max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            With 3+ years of hands-on experience, I specialize in building cross-platform React Native applications (both CLI and Expo-based) alongside modern React and Next.js web platforms. I create scalable, performant applications focused on clean architecture and exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center sm:flex-row animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Link href="/projects">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/30">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="/resume.pdf" target='_blank'>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary transition-all hover:border-accent/50 bg-transparent"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-border/40 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="group cursor-default">
              <p className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform">3+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform">20+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform">100%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground">Scroll to explore</p>
          <svg
            className="h-5 w-5 text-muted-foreground"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

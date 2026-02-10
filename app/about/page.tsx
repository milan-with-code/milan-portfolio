import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal className="mb-12">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">About Me</h1>
            <p className="text-lg text-muted-foreground">
              React Native (CLI & Expo) specialist and full-stack web developer focused on building scalable, cross-platform applications.
            </p>
          </ScrollReveal>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <section className="animate-slide-up">
                  <h2 className="mb-4 text-2xl font-semibold">Who I Am</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    I'm Milan Detruja, a React Native specialist and web developer with 3+ years of experience building production-grade applications across iOS, Android, and web platforms. My expertise spans React Native (both CLI and Expo), React.js, and Next.js, with a proven track record of delivering scalable, high-performance applications.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    I believe in clean code, thoughtful design patterns, and cross-platform thinking. Whether architecting a mobile-first healthcare platform or building complex dashboards, I approach every project with attention to detail, performance optimization, and a focus on creating maintainable codebases that scale.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">My Philosophy</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-accent">→</span>
                      <span><strong>Cross-Platform Expertise:</strong> Building for iOS, Android, and web simultaneously. One codebase, infinite possibilities.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">→</span>
                      <span><strong>Performance & Scalability:</strong> Every application should be optimized for speed and growth. Fast apps are happy users.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">→</span>
                      <span><strong>Clean, Maintainable Code:</strong> Architecture matters. I build systems designed for long-term success and team collaboration.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">→</span>
                      <span><strong>Mobile-First Thinking:</strong> Every project starts with mobile constraints in mind, creating stronger solutions overall.</span>
                    </li>
                  </ul>
                </section>

                <section className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                  <h2 className="mb-4 text-2xl font-semibold">Career Highlights</h2>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-border/40 bg-card p-4">
                      <p className="font-semibold">CoderKube - React/React Native Developer (Aug 2024 - Nov 2024)</p>
                      <p className="text-sm text-muted-foreground">Built cross-platform applications including Heu (rewards platform) and Transectra (diamond marketplace)</p>
                    </div>
                    <div className="rounded-lg border border-border/40 bg-card p-4">
                      <p className="font-semibold">Dot3 Solutions - React Developer (Mar 2023 - Jul 2024)</p>
                      <p className="text-sm text-muted-foreground">Developed complex dashboards and platforms for fintech and marketing automation</p>
                    </div>
                    <div className="rounded-lg border border-border/40 bg-card p-4">
                      <p className="font-semibold">HVG Technologies - Full-Stack Developer (Dec 2024 - Present)</p>
                      <p className="text-sm text-muted-foreground">Currently building next-gen analytics and infrastructure solutions</p>
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="rounded-lg border border-border/40 bg-card p-6 sticky top-24">
                  <h3 className="mb-4 font-semibold">Quick Facts</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li>
                      <p className="font-semibold text-foreground">Location</p>
                      <p>Dubai, UAE</p>
                    </li>
                    <li>
                      <p className="font-semibold text-foreground">Experience</p>
                      <p>3+ years in frontend development</p>
                    </li>
                    <li>
                      <p className="font-semibold text-foreground">Specialization</p>
                      <p>React Native (CLI & Expo), React, Next.js</p>
                    </li>
                    <li>
                      <p className="font-semibold text-foreground">Current Role</p>
                      <p>React / React Native Developer</p>
                    </li>
                    <li>
                      <p className="font-semibold text-foreground">Expertise</p>
                      <p>Mobile Apps, Web Apps, AI Integration, GraphQL</p>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

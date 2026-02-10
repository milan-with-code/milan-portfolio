'use client'

import { Badge } from '@/components/ui/badge'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { experiences } from '@/lib/portfolio-data'

export default function Experience() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Experience</h1>
            <p className="text-lg text-muted-foreground">
              3+ years of professional experience building production-grade React Native mobile apps and React/Next.js web applications.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className="relative rounded-lg border border-border/40 bg-card p-8"
              >
                {/* Timeline indicator */}
                {idx !== experiences.length - 1 && (
                  <div className="absolute -bottom-12 left-8 h-12 w-0.5 bg-gradient-to-b from-accent to-transparent" />
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start md:gap-0">
                    <div>
                      <h3 className="text-2xl font-semibold">{exp.role}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <p>{exp.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Featured Projects:</h4>
                  <div className="space-y-3">
                    {exp.projects.map((project) => (
                      <div
                        key={project.id}
                        className="rounded-md border border-border/20 bg-secondary/30 p-4"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <p className="font-medium">{project.title}</p>
                          <div className="flex gap-1 flex-wrap justify-end">
                            {project.platforms.map((platform) => (
                              <Badge
                                key={platform}
                                variant="outline"
                                className="text-xs border-accent/50 text-accent h-fit"
                              >
                                {platform}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {project.concept}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-accent/10 text-accent hover:bg-accent/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-lg border border-accent/30 bg-accent/5 p-8 text-center">
            <p className="mb-4 text-lg text-foreground font-semibold">
              Ready to work together?
            </p>
            <p className="text-muted-foreground">
              I'm always interested in new challenges and opportunities. Let's connect!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

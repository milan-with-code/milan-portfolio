'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ExternalLink } from 'lucide-react'
import { experiences } from '@/lib/portfolio-data'

// Flatten all projects from all experiences
const allProjects = experiences.flatMap((exp) => exp.projects)

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Projects & Work</h1>
            <p className="text-lg text-muted-foreground">
              A selection of React Native mobile apps and React/Next.js web applications I've built, showcasing production-ready solutions across multiple platforms.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {allProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-lg border border-border/40 bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg md:flex-row md:items-stretch md:gap-6"
              >
                {/* Content */}
                <div className="flex flex-col flex-1">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.tagline && (
                      <p className="text-accent text-sm font-medium">{project.tagline}</p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mb-4 flex-grow text-sm text-muted-foreground leading-relaxed">
                    {project.concept}
                  </p>

                  {/* Platforms & Tech */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.platforms.map((platform) => (
                        <Badge
                          key={platform}
                          variant="outline"
                          className="text-xs border-accent/50 text-accent"
                        >
                          {platform}
                        </Badge>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-accent/10 text-accent text-xs hover:bg-accent/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-border/20">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-accent flex-shrink-0">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  {project.links && Object.values(project.links).some((link) => link) && (
                    <div className="flex gap-2 pt-4 mt-4 border-t border-border/40">
                      {project.links.web && (
                        <a href={project.links.web} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-accent/30 text-accent hover:bg-accent/10 bg-transparent"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Live
                          </Button>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-lg border border-accent/30 bg-accent/5 p-8 text-center">
            <h2 className="mb-4 text-2xl font-semibold">Interested in collaborating?</h2>
            <p className="mb-6 text-muted-foreground">
              I'm open to new projects and opportunities. Let's create something amazing together.
            </p>
            <a href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

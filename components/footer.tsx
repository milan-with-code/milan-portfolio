import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-card py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Social Links */}
        <div className="flex justify-center gap-4 pb-8">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-accent"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-accent"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-accent"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="mailto:hello@milandetruja.com"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-accent"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Milan Detruja. Building production-grade apps with React Native, React, and Next.js.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Badge } from '@/components/ui/badge'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const skillCategories = [
  {
    category: 'Mobile Development',
    skills: [
      'React Native (CLI)',
      'React Native (Expo)',
      'iOS Development',
      'Android Development',
      'Native Modules',
      'Cross-Platform Dev',
      'App Performance',
      'Push Notifications',
    ],
  },
  {
    category: 'Web Frameworks',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'HTML5 / CSS3',
      'Responsive Design',
      'Web Standards',
    ],
  },
  {
    category: 'State & APIs',
    skills: ['Redux', 'RTK Query', 'Zustand', 'Context API', 'REST APIs', 'GraphQL', 'Axios'],
  },
  {
    category: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Database Design', 'API Architecture'],
  },
  {
    category: 'Tools & Infrastructure',
    skills: [
      'Git / GitHub',
      'Vercel Deployment',
      'Docker',
      'npm / pnpm',
      'Webpack / Vite',
      'CI/CD Pipelines',
      'VS Code',
    ],
  },
  {
    category: 'Quality & Performance',
    skills: ['Jest Testing', 'Web Performance', 'Accessibility (A11y)', 'Code Reviews', 'Debugging', 'Optimization'],
  },
]

export default function Skills() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Skills & Expertise</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of the technologies and tools I've mastered throughout my career.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-12 lg:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="rounded-lg border border-border/40 bg-card p-6"
              >
                <h2 className="mb-4 text-xl font-semibold">{category.category}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 rounded-lg border border-border/40 bg-card p-8">
            <h2 className="mb-6 text-2xl font-semibold">Proficiency Breakdown</h2>
            <div className="space-y-6">
              {[
                { skill: 'React Native (CLI & Expo)', level: 94 },
                { skill: 'React.js & Next.js', level: 95 },
                { skill: 'TypeScript', level: 92 },
                { skill: 'Tailwind CSS & shadcn/ui', level: 93 },
                { skill: 'State Management (Redux, RTK)', level: 88 },
                { skill: 'Cross-Platform Architecture', level: 90 },
                { skill: 'API Integration & GraphQL', level: 87 },
                { skill: 'Web & App Performance', level: 89 },
              ].map(({ skill, level }) => (
                <div key={skill}>
                  <div className="mb-2 flex justify-between">
                    <p className="font-medium">{skill}</p>
                    <p className="text-sm text-muted-foreground">{level}%</p>
                  </div>
                  <div className="h-2 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-accent transition-all"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-16 rounded-lg border border-accent/30 bg-accent/5 p-8">
            <p className="text-lg text-foreground leading-relaxed">
              My unique strength is the ability to build seamlessly across platforms — designing mobile apps with React Native (both CLI and Expo) while maintaining web excellence with React and Next.js. I combine deep technical expertise with strong communication and problem-solving abilities, delivering solutions that scale from startup MVPs to enterprise applications.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

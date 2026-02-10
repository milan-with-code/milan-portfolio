export interface Project {
  id: string
  title: string
  description: string
  concept: string
  tagline?: string
  platforms: ('Web' | 'Android' | 'iOS' | 'Cross-platform')[]
  tech: string[]
  highlights: string[]
  links?: {
    web?: string
    appStore?: string
    playStore?: string
    github?: string
  }
  company: string
}

export interface Experience {
  company: string
  role: string
  duration: string
  description?: string
  projects: Project[]
}

export const experiences: Experience[] = [
  {
    company: 'HVG Technologies',
    role: 'React / React Native / Next.js Developer',
    duration: 'Dec 2024 – Present',
    projects: [
      {
        id: 'solidhealth',
        title: 'SolidHealth',
        concept: 'Advanced healthcare platform helping users take control of their health using AI-powered tools and personalized care management.',
        platforms: ['Web', 'Android', 'iOS'],
        tech: ['React Native (Expo)', 'React.js', 'Next.js', 'TypeScript', 'REST APIs'],
        highlights: [
          'AI-powered health management workflows',
          'Cross-platform mobile app using Expo',
          'Scalable and secure UI architecture',
          'Clean healthcare-focused UX',
        ],
        links: {
          web: 'https://solidhealth.ai/#hero',
        },
        company: 'HVG Technologies',
        description: "",
      },
      {
        id: 'arjun-project',
        title: 'Arjun Project',
        concept: 'Stock market analytics and real-time data platform.',
        platforms: ['Web'],
        tech: ['Next.js', 'TypeScript', 'Redux', 'Recharts'],
        highlights: [
          'Real-time market data',
          'Interactive charts',
          'Performance optimization',
        ],
        company: 'HVG Technologies',
        description: "",
      },
      {
        id: 'ev-charging',
        title: 'EV Charging Web',
        concept: 'EV charging station management platform.',
        platforms: ['Web'],
        tech: ['Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'],
        highlights: [
          'Station booking flow',
          'Payment-ready UI',
          'Fully responsive design',
        ],
        company: 'HVG Technologies',
        description: "",
      },
      {
        id: 'syed-poc',
        title: 'Syed POC',
        concept: 'Proof-of-concept application.',
        platforms: ['Web'],
        tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
        highlights: [
          'Rapid prototyping',
          'Reusable component development',
        ],
        company: 'HVG Technologies',
        description: "",
      },
      {
        id: 'owcrm',
        title: 'OWCRM',
        concept: 'CRM system for internal workflows.',
        platforms: ['Web'],
        tech: ['React.js', 'Next.js', 'TypeScript', 'Redux'],
        highlights: [
          'CRM dashboards',
          'Role-based UI access',
          'Scalable UI architecture',
        ],
        company: 'HVG Technologies',
        description: "",
      },
    ],
  },
  {
    company: 'CoderKube',
    role: 'React / React Native Developer',
    duration: 'Aug 2024 – Nov 2024',
    projects: [
      {
        id: 'heu-app',
        title: 'Heu App',
        concept: 'Card and membership rewards platform helping users manage and maximize benefits across Dubai.',
        tagline: 'Your Cards, Your Perks, All in One Place',
        platforms: ['Web', 'Android', 'iOS'],
        tech: ['React Native (CLI)', 'React.js', 'Tailwind CSS', 'REST APIs'],
        highlights: [
          'Responsive mobile & web UI',
          'Multilingual support',
          'Google Authentication',
          'Cross-functional collaboration',
        ],
        company: 'CoderKube',
        description: ""
      },
      {
        id: 'transectra',
        title: 'Transectra',
        concept: 'Premium diamond marketplace connecting buyers and suppliers.',
        platforms: ['Web'],
        tech: ['React.js', 'Tailwind CSS', 'REST APIs'],
        highlights: [
          'Scalable UI',
          'Performance-focused UX',
          'API-driven data rendering',
        ],
        links: {
          web: 'https://www.transectra.com/',
        },
        company: 'CoderKube',
        description: ""
      },
    ],
  },
  {
    company: 'Dot3 Solutions',
    role: 'React Developer',
    duration: 'Mar 2023 – Jul 2024',
    projects: [
      {
        id: 'fat-wallet',
        title: 'The Fat Wallet',
        concept: 'Rewards platform delivering exclusive benefits to users.',
        platforms: ['Web'],
        tech: ['React.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'shadcn/ui'],
        highlights: [
          'Scalable architecture',
          'UX improvements',
          'User retention focus',
        ],
        company: 'Dot3 Solutions',
        description: ""
      },
      {
        id: 'completecsm',
        title: 'CompleteCSM',
        concept: 'Customer Success Management platform.',
        platforms: ['Web'],
        tech: ['React.js', 'TypeScript', 'Redux', 'GraphQL'],
        highlights: [
          'Complex dashboards',
          'GraphQL API integration',
          'Cross-team collaboration',
        ],
        company: 'Dot3 Solutions',
        description: ""
      },
      {
        id: 'madconnect',
        title: 'MadConnect',
        concept: 'Intelligent Connectivity Layer for MarTech platforms.',
        platforms: ['Web'],
        tech: ['React.js', 'Redux', 'MUI', 'Axios'],
        highlights: [
          'Enterprise-grade UI',
          'Complex data flows',
          'Performance & security focus',
        ],
        company: 'Dot3 Solutions',
        description: ""
      },
    ],
  },
]

export const skills = {
  frontend: ['React Native (CLI, Expo)', 'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  mobile: ['Android Development', 'iOS Development', 'React Native', 'Expo', 'Native Modules'],
  stateManagement: ['Redux', 'RTK Query', 'Zustand', 'Context API'],
  backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL'],
  tools: ['Git', 'GitHub', 'Vercel', 'Firebase', 'Docker', 'AWS', 'VS Code'],
  ui: ['Tailwind CSS', 'shadcn/ui', 'Material-UI', 'Figma'],
}

export const about = {
  name: 'Milan Detruja',
  title: 'React Native (CLI & Expo) + React Web Developer',
  shortBio: 'I build production-ready mobile apps and web applications with focus on performance, scalability, and clean architecture.',
  longBio: `With 3+ years of experience in web and mobile development, I specialize in building scalable React Native applications using both CLI and Expo, alongside modern React and Next.js web platforms. My expertise spans the full development lifecycle, from concept to production deployment on Vercel.

I'm passionate about creating pixel-perfect user interfaces that are not only beautiful but also performant and maintainable. I've worked with leading companies on diverse projects ranging from healthcare platforms with AI integration to e-commerce solutions and real-time analytics dashboards.`,
  location: 'Dubai, UAE',
  email: 'milan@example.com',
  resume: '/resume.pdf',
}

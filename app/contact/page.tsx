'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof formSchema>

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'detrujamilan0@gmail.com',
    href: 'mailto:detrujamilan0@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/milandetruja',
    href: 'https://linkedin.com/in/milandetruja',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/milandetruja',
    href: 'https://github.com/milandetruja',
  },
]

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const { toast } = useToast()

  async function onSubmit(values: FormValues) {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: 'Success!',
        description: 'Your message has been sent. I\'ll get back to you soon!',
      })

      form.reset()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Let's Work Together</h1>
            <p className="text-lg text-muted-foreground">
              Whether you have a React Native mobile app idea, a web project, or want to discuss development best practices, I'd love to connect. Let me know what you're working on!
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-lg border border-border/40 bg-card p-8">
              <h2 className="mb-6 text-2xl font-semibold">Send me a message</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="bg-secondary/30 border-border/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-secondary/30 border-border/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What is this about?"
                            className="bg-secondary/30 border-border/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or opportunity..."
                            rows={5}
                            className="bg-secondary/30 border-border/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-8">
              {/* Quick Contact Methods */}
              <div className="rounded-lg border border-border/40 bg-card p-8">
                <h2 className="mb-6 text-2xl font-semibold">Other ways to connect</h2>
                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-lg border border-border/20 bg-secondary/30 p-4 transition-all hover:border-accent/50 hover:bg-secondary/50"
                      >
                        <Icon className="h-6 w-6 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">{method.label}</p>
                          <p className="text-sm text-muted-foreground">{method.value}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="rounded-lg border border-accent/30 bg-accent/5 p-8">
                  <h3 className="mb-3 font-semibold">What I'm Looking For</h3>
                  <ul className="text-sm text-foreground leading-relaxed space-y-2">
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span>React Native (CLI & Expo) mobile app projects</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span>Full-stack web applications with Next.js</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span>Architecture & scalability consulting</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span>Interesting challenges and new technologies</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border/40 bg-card p-6">
                  <h3 className="mb-3 font-semibold text-sm">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. For urgent matters, feel free to reach out on LinkedIn or GitHub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  FileType,
  Palette,
  LayoutGrid,
  Server,
  Wind,
  Brush,
  Database,
  Search,
  Layers,
  Users,
  MessageSquare,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">YourName</Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link href="#experience" className="text-foreground hover:text-primary transition-colors">
                    Experience
                  </Link>
                  <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                  <Link href="#skills" className="text-foreground hover:text-primary transition-colors">
                    Skills
                  </Link>
                  <Link href="#approach" className="text-foreground hover:text-primary transition-colors">
                    Approach
                  </Link>
                  <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#approach" className="text-muted-foreground hover:text-foreground transition-colors">
              Approach
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-8 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-6 md:gap-16">
          <div className="space-y-4 md:space-y-6 md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground">
              Junior Front-End Developer with 2 years of experience
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-2 justify-center md:justify-start">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:your.email@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Your Name"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate junior front-end developer with 2 years of experience at an outsourcing company. I
                focus on creating responsive, accessible, and performant web applications that deliver exceptional user
                experiences.
              </p>
              <p className="text-lg">
                Working in an outsourcing environment has given me exposure to diverse projects and clients, helping me
                develop strong communication skills and adaptability. I enjoy collaborating with cross-functional teams
                to bring designs to life with clean, efficient code.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing what I've learned with the developer community.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">🌍</span>
                  <span>Based in Your City, Country</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">💼</span>
                  <span>2 years of professional experience</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">🎓</span>
                  <span>Degree in Computer Science (or your field)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">🌱</span>
                  <span>Currently learning TypeScript and Next.js</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">🤝</span>
                  <span>Open to new opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section - Adjusted for Junior Developer */}
        <section id="experience" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            {/* Current Job */}
            <div className="border-l-4 border-primary pl-6 pb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Front-End Developer</h3>
                <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                  2022 - Present
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground mb-4">Outsourcing Company Name, Location</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Developed responsive UI components for multiple client projects using React and Tailwind CSS</li>
                <li>Collaborated with designers to implement pixel-perfect interfaces from Figma designs</li>
                <li>Improved page load performance by 40% through code optimization and lazy loading techniques</li>
                <li>Participated in code reviews and implemented feedback to improve code quality</li>
                <li>Worked directly with clients to gather requirements and present solutions</li>
              </ul>
            </div>

            {/* Previous Job or Internship */}
            <div className="border-l-4 border-primary pl-6 pb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Web Development Intern</h3>
                <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                  2021 - 2022
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground mb-4">Previous Company, Location</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Assisted in building responsive websites using HTML, CSS, and JavaScript</li>
                <li>Created and maintained documentation for internal web components</li>
                <li>Participated in daily stand-ups and sprint planning meetings</li>
                <li>Learned modern front-end development practices and tools</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="border-l-4 border-primary pl-6 pb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                  2017 - 2021
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">University Name, Location</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 1" fill className="object-cover" />
              </div>
              <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">E-commerce Component Library</h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  A reusable component library for e-commerce websites that I built as part of a client project.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Styled Components
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Storybook
                  </Badge>
                </div>
                <div className="mt-auto">
                  <div className="mt-4 mb-4 border-t pt-4">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Challenges & Solutions</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      I faced challenges with component reusability across different themes, which I solved by
                      implementing a flexible theming system. This taught me the importance of planning for
                      customization from the start.
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-4 mt-4">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 2" fill className="object-cover" />
              </div>
              <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Dashboard UI Redesign</h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Redesigned and implemented a client's analytics dashboard with improved UX and performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Chart.js
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Tailwind CSS
                  </Badge>
                </div>
                <div className="mt-auto">
                  <div className="mt-4 mb-4 border-t pt-4">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Challenges & Solutions</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      The dashboard had performance issues with large datasets. I implemented data virtualization and
                      optimized rendering, reducing load time by 60% and improving the overall user experience.
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-4 mt-4">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 3" fill className="object-cover" />
              </div>
              <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Responsive Landing Page</h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Developed a responsive landing page for a SaaS product launch with animations and interactive
                  elements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    HTML/CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    GSAP
                  </Badge>
                </div>
                <div className="mt-auto">
                  <div className="mt-4 mb-4 border-t pt-4">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Challenges & Solutions</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Creating smooth animations that worked well on both desktop and mobile was challenging. I used
                      GSAP and implemented responsive breakpoints for animations, ensuring a consistent experience
                      across devices.
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-4 mt-4">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                View more on GitHub
              </Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Front-End</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  HTML5
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Palette className="h-3.5 w-3.5" />
                  CSS3
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  JavaScript (ES6+)
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <FileType className="h-3.5 w-3.5" />
                  TypeScript
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <LayoutGrid className="h-3.5 w-3.5" />
                  React
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Server className="h-3.5 w-3.5" />
                  Next.js
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Wind className="h-3.5 w-3.5" />
                  Tailwind CSS
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Brush className="h-3.5 w-3.5" />
                  Styled Components
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Database className="h-3.5 w-3.5" />
                  Redux
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Search className="h-3.5 w-3.5" />
                  React Query
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & Other</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" />
                  Git
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  VS Code
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Layers className="h-3.5 w-3.5" />
                  Figma
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  Webpack
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  Jest
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <LayoutGrid className="h-3.5 w-3.5" />
                  React Testing Library
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  Cypress
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Server className="h-3.5 w-3.5" />
                  Vercel
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Server className="h-3.5 w-3.5" />
                  Netlify
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Development Approach Section */}
        <section id="approach" className="py-12 md:py-24 bg-muted scroll-mt-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Development Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Research & Understand</h3>
                  <p className="text-muted-foreground">
                    I begin by thoroughly understanding requirements and researching best practices to ensure I'm
                    building the right solution.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Build & Test</h3>
                  <p className="text-muted-foreground">
                    I develop solutions incrementally with a focus on clean, maintainable code and thorough testing to
                    ensure quality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Refine & Optimize</h3>
                  <p className="text-muted-foreground">
                    I continuously improve my solutions, focusing on performance, accessibility, and user experience to
                    deliver the best product.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Collaboration Skills Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Collaboration Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Working in Teams</h3>
                  <p className="text-muted-foreground mt-2">
                    In my current role at my outsourcing company, I collaborate with cross-functional teams including
                    designers, back-end developers, and project managers. I've developed strong communication skills and
                    the ability to translate technical concepts for non-technical team members.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Client Communication</h3>
                  <p className="text-muted-foreground mt-2">
                    Working in an outsourcing environment has taught me how to effectively communicate with clients,
                    understand their needs, and deliver solutions that meet their expectations while adhering to best
                    practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Professional Goals Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Professional Goals</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg mb-6">As I continue to grow as a front-end developer, I'm focusing on:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium">Mastering React</h3>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium">TypeScript Proficiency</h3>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium">UI/UX Design</h3>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium">Performance Optimization</h3>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium">Testing Strategies</h3>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium">Accessibility</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea,
                or just want to say hello, feel free to reach out!
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-2" />
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/yourusername
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-2" />
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 sm:p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


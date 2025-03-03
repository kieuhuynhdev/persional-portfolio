"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "KIEU QUANG HUYNH - FrontEnd Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">Kiều Huynh</Link>
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
                  <Link
                    href="#about"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="#experience"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Experience
                  </Link>
                  <Link
                    href="#projects"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="#skills"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Skills
                  </Link>
                  <Link
                    href="#contact"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={handleDownloadResume}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex"
            onClick={handleDownloadResume}
          >
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
              Hi, I'm <span className="text-primary">Kiều Huynh</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground">
              Front-end Web Developer
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
              <Link
                href="https://github.com/kieuhuynhdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:khuynhdev@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link
                href="https://huynh.id.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Personal Site</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/kieuhuynhdev.jpg?height=320&width=320"
                alt="Kiều Huynh"
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
                I'm a passionate Front-end Web Developer with experience in
                building responsive and user-friendly web applications. I
                specialize in React, Next.js, and modern front-end technologies.
              </p>
              <p className="text-lg">
                Currently working on various projects, I focus on creating
                efficient and scalable solutions while maintaining high-quality
                code standards.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">📍</span>
                  <span>An Khanh, Hoai Duc, Ha Noi, Vietnam</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">📞</span>
                  <span>+(84) 966150543</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">✉️</span>
                  <span>khuynhdev@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">🌐</span>
                  <a
                    href="https://huynh.id.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    huynh.id.vn
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">🔗</span>
                  <a
                    href="https://github.com/kieuhuynhdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    github.com/kieuhuynhdev
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6 pb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Front-end Developer</h3>
                <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                  11/2022 - 12/2023
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Adamo Software Company
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Developed and maintained responsive web applications using
                  ReactJS and NextJS
                </li>
                <li>
                  Collaborated with UI/UX designers to implement visually
                  appealing and intuitive user interfaces
                </li>
                <li>
                  Integrated RESTful APIs to fetch and display data dynamically
                </li>
                <li>Resolve issues and optimized application performance</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6 pb-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  React Developer Internship
                </h3>
                <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                  08/2022 - 10/2022
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Adamo Software Company
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Engaged in on-the-job training under the direct guidance of a
                  team leader
                </li>
                <li>
                  Built responsive web interfaces with React for a commercial
                  platform
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src="/llc.png"
                  alt="Live Life Clean"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Live Life Clean
                </h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  A platform designed to support a healthier and cleaner
                  lifestyle. It provides essential resources and solutions in
                  one place, eliminating the need to search across multiple
                  sources.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    ReactJS
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    NextJS
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Typescript
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Ant Design
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Tailwind CSS
                  </Badge>
                </div>
                <div className="mt-auto">
                  <div className="mt-4 mb-4 border-t pt-4">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">
                      Key Responsibilities
                    </h4>
                    <ul className="text-xs sm:text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>
                        Followed Agile Scrum methodology under team leader's
                        guidance
                      </li>
                      <li>
                        Built application interfaces using ReactJS, NextJS and
                        Typescript
                      </li>
                      <li>
                        Integrated APIs and collaborated with back-end
                        developers
                      </li>
                      <li>
                        Ensured responsive design and cross-browser
                        compatibility
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-2 sm:gap-4 mt-4">
                    <Button size="sm" className="flex-1" asChild>
                      <Link
                        href="https://livelifeclean.com?height=200&width=400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Visit Site
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src="/swell.png?height=200&width=400"
                  alt="Swell Health"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Swell Health
                </h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  A platform offering immediate access to licensed therapists
                  through confidential video sessions, available in Tennessee
                  and Kentucky. Designed for middle and working-class
                  individuals, prioritizing military families.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    ReactJS
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    NextJS
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    Material UI
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    NodeJS
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    ExpressJS
                  </Badge>
                  <Badge variant="outline" className="text-xs sm:text-sm">
                    React Native
                  </Badge>
                </div>
                <div className="mt-auto">
                  <div className="mt-4 mb-4 border-t pt-4">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">
                      Key Responsibilities
                    </h4>
                    <ul className="text-xs sm:text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>
                        Maintained and developed projects on website and mobile
                        platforms
                      </li>
                      <li>
                        Implemented new features based on customer requirements
                      </li>
                      <li>Resolved issues and optimized system performance</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 sm:gap-4 mt-4">
                    <Button size="sm" className="flex-1" asChild>
                      <Link
                        href="https://www.getswell.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Visit Site
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Technical Main Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  HTML
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Palette className="h-3.5 w-3.5" />
                  CSS
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  Javascript
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Palette className="h-3.5 w-3.5" />
                  SCSS
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <LayoutGrid className="h-3.5 w-3.5" />
                  React
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Server className="h-3.5 w-3.5" />
                  NextJS
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Wind className="h-3.5 w-3.5" />
                  Tailwind CSS
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Brush className="h-3.5 w-3.5" />
                  Material UI
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Brush className="h-3.5 w-3.5" />
                  Ant Design
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Brush className="h-3.5 w-3.5" />
                  Shadcn/ui
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <LayoutGrid className="h-3.5 w-3.5" />
                  React Native
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Technical Additional Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Server className="h-3.5 w-3.5" />
                  NodeJS
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Server className="h-3.5 w-3.5" />
                  ExpressJS
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Database className="h-3.5 w-3.5" />
                  MongoDB
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Github className="h-3.5 w-3.5" />
                  Git
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  Axios
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Database className="h-3.5 w-3.5" />
                  Redux Toolkit
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  Teamwork
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  Time Management
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Layers className="h-3.5 w-3.5" />
                  Flexibility
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Layers className="h-3.5 w-3.5" />
                  Adaptability
                </Badge>
                <Badge className="text-sm py-1 px-3 flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  Agile Scrum
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="space-y-4">
            <p className="text-lg">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hello, feel free
              to reach out!
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:khuynhdev@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  khuynhdev@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-2" />
                <a
                  href="https://github.com/kieuhuynhdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/kieuhuynhdev
                </a>
              </div>
              <div className="flex items-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                <a
                  href="https://huynh.id.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  huynh.id.vn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kiều Huynh. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/kieuhuynhdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="mailto:khuynhdev@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link
              href="https://huynh.id.vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Personal Site</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

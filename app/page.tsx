import Link from "next/link";
import { personalInfo, bio, education, skills, experience, projects, achievements } from "@/lib/data";

export default function Home() {
  return (
    <div className="relative">
      {/* Warm gradient glow at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] gradient-warm" />

      {/* ===== HERO SECTION ===== */}
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left: Main intro */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-emerald-500">Open to opportunities</span>
            </div>

            <h1 className="font-serif text-hero mb-6">
              <span className="cursor-blink">{personalInfo.name}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted mb-6">
              {personalInfo.title}
            </p>

            <p className="text-lg text-muted/80 leading-relaxed mb-8 max-w-xl">
              {bio.split("\n\n")[0]}
            </p>

            {/* Quick links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-soft transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in touch
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-lg hover:border-warm-stone hover:bg-surface transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-lg hover:border-warm-stone hover:bg-surface transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Quick stats */}
          <div className="lg:col-span-5 animate-fade-in-up delay-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-foreground">{5}+</div>
                <div className="text-sm text-muted mt-1">Projects Built</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted mt-1">DSA Problems</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted mt-1">Community Led</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-foreground">{education.cgpa.split(" ")[0]}</div>
                <div className="text-sm text-muted mt-1">CGPA</div>
              </div>
            </div>

            {/* Education quick info */}
            <div className="mt-4 card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-foreground">{education.institution}</div>
                  <div className="text-sm text-muted">{education.degree}</div>
                  <div className="text-xs text-muted mt-1">{education.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="section-marker mb-10">Tech Stack</div>

        {/* Main container with accent glow */}
        <div className="relative">
          {/* Subtle accent glow behind */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-50" />

          <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-sm overflow-hidden">
            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {/* Languages */}
              <div className="p-6 lg:p-8 border-b md:border-b lg:border-b-0 lg:border-r border-border group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Languages
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-background/60 border border-border/80 text-foreground/90 rounded-md hover:border-accent/50 hover:text-foreground transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Frameworks
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-background/60 border border-border/80 text-foreground/90 rounded-md hover:border-accent/50 hover:text-foreground transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="p-6 lg:p-8 border-b md:border-b-0 md:border-r lg:border-r border-border group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Databases
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-background/60 border border-border/80 text-foreground/90 rounded-md hover:border-accent/50 hover:text-foreground transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="p-6 lg:p-8 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Tools
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-background/60 border border-border/80 text-foreground/90 rounded-md hover:border-accent/50 hover:text-foreground transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION (Moved above Experience) ===== */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="section-marker mb-4">Featured Projects</div>
            <p className="text-muted max-w-xl">
              Full-stack applications I&apos;ve built, from AI-powered platforms to finance management systems.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-surface border border-border p-6 md:p-8 transition-all duration-300 hover:border-warm-stone hover:shadow-xl hover:shadow-black/20">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-soft to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  {/* Left: Project info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent font-bold text-sm font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-accent">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-elevated border border-border text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Highlights */}
                  <div className="lg:w-80 flex-shrink-0">
                    <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                              <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-muted">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* View project link */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                  <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                    View on GitHub
                  </span>
                  <svg
                    className="w-5 h-5 text-muted group-hover:text-accent transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/projects"
            className="link-underline text-sm text-muted hover:text-foreground transition-colors"
          >
            View all projects
          </Link>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="section-marker mb-8">Experience</div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Work Experience */}
          <div>
            <h3 className="font-serif text-section mb-8">Work & Training</h3>
            <div className="space-y-8">
              {experience
                .filter((e) => e.type === "work")
                .map((exp) => (
                  <div key={exp.title} className="experience-item pb-8">
                    <div className="text-xs text-accent font-medium mb-2">{exp.duration}</div>
                    <h4 className="text-lg font-medium text-foreground">{exp.title}</h4>
                    <div className="text-sm text-muted mb-3">{exp.organization}</div>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-muted flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="font-serif text-section mb-8">Leadership</h3>
            <div className="space-y-8">
              {experience
                .filter((e) => e.type === "leadership")
                .map((exp) => (
                  <div key={exp.title} className="experience-item pb-8">
                    <div className="text-xs text-accent font-medium mb-2">{exp.duration}</div>
                    <h4 className="text-lg font-medium text-foreground">{exp.title}</h4>
                    <div className="text-sm text-muted mb-3">{exp.organization}</div>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-muted flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/experience"
            className="link-underline text-sm text-muted hover:text-foreground transition-colors"
          >
            View full experience
          </Link>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS SECTION ===== */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="section-marker mb-8">Achievements</div>

        <div className="grid gap-4 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <div key={achievement.title} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted">{achievement.description}</p>
                  {"date" in achievement && (
                    <p className="text-xs text-muted mt-2">{achievement.date}</p>
                  )}
                  {"link" in achievement && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-block text-xs text-accent mt-2"
                    >
                      View profile
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl bg-surface border border-border p-8 md:p-12">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <div className="section-marker mb-6">Get in Touch</div>
              <h2 className="font-serif text-page mb-4">
                Let&apos;s work together
              </h2>
              <p className="text-muted mb-8 max-w-md">
                I&apos;m always excited to discuss new projects, opportunities, or just chat about tech.
                Feel free to reach out through any of these channels.
              </p>

              <a
                href={`mailto:${personalInfo.email}?subject=Hello from your portfolio`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-soft transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send me an email
              </a>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted mb-1">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted mb-1">Phone</div>
                  <span className="text-foreground">{personalInfo.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted mb-1">Location</div>
                  <span className="text-foreground">{personalInfo.location}</span>
                  <span className="text-muted text-sm ml-2">• Open to remote</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted hover:text-accent hover:border-accent transition-all"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted hover:text-accent hover:border-accent transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted hover:text-accent hover:border-accent transition-all"
                  aria-label="LeetCode"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

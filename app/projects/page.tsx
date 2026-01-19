import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      {/* Spotlight effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative mb-20 md:mb-24">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-indigo-400">
          My Work
        </span>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
          A collection of projects I&apos;ve built, from AI-powered applications
          to full-stack platforms. Each one represents a unique challenge
          and learning experience.
        </p>
      </div>

      {/* Projects List */}
      <div className="relative space-y-10 md:space-y-12">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/20 hover:bg-white/[0.03] hover:shadow-2xl hover:shadow-indigo-500/5"
          >
            {/* Hover gradient effect */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="relative flex flex-col gap-8 p-8 md:p-12 lg:flex-row lg:gap-16">
              {/* Left: Project Info */}
              <div className="flex-1">
                {/* Project number & title */}
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-indigo-400">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-xs font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      Project
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-300 md:text-3xl lg:text-4xl">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-lg text-slate-400">{project.subtitle}</p>
                  </div>
                  
                  {/* External link arrow */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
                  >
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </a>
                </div>

                {/* Description */}
                <p className="mb-10 text-lg leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-10">
                  <p className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 transition-all duration-300 hover:bg-indigo-500/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button href={project.github} external variant="secondary" className="group/btn">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Source Code
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>

              {/* Right: Key Features */}
              <div className="lg:w-[400px]">
                <div className="rounded-2xl border border-white/[0.08] bg-slate-900/50 p-8 backdrop-blur-sm">
                  <p className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-white">
                    <svg
                      className="h-5 w-5 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Key Features
                  </p>
                  <ul className="space-y-5">
                    {project.highlights.map((highlight, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-4"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                          <svg
                            className="h-3.5 w-3.5 text-indigo-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-sm leading-relaxed text-slate-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* More Projects CTA */}
      <div className="relative mt-24 text-center md:mt-32">
        <div className="inline-flex flex-col items-center rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 backdrop-blur-sm md:p-16">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
            <svg className="h-10 w-10 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="mb-3 text-2xl font-bold text-white">Explore More</h3>
          <p className="mb-8 text-slate-400">
            Check out my GitHub for more projects and contributions
          </p>
          <Button
            href="https://github.com/Misaa20"
            external
            variant="gradient"
            size="lg"
            className="group"
          >
            <span>View All Repositories</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

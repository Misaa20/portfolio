import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h1 className="font-serif text-page">
          <span className="cursor-blink">Projects</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          A collection of projects I&apos;ve built, from AI-powered applications
          to full-stack platforms.
        </p>
      </section>

      {/* Horizontal Rule */}
      <div className="mx-auto max-w-5xl px-6">
        <hr className="hr-editorial" />
      </div>

      {/* Projects List */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <article key={project.title}>
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                {/* Left: Number and Title */}
                <div className="lg:col-span-5">
                  <span className="text-sm text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-4 font-serif text-3xl md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-lg text-muted">{project.subtitle}</p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    View on GitHub
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </a>
                </div>

                {/* Right: Description and Details */}
                <div className="lg:col-span-7">
                  <p className="text-lg leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-8">
                    <p className="text-sm text-muted mb-3">Tech Stack</p>
                    <p className="text-foreground">
                      {project.tech.join(" / ")}
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm text-muted mb-4">Key Features</p>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span className="text-muted">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {index < projects.length - 1 && (
                <hr className="hr-editorial mt-24 md:mt-32" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* More Projects CTA */}
      <div className="mx-auto max-w-5xl px-6">
        <hr className="hr-editorial" />
      </div>

      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="text-muted">
          More projects available on{" "}
          <a
            href="https://github.com/Misaa20"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground transition-colors duration-200 hover:text-accent"
          >
            GitHub
          </a>
        </p>
      </section>
    </div>
  );
}

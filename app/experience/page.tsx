import { experience } from "@/lib/data";

export default function Experience() {
  const workExperience = experience.filter((exp) => exp.type === "work");
  const leadership = experience.filter((exp) => exp.type === "leadership");

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h1 className="font-serif text-page">
          <span className="cursor-blink">Experience</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          My professional journey and leadership roles.
        </p>
      </section>

      {/* Horizontal Rule */}
      <div className="mx-auto max-w-5xl px-6">
        <hr className="hr-editorial" />
      </div>

      {/* Work Experience */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-section">Work</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-16">
              {workExperience.map((exp, index) => (
                <article key={exp.title}>
                  <p className="text-sm text-muted">{exp.duration}</p>
                  <h3 className="mt-3 text-xl text-foreground">{exp.title}</h3>
                  <p className="mt-1 text-accent">{exp.organization}</p>
                  <p className="mt-4 text-muted leading-relaxed">{exp.description}</p>

                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span className="text-muted">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {index < workExperience.length - 1 && (
                    <hr className="hr-editorial mt-16" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Rule */}
      <div className="mx-auto max-w-5xl px-6">
        <hr className="hr-editorial" />
      </div>

      {/* Leadership */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-section">Leadership</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-16">
              {leadership.map((exp, index) => (
                <article key={exp.title}>
                  <p className="text-sm text-muted">{exp.duration}</p>
                  <h3 className="mt-3 text-xl text-foreground">{exp.title}</h3>
                  <p className="mt-1 text-accent">{exp.organization}</p>
                  <p className="mt-4 text-muted leading-relaxed">{exp.description}</p>

                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span className="text-muted">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {index < leadership.length - 1 && (
                    <hr className="hr-editorial mt-16" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Rule */}
      <div className="mx-auto max-w-5xl px-6">
        <hr className="hr-editorial" />
      </div>

      {/* Footer message */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="text-muted">
          This is just the beginning. Looking forward to new challenges.
        </p>
      </section>
    </div>
  );
}

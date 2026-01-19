import { bio, education, skills, achievements } from "@/lib/data";

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h1 className="font-serif text-page">
          <span className="cursor-blink">About</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          Developer, problem-solver, and lifelong learner.
        </p>
      </section>

      {/* Horizontal Rule */}
      <div className="mx-auto max-w-5xl px-6">
        <hr className="hr-editorial" />
      </div>

      {/* Bio Section */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-section">Background</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              {bio.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Rule */}
      <div className="mx-auto max-w-5xl px-6">
        <hr className="hr-editorial" />
      </div>

      {/* Education Section */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-section">Education</h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-xl text-foreground">{education.institution}</h3>
            <p className="mt-2 text-muted">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.location}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted">
              <span>{education.duration}</span>
              <span>CGPA: {education.cgpa}</span>
            </div>

            <div className="mt-8">
              <p className="text-sm text-muted mb-3">Relevant Coursework</p>
              <p className="text-foreground leading-relaxed">
                {education.coursework.join(" / ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Rule */}
      <div className="mx-auto max-w-5xl px-6">
        <hr className="hr-editorial" />
      </div>

      {/* Skills Section */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-section">Skills</h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <div>
              <p className="text-sm text-muted mb-3">Languages</p>
              <p className="text-foreground">{skills.languages.join(" / ")}</p>
            </div>
            <div>
              <p className="text-sm text-muted mb-3">Frameworks & Libraries</p>
              <p className="text-foreground">{skills.frameworks.join(" / ")}</p>
            </div>
            <div>
              <p className="text-sm text-muted mb-3">Databases</p>
              <p className="text-foreground">{skills.databases.join(" / ")}</p>
            </div>
            <div>
              <p className="text-sm text-muted mb-3">Tools & Platforms</p>
              <p className="text-foreground">{skills.tools.join(" / ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Rule */}
      <div className="mx-auto max-w-5xl px-6">
        <hr className="hr-editorial" />
      </div>

      {/* Achievements Section */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-section">Achievements</h2>
          </div>
          <div className="lg:col-span-8">
            <ol className="space-y-8">
              {achievements.map((achievement, index) => (
                <li key={achievement.title} className="flex gap-6">
                  <span className="text-sm text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-foreground">{achievement.title}</h3>
                    <p className="mt-1 text-muted">{achievement.description}</p>
                    {"date" in achievement && (
                      <p className="mt-2 text-sm text-muted">{achievement.date}</p>
                    )}
                    {"link" in achievement && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline mt-2 inline-block text-sm text-muted transition-colors duration-200 hover:text-foreground"
                      >
                        View profile
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

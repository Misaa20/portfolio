import { experience } from "@/lib/data";

export default function Experience() {
  const workExperience = experience.filter((exp) => exp.type === "work");
  const leadership = experience.filter((exp) => exp.type === "leadership");

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
          My Journey
        </span>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
          My professional journey so far, including work experience and
          leadership roles that have shaped my skills and perspective.
        </p>
      </div>

      {/* Work Experience */}
      <section className="relative mb-24 md:mb-32">
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
            <svg
              className="h-6 w-6 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {workExperience.map((exp) => (
            <div
              key={exp.title}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/20 hover:bg-white/[0.04] md:p-10"
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="mt-1 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-medium">{exp.organization}</p>
                  </div>
                  <span className="inline-flex items-center self-start rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-slate-400">
                    {exp.duration}
                  </span>
                </div>

                <p className="mt-6 text-slate-400 leading-relaxed">{exp.description}</p>

                <ul className="mt-8 space-y-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
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
                      <span className="text-slate-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Activities */}
      <section className="relative">
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
            <svg
              className="h-6 w-6 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Leadership & Activities</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map((exp) => (
            <div
              key={exp.title}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/20 hover:bg-white/[0.04] md:p-8"
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="mb-5">
                  <span className="inline-flex items-center rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400">
                    {exp.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                <p className="mt-1 text-sm bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-medium">{exp.organization}</p>

                <p className="mt-4 text-sm text-slate-400 leading-relaxed">{exp.description}</p>

                <ul className="mt-5 space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                      <span className="text-slate-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer message */}
      <div className="relative mt-24 text-center md:mt-32">
        <div className="inline-flex flex-col items-center rounded-2xl border border-white/[0.08] bg-white/[0.02] px-12 py-10 backdrop-blur-sm">
          <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p className="text-lg text-slate-300">
            This is just the beginning of my journey.
          </p>
          <p className="mt-2 text-slate-500">
            Looking forward to new challenges and opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

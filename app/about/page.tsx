import Badge from "@/components/ui/Badge";
import { bio, education, skills, achievements, personalInfo } from "@/lib/data";

export default function About() {
  return (
    <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      {/* Spotlight effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative mb-20 md:mb-24">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-indigo-400">
          Get to Know Me
        </span>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
          Developer, problem-solver, and lifelong learner.
        </p>
      </div>

      {/* Bio Section */}
      <section className="relative mb-24 md:mb-32">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-indigo-400">Background</h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              {bio.split("\n\n").map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-lg font-semibold text-white">Quick Info</h3>
              <dl className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                    <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Location</dt>
                    <dd className="font-medium text-white">{personalInfo.location}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                    <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Education</dt>
                    <dd className="font-medium text-white">{education.degree}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                    <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">CGPA</dt>
                    <dd className="font-medium text-white">{education.cgpa}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                    <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Focus</dt>
                    <dd className="font-medium text-white">Full-Stack & AI/ML</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative mb-24 md:mb-32">
        <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-indigo-400">Education</h2>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{education.institution}</h3>
              <p className="mt-1 text-slate-300">{education.degree}</p>
              <p className="mt-1 text-sm text-slate-500">{education.location}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{education.cgpa}</p>
              <p className="mt-1 text-sm text-slate-500">{education.duration}</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/[0.05]">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <Badge key={course} variant="default">{course}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative mb-24 md:mb-32">
        <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-indigo-400">Skills & Technologies</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { 
              title: "Languages", 
              items: skills.languages,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              )
            },
            { 
              title: "Frameworks", 
              items: skills.frameworks,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              )
            },
            { 
              title: "Databases", 
              items: skills.databases,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              )
            },
            { 
              title: "Tools", 
              items: skills.tools,
              icon: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </>
              )
            },
          ].map((category) => (
            <div 
              key={category.title}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/20 hover:bg-white/[0.04]"
            >
              <h3 className="mb-5 flex items-center gap-3 font-semibold text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 transition-colors duration-300 group-hover:bg-indigo-500/20">
                  <svg className="h-5 w-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {category.icon}
                  </svg>
                </div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge key={skill} variant="accent">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative">
        <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-indigo-400">
          Achievements & Certifications
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/20 hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 transition-transform duration-300 group-hover:scale-110">
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
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold text-white">{achievement.title}</h3>
              <p className="text-sm text-slate-400">{achievement.description}</p>
              {"date" in achievement && (
                <p className="mt-3 text-xs text-slate-500">{achievement.date}</p>
              )}
              {"link" in achievement && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  View Profile
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

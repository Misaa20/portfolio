"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { personalInfo, projects, skills, education } from "@/lib/data";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Spotlight effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-indigo-500/20 via-indigo-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 lg:py-40">
        
        {/* Hero Section */}
        <div className="mb-24 flex flex-col items-center text-center md:mb-32">
          {/* Avatar/Initials */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mb-8"
          >
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-75 blur-lg transition-all duration-500 group-hover:opacity-100" />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-4xl font-bold text-white shadow-2xl shadow-indigo-500/25">
              ET
            </div>
          </motion.div>

          {/* Open to Work Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Open to Work
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-xl text-muted md:text-2xl"
          >
            {personalInfo.title}
          </motion.p>

          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 flex items-center gap-2 text-muted"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 flex items-center gap-4"
          >
            {[
              { href: personalInfo.github, label: "GitHub", icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              )},
              { href: personalInfo.linkedin, label: "LinkedIn", icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              )},
              { href: `mailto:${personalInfo.email}`, label: "Email", icon: (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )},
              { href: personalInfo.leetcode, label: "LeetCode", icon: (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              )},
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-muted transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/projects" variant="gradient" size="lg" className="group">
              <span>View Projects</span>
              <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* About Section */}
        <FadeInUp className="mb-24 md:mb-32">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-indigo-400">About</h2>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.03] md:p-10">
            <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
              I&apos;m a <span className="font-medium text-white">Computer Science Engineering</span> student at{" "}
              <span className="font-medium text-white">{education.institution}</span> with a passion for building 
              full-stack applications powered by <span className="font-medium text-white">AI and machine learning</span>. 
              I specialize in the MERN stack and have hands-on experience integrating NLP models, 
              building intelligent systems, and creating seamless user experiences.
            </p>
          </div>
        </FadeInUp>

        {/* Experience Stats */}
        <FadeInUp className="mb-24 md:mb-32" delay={0.1}>
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-indigo-400">At a Glance</h2>
          <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              { value: `${projects.length}`, label: "Projects", suffix: "+" },
              { value: "200", label: "DSA Problems", suffix: "+" },
              { value: "500", label: "Community Led", suffix: "+" },
              { value: education.cgpa.split(" ")[0], label: "CGPA", suffix: "" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center transition-all duration-500 hover:border-indigo-500/30 hover:bg-white/[0.04] md:p-8"
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.1)" }}
                >
                  <p className="text-3xl font-bold text-white md:text-4xl">
                    {stat.value}
                    <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeInUp>

        {/* Skills */}
        <FadeInUp className="mb-24 md:mb-32" delay={0.2}>
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-indigo-400">Tech Stack</h2>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] md:p-10">
            <div className="flex flex-wrap gap-3">
              {[...skills.languages, ...skills.frameworks, ...skills.databases, ...skills.tools].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300 transition-colors duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Featured Projects */}
        <FadeInUp delay={0.3}>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-sm font-medium uppercase tracking-widest text-indigo-400">Featured Projects</h2>
            <Button href="/projects" variant="ghost" size="sm" className="group">
              <span>View All</span>
              <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:border-indigo-500/30 hover:bg-white/[0.04]"
                  whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.15)" }}
                >
                  {/* Hover gradient */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-indigo-400 transition-all duration-300 group-hover:scale-110">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <svg
                        className="h-5 w-5 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-indigo-400 group-hover:-translate-y-1 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-indigo-300">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted line-clamp-2">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="rounded-lg bg-white/[0.05] px-2.5 py-1 text-xs text-slate-400 transition-colors duration-300 group-hover:bg-indigo-500/10 group-hover:text-indigo-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeInUp>

      </div>
    </div>
  );
}

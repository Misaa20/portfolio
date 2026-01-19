"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glassmorphism navbar */}
      <div className="mx-4 mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl md:mx-6">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="group relative text-xl font-bold tracking-tight transition-all duration-300"
          >
            <span className="relative z-10">
              ET
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">.</span>
            </span>
            {/* Hover glow */}
            <span className="absolute -inset-2 -z-10 rounded-lg bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {/* Active indicator */}
                  {pathname === link.href && (
                    <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              {/* Shimmer effect */}
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-muted transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/95 backdrop-blur-xl md:mx-6 md:hidden">
          <ul className="flex flex-col p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-white/[0.05] text-foreground"
                      : "text-muted hover:bg-white/[0.03] hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                  )}
                </Link>
              </li>
            ))}
            {/* Mobile CTA */}
            <li className="mt-4 pt-4 border-t border-white/[0.08]">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-3 text-sm font-medium text-white transition-all duration-300"
              >
                Let&apos;s Talk
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

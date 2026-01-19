import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Era Trivedi | Full-Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Era Trivedi - Full-Stack Developer specializing in React, Node.js, and AI/ML applications. Building intelligent, scalable solutions.",
  keywords: [
    "Era Trivedi",
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "AI Developer",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Era Trivedi" }],
  openGraph: {
    title: "Era Trivedi | Full-Stack Developer & AI Enthusiast",
    description:
      "Building intelligent, scalable applications that solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          {/* Global background gradients */}
          <div className="pointer-events-none fixed inset-0 z-0">
            {/* Top spotlight */}
            <div className="absolute -top-[40%] left-1/2 h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/10 via-indigo-500/5 to-transparent blur-3xl" />
            {/* Bottom accent */}
            <div className="absolute -bottom-[20%] left-1/4 h-[600px] w-[800px] rounded-full bg-gradient-to-t from-cyan-500/5 to-transparent blur-3xl" />
          </div>
          
          <Navbar />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

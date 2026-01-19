import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en" className={`${instrumentSerif.variable} ${instrumentSans.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

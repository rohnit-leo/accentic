"use client"

import Hero from "@/components/Hero"
import About from "@/components/About"
import Features from "@/components/Features"
import Process from "@/components/Process"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import Brands from "@/components/Brands"
import CTA from "@/components/CTA"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Process />
        <Stats />
        <Testimonials />
        <Brands />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

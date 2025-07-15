"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="bg-darkBlue text-white py-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-indigo/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Accentic</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Fueling Growth with Creativity. We are a full-service digital marketing agency dedicated to transforming
              businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-indigo transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-indigo transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-indigo transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-indigo transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-indigo transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-indigo transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-indigo transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-indigo transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-indigo transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-white/70 hover:text-indigo transition-colors duration-300">
                  Influencer Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-indigo transition-colors duration-300">
                  Meta & Google Ads
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-indigo transition-colors duration-300">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-indigo transition-colors duration-300">
                  Graphics Designing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-indigo transition-colors duration-300">
                  Social Media Management
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo" />
                <a
                  href="mailto:Accenticdigitalsolutions@gmail.com"
                  className="text-white/70 hover:text-indigo transition-colors duration-300"
                >
                  Accenticdigitalsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo" />
                <span className="text-white/70">6370611812, 8249806562</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo" />
                <span className="text-white/70">Bhubaneswar, Odisha, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60 text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Accentic Digital Solutions. All rights reserved.</p>
          <p>
            Developed by{" "}
            <Link href="https://nexturex.com" className="text-indigo font-semibold hover:underline">
              NextureX
            </Link>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

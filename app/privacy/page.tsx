"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import { ShieldCheck, FileText, Lock } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cream via-lightBlue/30 to-indigo/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Privacy Policy</h1>
            <p className="text-xl text-darkBlue/70 leading-relaxed mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-10 text-darkBlue/80">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-darkBlue mb-4 flex items-center">
                <ShieldCheck className="w-8 h-8 mr-3 text-indigo" />
                Introduction
              </h2>
              <p className="mb-4">
                Welcome to Accentic Digital Solutions. We are committed to protecting your privacy and ensuring the
                security of your personal information. This Privacy Policy outlines our practices regarding the
                collection, use, and disclosure of your information when you visit our website or use our services.
              </p>
              <p>
                By accessing or using our website and services, you agree to the terms of this Privacy Policy. If you do
                not agree with these terms, please do not use our website or services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-darkBlue mb-4 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-indigo" />
                Information We Collect
              </h2>
              <p className="mb-4">We may collect various types of information from and about you, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  **Personal Identifiable Information (PII):** Such as your name, email address, phone number, and
                  company details when you fill out forms, subscribe to newsletters, or contact us.
                </li>
                <li>
                  **Usage Data:** Information about how you access and use our website, including your IP address,
                  browser type, operating system, referral sources, pages viewed, and the dates/times of your visits.
                </li>
                <li>
                  **Cookies and Tracking Technologies:** We use cookies and similar tracking technologies to track the
                  activity on our website and hold certain information.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-darkBlue mb-4 flex items-center">
                <Lock className="w-8 h-8 mr-3 text-indigo" />
                How We Use Your Information
              </h2>
              <p className="mb-4">We use the collected information for various purposes, including to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, operate, and maintain our website and services.</li>
                <li>Improve, personalize, and expand our website and services.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>Develop new products, services, features, and functionality.</li>
                <li>
                  Communicate with you, either directly or through one of our partners, including for customer service,
                  to provide you with updates and other information relating to the website, and for marketing and
                  promotional purposes.
                </li>
                <li>Send you emails.</li>
                <li>Find and prevent fraud.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-darkBlue mb-4 flex items-center">
                <ShieldCheck className="w-8 h-8 mr-3 text-indigo" />
                Data Security
              </h2>
              <p className="mb-4">
                The security of your data is important to us, but remember that no method of transmission over the
                Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-darkBlue mb-4 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-indigo" />
                Changes to This Privacy Policy
              </h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-darkBlue mb-4 flex items-center">
                <Lock className="w-8 h-8 mr-3 text-indigo" />
                Contact Us
              </h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>By email: Accenticdigitalsolutions@gmail.com</li>
                <li>By visiting this page on our website: /contact</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </motion.div>
  )
}

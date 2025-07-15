"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import { ExternalLink, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Redesign",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    description: "A modern and responsive e-commerce platform with enhanced user experience.",
    link: "#",
  },
  {
    id: 2,
    title: "Brand Identity & Guidelines",
    category: "Graphics Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete brand overhaul including logo, typography, and visual guidelines.",
    link: "#",
  },
  {
    id: 3,
    title: "SaaS Marketing Campaign",
    category: "Digital Marketing",
    image: "/placeholder.svg?height=400&width=600",
    description: "Integrated digital marketing strategy leading to 30% lead generation increase.",
    link: "#",
  },
  {
    id: 4,
    title: "Mobile App UI/UX",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "Intuitive and engaging user interface design for a new productivity app.",
    link: "#",
  },
  {
    id: 5,
    title: "Local Business SEO",
    category: "SEO",
    image: "/placeholder.svg?height=400&width=600",
    description: "Achieved top 3 local search rankings for key services in a competitive market.",
    link: "#",
  },
  {
    id: 6,
    title: "Social Media Content Strategy",
    category: "Social Media",
    image: "/placeholder.svg?height=400&width=600",
    description: "Developed and executed a content strategy that boosted engagement by 50%.",
    link: "#",
  },
]

const categories = [
  "All",
  "Web Development",
  "Digital Marketing",
  "Graphics Design",
  "UI/UX Design",
  "SEO",
  "Social Media",
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

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
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Our Portfolio</h1>
            <p className="text-xl text-darkBlue/70 leading-relaxed mb-8">
              Showcasing our diverse range of successful projects and creative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeCategory === category
                      ? "gradient-bg text-white shadow-md"
                      : "bg-gray-100 text-darkBlue hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo/10"
                >
                  <Link href={item.link}>
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-darkBlue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Search className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <p className="text-sm font-medium text-indigo mb-2">{item.category}</p>
                    <Link href={item.link}>
                      <h3 className="text-xl font-bold text-darkBlue mb-3 group-hover:text-indigo transition-colors duration-300">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-darkBlue/70 text-sm leading-relaxed mb-4">{item.description}</p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center text-indigo font-semibold hover:text-purple transition-colors duration-300"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-darkBlue/70 text-lg">
                No projects found for this category.
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </motion.div>
  )
}

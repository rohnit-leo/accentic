"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import { CalendarDays, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Marketing: Trends to Watch in 2024",
    date: "July 10, 2024",
    category: "Digital Marketing",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Explore the cutting-edge trends shaping the digital marketing landscape, from AI-driven personalization to immersive experiences.",
    link: "/blog/post-1",
  },
  {
    id: 2,
    title: "Mastering SEO: A Comprehensive Guide for Small Businesses",
    date: "June 25, 2024",
    category: "SEO",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Unlock the secrets to higher search rankings and organic traffic with our in-depth SEO guide tailored for small businesses.",
    link: "/blog/post-2",
  },
  {
    id: 3,
    title: "Crafting Compelling Content: Strategies for Engagement",
    date: "June 15, 2024",
    category: "Content Marketing",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Learn how to create content that resonates with your audience, drives engagement, and converts visitors into loyal customers.",
    link: "/blog/post-3",
  },
  {
    id: 4,
    title: "Social Media Advertising: Maximizing Your ROI on Meta & Google",
    date: "May 30, 2024",
    category: "Paid Ads",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Discover advanced strategies for running successful ad campaigns on Facebook, Instagram, and Google to achieve optimal return on investment.",
    link: "/blog/post-4",
  },
  {
    id: 5,
    title: "The Power of Visuals: Why Graphics Design is Crucial for Your Brand",
    date: "May 10, 2024",
    category: "Graphics Design",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Understand how stunning visuals can elevate your brand identity, capture attention, and communicate your message effectively.",
    link: "/blog/post-5",
  },
  {
    id: 6,
    title: "Local SEO Domination: Getting Your Business Found in Local Searches",
    date: "April 20, 2024",
    category: "Local SEO",
    image: "/placeholder.svg?height=400&width=600",
    excerpt:
      "Implement proven local SEO tactics to ensure your business ranks high in local search results and attracts nearby customers.",
    link: "/blog/post-6",
  },
]

export default function Blog() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Our Blog</h1>
            <p className="text-xl text-darkBlue/70 leading-relaxed mb-8">
              Stay updated with the latest insights, trends, and strategies in digital marketing, web development, and
              creative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo/10"
              >
                <Link href={post.link}>
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkBlue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-darkBlue/70 mb-3">
                    <div className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-2 text-indigo" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-2 text-indigo" />
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <Link href={post.link}>
                    <h3 className="text-xl font-bold text-darkBlue mb-3 group-hover:text-indigo transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-darkBlue/70 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="inline-flex items-center text-indigo font-semibold hover:text-purple transition-colors duration-300"
                  >
                    Read More
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2"
                    >
                      &rarr;
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </motion.div>
  )
}

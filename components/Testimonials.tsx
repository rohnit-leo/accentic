"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jane Doe",
    title: "CEO, Tech Innovations",
    quote:
      "Accentic Digital Solutions transformed our online presence. Their strategic approach to digital marketing delivered incredible results and exceeded our expectations.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    name: "John Smith",
    title: "Founder, Creative Hub",
    quote:
      "The team at Accentic is truly exceptional. Their graphics design work brought our brand to life, and their social media management significantly boosted our engagement.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    name: "Emily White",
    title: "Marketing Manager, Global Corp",
    quote:
      "We saw a remarkable increase in leads and conversions after partnering with Accentic for our Meta & Google Ads. Their expertise is unmatched!",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
  {
    name: "David Green",
    title: "Owner, Local Eatery",
    quote:
      "Thanks to Accentic's local SEO strategies, our business is now easily found by customers in our area. Highly recommend their services!",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-cream to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-indigo/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">What Our Clients Say</h2>
          <p className="text-xl text-darkBlue/70 max-w-3xl mx-auto">
            Hear directly from businesses that have experienced remarkable growth and success with Accentic Digital
            Solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect p-8 rounded-2xl shadow-lg border border-indigo/10 text-center relative overflow-hidden card-glow"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 text-indigo/20 opacity-50">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 10.5H17.25L15 15H12.75L15 10.5ZM6.75 10.5H10.5L8.25 15H6L8.25 10.5Z" />
                </svg>
              </div>

              <p className="text-darkBlue/80 leading-relaxed mb-6 italic relative z-10">"{testimonial.quote}"</p>

              <div className="flex justify-center mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <div className="flex flex-col items-center relative z-10">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover mb-3 border-2 border-indigo/20 shadow-md"
                />
                <h3 className="text-lg font-semibold text-darkBlue">{testimonial.name}</h3>
                <p className="text-sm text-indigo/80">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

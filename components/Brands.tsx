"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const brands = [
  { name: "Google", logo: "/placeholder.svg?height=60&width=150" },
  { name: "Meta", logo: "/placeholder.svg?height=60&width=150" },
  { name: "Shopify", logo: "/placeholder.svg?height=60&width=150" },
  { name: "WordPress", logo: "/placeholder.svg?height=60&width=150" },
  { name: "Mailchimp", logo: "/placeholder.svg?height=60&width=150" },
  { name: "HubSpot", logo: "/placeholder.svg?height=60&width=150" },
  { name: "Slack", logo: "/placeholder.svg?height=60&width=150" },
  { name: "Zoom", logo: "/placeholder.svg?height=60&width=150" },
]

export default function Brands() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Trusted by Leading Brands</h2>
          <p className="text-xl text-darkBlue/70 max-w-3xl mx-auto">
            We partner with industry leaders to deliver exceptional digital experiences and drive innovation.
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden py-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Duplicate brands to create a continuous loop */}
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="inline-flex items-center justify-center mx-8"
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={150}
                  height={60}
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

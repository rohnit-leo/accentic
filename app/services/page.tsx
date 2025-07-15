"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import { Palette, Code, TrendingUp, Smartphone, Search, Users, MapPin, Lightbulb, Rocket } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Connect with the right influencers to amplify your brand message and reach your target audience authentically. We manage campaigns from strategy to execution.",
    image: "/placeholder.svg?height=400&width=600",
    details: [
      "Influencer identification & vetting",
      "Campaign strategy & planning",
      "Content collaboration & approval",
      "Performance tracking & reporting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Meta & Google Ads Setup",
    description:
      "Professional setup and optimization of Facebook, Instagram, and Google advertising campaigns for maximum ROI. Drive targeted traffic and conversions.",
    image: "/placeholder.svg?height=400&width=600",
    details: [
      "Audience research & targeting",
      "Ad creative development",
      "Bid management & optimization",
      "A/B testing & performance analysis",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Dominate local search results and attract nearby customers with our comprehensive local SEO strategies. Get found by the right people at the right time.",
    image: "/placeholder.svg?height=400&width=600",
    details: [
      "Google My Business optimization",
      "Local citation building",
      "Local keyword research",
      "Online review management",
    ],
  },
  {
    icon: Palette,
    title: "Graphics Designing",
    description:
      "Eye-catching visual designs for your brand including logos, social media graphics, and marketing materials. Make a lasting impression.",
    image: "/placeholder.svg?height=400&width=600",
    details: [
      "Logo & brand identity design",
      "Social media graphics",
      "Brochures & marketing collateral",
      "Infographics & presentations",
    ],
  },
  {
    icon: Search,
    title: "Website SEO",
    description:
      "Comprehensive on-page and technical SEO optimization to improve your website's search engine rankings. Increase organic visibility and traffic.",
    image: "/placeholder.svg?height=400&width=600",
    details: [
      "Keyword research & mapping",
      "On-page optimization (meta, headings)",
      "Technical SEO audit & fixes",
      "Link building strategies",
    ],
  },
  {
    icon: Smartphone,
    title: "Google My Business Management",
    description:
      "Complete GMB optimization and management to enhance your local online presence and customer engagement. Maximize your local search potential.",
    image: "/placeholder.svg?height=400&width=600",
    details: [
      "Profile setup & optimization",
      "Post & offer management",
      "Q&A and review responses",
      "Performance insights & reporting",
    ],
  },
  {
    icon: Code,
    title: "Social Media Management",
    description:
      "Full-service social media management including content creation, posting, and community engagement across all platforms. Build a strong online community.",
    image: "/placeholder.svg?height=400&width=600",
    details: [
      "Content strategy & calendar",
      "Daily posting & scheduling",
      "Community engagement & moderation",
      "Performance analytics & reporting",
    ],
  },
  {
    icon: Lightbulb,
    title: "Content Marketing",
    description:
      "Develop and execute a content strategy that attracts, engages, and converts your target audience. From blog posts to video scripts.",
    image: "/placeholder.svg?height=400&width=600",
    details: [
      "Blog post writing & optimization",
      "Video script creation",
      "E-book & whitepaper development",
      "Content distribution strategies",
    ],
  },
  {
    icon: Rocket,
    title: "Web Development",
    description:
      "Custom website development tailored to your business needs, from responsive designs to complex web applications. Build a powerful online presence.",
    image: "/placeholder.svg?height=400&width=600",
    details: [
      "Custom website design & development",
      "E-commerce solutions",
      "CMS integration (WordPress, Shopify)",
      "Website maintenance & support",
    ],
  },
]

export default function Services() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">Our Services</h1>
            <p className="text-xl text-darkBlue/70 leading-relaxed mb-8">
              Comprehensive digital solutions designed to elevate your brand and drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group glass-effect p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-indigo/10 relative overflow-hidden card-glow hover:card-glow-hover"
              >
                {/* Background Image */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={120}
                    height={120}
                    className="w-20 h-20 object-contain"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300 relative z-10"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-darkBlue mb-4 group-hover:text-indigo transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>

                <p className="text-darkBlue/70 leading-relaxed mb-6 relative z-10">{service.description}</p>

                <ul className="space-y-2 relative z-10">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-darkBlue/80">
                      <div className="w-1.5 h-1.5 bg-cyan rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
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

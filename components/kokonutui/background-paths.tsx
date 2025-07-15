"use client"

import type React from "react"
import { motion } from "framer-motion"

interface BackgroundPathsProps {
  className?: string
  pathColor?: string
  pathOpacity?: number
  numPaths?: number
  animationDuration?: number
  animationDelayMultiplier?: number
}

const BackgroundPaths: React.FC<BackgroundPathsProps> = ({
  className = "",
  pathColor = "currentColor",
  pathOpacity = 0.05,
  numPaths = 20,
  animationDuration = 15,
  animationDelayMultiplier = 0.05,
}) => {
  const paths = Array.from({ length: numPaths }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5} -${189 + i * 6}C-${380 - i * 5} -${189 + i * 6} -${312 - i * 5} ${216 - i * 6} ${152 - i * 5} ${343 - i * 6}C${616 - i * 5} ${470 - i * 6} ${684 - i * 5} ${875 - i * 6} ${684 - i * 5} ${875 - i * 6}`,
    width: 0.5 + i * 0.02,
  }))

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={pathColor}
            strokeWidth={path.width}
            strokeOpacity={pathOpacity + path.id * 0.005}
            initial={{ pathLength: 0.5, opacity: 0.1 }}
            animate={{
              pathLength: 1,
              opacity: [pathOpacity, pathOpacity * 1.5, pathOpacity],
            }}
            transition={{
              duration: animationDuration + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: path.id * animationDelayMultiplier,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default BackgroundPaths

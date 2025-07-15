"use client"

import type React from "react"
import { motion } from "framer-motion"

interface FlowingLinesBackgroundProps {
  className?: string
  lineColor?: string
  lineOpacity?: number
  numLines?: number
  animationDuration?: number
}

const FlowingLinesBackground: React.FC<FlowingLinesBackgroundProps> = ({
  className = "",
  lineColor = "currentColor",
  lineOpacity = 0.05,
  numLines = 15,
  animationDuration = 20,
}) => {
  const lines = Array.from({ length: numLines }, (_, i) => ({
    id: i,
    yOffset: i * (100 / numLines), // Distribute lines vertically
    delay: i * (animationDuration / numLines / 2), // Stagger animation
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute w-full h-px"
          style={{
            top: `${line.yOffset}%`,
            backgroundColor: lineColor,
            opacity: lineOpacity,
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: animationDuration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: line.delay,
          }}
        />
      ))}
    </div>
  )
}

export default FlowingLinesBackground

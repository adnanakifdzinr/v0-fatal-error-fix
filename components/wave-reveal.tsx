"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function WaveReveal() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[99999] bg-black pointer-events-auto"
        >
          {/* Wave effect using SVG */}
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Animated wave paths */}
            <motion.path
              d="M0,400 Q300,200 600,400 T1200,400 L1200,0 L0,0 Z"
              fill="black"
              initial={{ d: "M0,800 Q300,600 600,800 T1200,800 L1200,0 L0,0 Z" }}
              animate={{ d: "M0,400 Q300,200 600,400 T1200,400 L1200,0 L0,0 Z" }}
              transition={{
                duration: 1.4,
                ease: [0.76, 0, 0.24, 1],
              }}
              filter="url(#gooey)"
            />

            <motion.path
              d="M0,500 Q300,300 600,500 T1200,500 L1200,0 L0,0 Z"
              fill="black"
              initial={{ d: "M0,900 Q300,700 600,900 T1200,900 L1200,0 L0,0 Z" }}
              animate={{ d: "M0,500 Q300,300 600,500 T1200,500 L1200,0 L0,0 Z" }}
              transition={{
                duration: 1.6,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.1,
              }}
              filter="url(#gooey)"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

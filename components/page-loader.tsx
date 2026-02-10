"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface PageLoaderProps {
  children: React.ReactNode
  duration?: number
}

export function PageLoader({ children, duration = 500 }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, Math.max(duration - 100, 50))

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(timer)
    }
  }, [duration])

  return (
    <>
      {/* Loading Animation */}
      {isLoading && (
        <div
          className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-300 ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-10 h-10">
              <div
                className="absolute inset-0 rounded-full border-2 border-black/20 border-t-black animate-spin"
                style={{ animationDuration: "0.8s" }}
              />
              <div className="absolute inset-1.5 rounded-full border border-black/10" />
            </div>
          </div>
        </div>
      )}

      {/* Page Content with improved entrance */}
      <div
        className={`transition-all duration-500 ease-out ${
          isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {children}
      </div>
    </>
  )
}

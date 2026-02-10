"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ServiceCards } from "./service-cards"

export function ServicesSection() {
  const servicesRef = useRef<HTMLHeadingElement>(null)
  const [isTextVisible, setIsTextVisible] = useState(false)

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes borderLeftToRight {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
      .cta-border-animate::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 2px;
        width: 0;
        background-color: white;
        animation: borderLeftToRight 0.6s ease-out forwards;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full bg-[#1A1A1A] py-20 md:py-20 lg:py-20 px-3 md:px-5 lg:px-8">
      <style>{`
        @keyframes slideDownText {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-reveal {
          opacity: 0;
          animation: slideDownText 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      <div className="max-w-full mx-auto">
        <div className="space-y-0 md:space-y-2 overflow-hidden -mt-2 md:mt-0" ref={servicesRef}>
          <h2 className="text-5xl lg:text-[64px] font-medium text-white mb-0 leading-none tracking-tighter">
            <span className="block text-reveal" style={{ animationDelay: isTextVisible ? "0.1s" : "0s" }}>
              How we can help you
            </span>
          </h2>
        </div>



        <ServiceCards />
      </div>
    </section>
  )
}

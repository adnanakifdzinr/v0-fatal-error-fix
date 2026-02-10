"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useScrollDirection } from "@/hooks/use-scroll-direction"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const isScrollDirectionUp = useScrollDirection()
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      setIsAnimating(true)
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 800)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sections = ["home", "work", "services", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const checkHeroAnimation = () => {
      const isAnimated = document.documentElement.getAttribute("data-hero-animated") === "true"
      setHeaderVisible(isAnimated)
    }

    checkHeroAnimation()
    const observer = new MutationObserver(checkHeroAnimation)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-hero-animated"] })

    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { href: "/", label: "HOME", section: "home" },
    { href: "/", label: "OUR WORK", section: "work" },
    { href: "/", label: "OUR SERVICES", section: "services" },
    { href: "/", label: "CONTACT US", section: "contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/#home") return pathname === "/"
    if (href.startsWith("/#")) return false
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-out ${scrollY >= 100 || isMenuOpen ? "bg-[#1A1A1A]" : "bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between px-3 md:px-5 lg:px-8 py-3 md:py-4 w-full">
          {/* Logo SVG - shows after 150px scroll */}
          <Link href="/" className={`h-[15px] md:h-[18px] w-auto transition-opacity duration-500 cursor-pointer ${scrollY >= 100 || isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <svg
              viewBox="0 0 1920 393.95"
              className="h-full w-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M1896.81,76.9h-.08c.03-.91.05-1.81.06-2.72.01.91.02,1.81.02,2.72Z" fill="white" />
                <path d="M1896.81,71.46c0,.91-.01,1.81-.02,2.72-.01-.91-.03-1.81-.06-2.72h.08Z" fill="white" />
              </g>
              <g>
                <g fill="white">
                  <path d="M10.25,9.97h87.68v295.21h172.77v78.34H10.25V9.97Z" />
                  <path d="M383.13,358.1c-27.74-16.54-48.71-38.93-62.91-67.17-14.21-28.24-21.3-59.73-21.3-94.49s7.1-66.25,21.3-94.49c14.2-28.24,35.17-50.63,62.91-67.17,27.73-16.54,60.82-24.81,99.25-24.81s71.51,8.27,99.25,24.81c27.73,16.54,48.7,38.93,62.91,67.17,14.2,28.24,21.3,59.74,21.3,94.49s-7.1,66.25-21.3,94.49c-14.21,28.24-35.17,50.63-62.91,67.17-27.74,16.54-60.83,24.81-99.25,24.81s-71.52-8.27-99.25-24.81ZM410.7,276.9c15.7,20.89,39.6,31.33,71.68,31.33s55.97-10.44,71.68-31.33c15.7-20.88,23.56-47.7,23.56-80.45s-7.86-59.56-23.56-80.45c-15.71-20.88-39.6-31.33-71.68-31.33s-55.98,10.45-71.68,31.33c-15.71,20.89-23.56,47.71-23.56,80.45s7.85,59.57,23.56,80.45Z" />
                  <path d="M700.8,313.49l193-226.73-94.43,1.56h-92.35V9.97h301.44v67.45l-196.12,229.32,98.06-1.56h100.65v78.34h-310.26v-70.04Z" />
                  <path d="M1066.13,9.97h87.68v373.56h-87.68V9.97Z" />
                  <path d="M1292.93,132.93v250.6h-84.05V9.97h94.95l148.39,251.63V9.97h84.05v373.56h-94.95l-148.39-250.6Z" />
                  <path d="M1591.33,9.97h175.57c45.01,0,78.78,10.22,101.29,30.65,22.51,20.44,33.76,47.62,33.76,81.55,0,19.05-5.02,36.28-15.06,51.69-10.05,15.41-53.78,37.62-81.72,32.44,15.58,7.62,47.78,5.83,74.71,36.91,9.44,10.9,12.9,26.67,15.32,43.63l14.54,97.14h-89.86l-12.47-84.15c-2.78-18.7-8.66-32.47-17.66-41.3-9.01-8.83-22.17-13.25-39.48-13.25h-71.16v138.69h-87.79V9.97ZM1751.32,178.27c20.08,0,35.14-3.98,45.19-11.95,10.04-7.96,15.06-20.26,15.06-36.88s-5.02-28.91-15.06-36.88c-10.05-7.96-25.11-11.95-45.19-11.95h-72.2v97.66h72.2Z" />
                </g>
              </g>
            </svg>
          </Link>

          {/* CTA Button and Hamburger */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className={`px-4 md:px-5 py-2 md:py-2.5 text-[14px] md:text-[14px] lg:text-[16px] font-medium rounded-full tracking-tighter transition-all duration-500 cursor-pointer ${scrollY >= 100 || isMenuOpen
                ? "text-white border border-white"
                : "text-black border border-black"
                }`}
            >
              Schedule a call
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7 group"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-5 h-3.5">
                <span
                  className={`absolute left-0 h-[1.9px] transition-all duration-700 ease-in-out ${isMenuOpen
                    ? `top-1/2 -translate-y-1/2 rotate-45 w-full bg-white`
                    : `top-0 w-full ${scrollY >= 100 ? "bg-white" : "bg-black"} group-hover:w-3/5`
                    }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1.9px] transition-all duration-700 ease-in-out ${isMenuOpen
                    ? `w-0 opacity-0 bg-white`
                    : `w-full opacity-100 ${scrollY >= 100 ? "bg-white" : "bg-black"} group-hover:w-4/5 group-hover:translate-x-1`
                    }`}
                />
                <span
                  className={`absolute left-0 h-[1.9px] transition-all duration-700 ease-in-out ${isMenuOpen
                    ? `bottom-1/2 translate-y-1/2 -rotate-45 w-full bg-white`
                    : `bottom-0 w-full ${scrollY >= 100 ? "bg-white" : "bg-black"} group-hover:w-2/5`
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 overflow-hidden ${isAnimating || isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Background curtain panels */}
        <div className="absolute inset-0 flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`flex-1 bg-[#1A1A1A] transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? "scale-y-100 origin-bottom" : "scale-y-0 origin-top"}`}
              style={{
                transitionDuration: "1500ms",
                transitionDelay: isMenuOpen ? `${i * 50}ms` : `${(4 - i) * 30}ms`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative h-full flex flex-col justify-between items-center px-3 md:px-5 lg:px-8 pt-20 pb-8 md:pb-10">
          {/* Main Navigation */}
          <nav className="flex-1 flex items-center justify-center">
            <ul className="flex flex-col gap-5 items-center text-center">
              {navLinks.map((link, index) => (
                <li key={link.label} className="overflow-hidden">
                  {link.section ? (
                    <button
                      onClick={() => {
                        setIsMenuOpen(false)
                        const element = document.getElementById(link.section)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className={`block text-[50px] md:text-[89px] lg:text-[101px] tracking-tight font-regular leading-[0.95] transition-colors duration-100 ease-in-out cursor-pointer ${activeSection === link.section ? "text-white" : "text-white/50 hover:text-white"}`}
                      style={{
                        transform: isMenuOpen ? "translateY(0)" : "translateY(120%)",
                        opacity: isMenuOpen ? 1 : 0,
                        transitionDuration: "1500ms",
                        transitionDelay: isMenuOpen ? `${400 + index * 80}ms` : `${(navLinks.length - index) * 40}ms`,
                        transitionProperty: "transform, opacity",
                      }}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block text-[50px] md:text-[89px] lg:text-[101px] tracking-tight font-regular leading-[0.95] transition-colors duration-100 ease-in-out ${activeSection === link.section || (link.href === "/" && pathname === "/") ? "text-white" : "text-white/50 hover:text-white"}`}
                      style={{
                        transform: isMenuOpen ? "translateY(0)" : "translateY(120%)",
                        opacity: isMenuOpen ? 1 : 0,
                        transitionDuration: "1500ms",
                        transitionDelay: isMenuOpen ? `${400 + index * 80}ms` : `${(navLinks.length - index) * 40}ms`,
                        transitionProperty: "transform, opacity",
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section - Social links */}
          <div className="flex items-center justify-center w-full">
            <div
              className="flex flex-row items-center gap-6 md:gap-5"
              style={{
                transform: isMenuOpen ? "translateY(0)" : "translateY(100%)",
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: isMenuOpen ? "1500ms" : "0ms",
              }}
            >
              <a
                href="https://instagram.com/lozinr.design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[16px] font-medium tracking-tight"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/lozinr.design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[16px] font-medium tracking-tight"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`${headerVisible ? "h-[40px] md:h-[48px]" : "h-0"}`} />
    </>
  )
}

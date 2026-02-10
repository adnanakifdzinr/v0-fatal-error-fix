"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: string
  title: string
  category: string
  industry: string
  image: string
  slug: string
  tags?: string[]
  year?: string
  services?: string
  bgColor?: string
  textColor?: string
}

const projects: Project[] = [

  {
    id: "1",
    title: "KRINK",
    category: "Branding & Packaging",
    image: "https://simontype.com/wp-content/uploads/2026/02/KRINK-08.jpeg",
    slug: "krink",
  },
  {
    id: "2",
    title: "NO",
    category: "Branding & Packaging",
    industry: "FOOD & BEVERAGE",
    image: "https://bq45eawil9xlp5ci.public.blob.vercel-storage.com/Luvena01.jpg",
    slug: "luvena",
    tags: ["Pizza", "Food", "Packaging"],
    year: "2025",
    services: "Logo Design",
    bgColor: "bg-[#e72224]",
    textColor: "text-white",
  },
  {
    id: "3",
    title: "NO",
    category: "Branding & Packaging",
    industry: "FOOD & BEVERAGE",
    image: "https://bq45eawil9xlp5ci.public.blob.vercel-storage.com/Luvena01.jpg",
    slug: "luvena",
    tags: ["Pizza", "Food", "Packaging"],
    year: "2025",
    services: "Logo Design",
    bgColor: "bg-[#e72224]",
    textColor: "text-white",
  },
  {
    id: "4",
    title: "NO",
    category: "Branding & Packaging",
    industry: "FOOD & BEVERAGE",
    image: "https://bq45eawil9xlp5ci.public.blob.vercel-storage.com/Luvena01.jpg",
    slug: "luvena",
    tags: ["Pizza", "Food", "Packaging"],
    year: "2025",
    services: "Logo Design",
    bgColor: "bg-[#e72224]",
    textColor: "text-white",
  },

]

export function ProjectThumbnails() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectId = entry.target.getAttribute("data-project-id")
          if (projectId) {
            setVisibleCards((prev) => new Set([...prev, projectId]))
          }
        }
      })
    }, observerOptions)

    Object.values(cardRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#1A1A1A] text-secondary">
      <style>{`
        @keyframes slideUpBounce {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          50% {
            opacity: 1;
          }
          65% {
            transform: translateY(-3px);
          }
          75% {
            transform: translateY(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .arrow-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 9999px;
          background: white;
          color: black;
          margin-top: -8px;
          transform: rotate(-30deg);
        }

        @media (min-width: 768px) {
          .arrow-icon {
            width: 3.5rem;
            height: 3.5rem;
          }
        }

        .arrow-svg {
          width: 1.5rem;
          height: 1.5rem;
          transition: transform 0.5s cubic-bezier(0.33, 0, 0.2, 1);
        }

        @media (min-width: 768px) {
          .arrow-svg {
            width: 2.5rem;
            height: 2.5rem;
          }
        }

        .project-card {
          opacity: 1;
          transform: translateY(0px);
          will-change: transform, opacity;
        }

        .project-card:hover .arrow-svg {
          transform: rotate(30deg);
        }
      `}</style>

      {/* Section Title */}
      <div className="px-3 md:px-5 lg:px-8 py-8 md:py-12 lg:py-16">
        <h2 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-tighter text-white">
          Our Work
        </h2>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-3 md:px-5 lg:px-8 pb-8 md:pb-12 lg:pb-16">
        {projects.map((project, index) => {
          const isVisible = visibleCards.has(project.id)
          return (
            <div
              key={project.id}
              className="bg-transparent flex flex-col"
              ref={(el) => { if (el) cardRefs.current[project.id] = el }}
              data-project-id={project.id}
            >
              <Link href={`/gallery/${project.slug}`} className="w-full flex-1 flex flex-col">
                <div
                  className={`project-card cursor-pointer w-full flex flex-col h-full ${isVisible ? "in-view" : ""}`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden bg-gray-200">
                    <Image
                      src={project.image || "/placeholder.jpg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>

                  {/* Title Section */}
                  <div className="bg-transparent text-white p-4 sm:p-6 md:p-5 lg:p-6 w-full flex flex-col items-center justify-center text-center">
                    {/* Title */}
                    <h3 className="text-[24px] sm:text-[32px] md:text-[28px] lg:text-[36px] font-medium leading-tight tracking-tighter uppercase mb-0">
                      {project.title}
                    </h3>
                    {/* Description/Category */}
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] font-medium tracking-tight">
                      {project.category}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

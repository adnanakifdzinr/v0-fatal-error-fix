'use client'

import Image from 'next/image'
import Link from 'next/link'

export function AboutUsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Portrait Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/images/demo.jpg"
              alt="Team Member"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col space-y-6">
            {/* Name and Role */}
            <div>
              <h3 className="text-4xl md:text-5xl font-medium text-black mb-2">
                Adnan Akif
              </h3>
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                Creative Director & Founder
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Adnan helps founders and growing businesses build distinctive brands through strategy, identity design, and clear positioning systems. His work focuses on making brands look premium, think strategically, and communicate with purpose — both online and across real-world touchpoints.

              He is the founder of Lozinr, a branding agency focused on brand strategy and visual identity. He works with startups, creators, and small businesses across different industries, helping them define their voice, sharpen their message, and build cohesive brand experiences that stand out in competitive markets. His core belief is simple: strong brands are built through clarity, consistency, and bold differentiation.

              Adnan regularly shares branding insights, case studies, and behind-the-scenes processes across social platforms, where he documents his approach to identity design, brand systems, and creative thinking.

              His practice combines structured brand strategy with modern visual execution to create brands that are not only attractive — but usable, scalable, and memorable.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8">
              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-500 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="currentColor" opacity="0.1" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-500 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-500 transition-colors duration-200 hover:scale-110 transform"
                aria-label="YouTube"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

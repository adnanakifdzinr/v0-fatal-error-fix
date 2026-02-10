'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function BrandClaritySection() {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* Top Text Section */}
        <div className="mb-12 md:mb-16 lg:mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-[45px] text-black font-medium leading-tight tracking-tighter">
            When your brand is clear,
            <br />
            everything else moves faster.
          </h2>
        </div>

        {/* Mobile Image - appears below headline */}
        <div className="md:hidden w-full relative h-80 mb-8 flex flex-col items-center">
          <Image
            src="/images/trade-org-mockup.png"
            alt="Trade Organization Website Design"
            fill
            className="object-contain"
            sizes="100vw"
          />
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
            Before
          </p>
        </div>

        {/* Bottom Section with 70/30 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Side - 70% Text Content */}
          <div className="w-full md:col-span-7 space-y-6">
            <p className="text-base md:text-lg lg:text-[22px] text-foreground leading-relaxed">
              Every strong brand starts with clarity. We begin by understanding your audience, story, personality, and offer — so the foundation is strategically aligned from day one. When these elements connect, your brand becomes distinctive and unmistakable.

              From there, we build your strategy, messaging, and visual identity into one cohesive system — designed to communicate with confidence and consistency across every touchpoint.

              The result is a premium brand that resonates deeply and performs in the real world.
            </p>

            <p className="text-base md:text-lg lg:text-[22px] text-foreground leading-relaxed">

              Schedule a call to see if we’re the right fit to work together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/pricing"
                className="px-8 py-1 rounded-full lg:text-[16px] font-medium border-2 border-[#1A1A1A] bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Our Prices
              </Link>
              <button
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="px-8 py-3 rounded-full lg:text-[16px] font-medium bg-[#1A1A1A] text-white hover:bg-black transition-colors cursor-pointer"
              >
                Schedule A Call
              </button>
            </div>
          </div>

          {/* Right Side - 30% Image (Desktop only) */}
          <div className="hidden md:flex w-full md:col-span-3 relative h-96 flex-col items-center md:items-stretch md:h-full">
            <Image
              src="/images/trade-org-mockup.png"
              alt="Trade Organization Website Design"
              fill
              className="object-contain"
              sizes="30vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

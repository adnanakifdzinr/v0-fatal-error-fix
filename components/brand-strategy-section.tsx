'use client'

import Image from 'next/image'
import Link from 'next/link'

export function BrandStrategySection() {
  return (
    <section className="w-full bg-[#1A1A1A] transition-colors duration-300 py-16 md:py-24 lg:py-32 px-3 md:px-5 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* Top Text Section */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-[45px] font-medium text-white tracking-tight leading-tight">
            We are a Brand Strategy & Identity studio focused on building premium, high-impact brands for ambitious founders.
          </h2>
        </div>

        {/* Bottom Section: Image and Text */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-8 lg:gap-12">
          {/* Left Column - Image (30% on desktop, 100% on mobile) */}
          <div className="md:col-span-3 flex items-start">
            <div className="w-full relative aspect-[3/4] md:aspect-auto md:h-96">
              <Image
                src="/images/demo.jpg"
                alt="Brand Strategy Design"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>
          </div>

          {/* Right Column - Text (70% on desktop, 100% on mobile) */}
          <div className="md:col-span-7 flex flex-col justify-start gap-6 md:gap-8">
            <p className="text-lg md:text-xl lg:text-[28px] font-regular text-white leading-tight tracking-tight">
              Through strategy, positioning, and identity systems, we bring clarity and structure to your brand — helping you attract better clients, increase perceived value, and scale with confidence.
            </p>

            <p className="text-lg md:text-xl lg:text-[28px] font-regular text-white leading-tight tracking-tight">
              We work with founders who think big — and expect their brand to do the same.
            </p>


          </div>
        </div>
      </div>
    </section>
  )
}

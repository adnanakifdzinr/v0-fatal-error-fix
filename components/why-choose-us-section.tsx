'use client'

import Image from 'next/image'

export function WhyChooseUsSection() {
  const processes = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your business, audience, competitors, and goals through structured discovery sessions and research. This gives us a clear diagnostic view of where your brand stands and where it should go.',
      image: '/images/process-discovery.jpg',
    },
    {
      step: '02',
      title: 'Strategy & Positioning',
      description: 'We define your positioning, value proposition, brand personality, and messaging framework. This strategic layer ensures your brand is differentiated, relevant, and aligned with market opportunity.',
      image: '/images/process-strategy.png',
    },
    {
      step: '03',
      title: 'Identity System',
      description: 'We design a scalable brand identity system — logo architecture, color and typography systems, and core visual elements — built for consistency across every application.',
      image: '/images/process-identity.jpg',
    },
    {
      step: '04',
      title: 'Visual Direction',
      description: 'We establish your visual language and art direction — including imagery style, layout principles, and graphic motifs — so your brand feels cohesive and recognizable everywhere.',
      image: '/images/process-visual.jpg',
    },
    {
      step: '05',
      title: 'Digital Experience',
      description: 'We translate the brand into digital touchpoints through UI direction, social templates, and digital asset systems — ensuring a consistent and high-impact online presence.',
      image: '/images/process-digital.jpg',
    }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <div className="mb-1 md:mb-1">
          <h2 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-black font-medium leading-tighter tracking-tight">
            Want to work with us?
          </h2>
        </div>

        {/* Subheading */}
        <div className="mb-16 md:mb-20">
          <p className="text-lg md:text-xl lg:text-[22px] text-gray-600 font-medium">
            Here's our branding & design process
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {processes.map((process, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Side - Step Number, Title, Image */}
              <div className="flex flex-col space-y-6">
                {/* Step and Title */}
                <div>
                  <p className="text-sm md:text-base lg:text-[18px] text-black font-medium mb-2 tracking-tight">
                    Step {process.step}
                  </p>
                  <h3 className="text-3xl md:text-4xl lg:text-[40px] text-black font-medium tracking-tight">
                    {process.title}
                  </h3>
                </div>

                {/* Image for Mobile and Desktop */}
                <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={process.image || "/placeholder.svg"}
                    alt={process.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right Side - Description */}
              <div className="flex flex-col justify-start mt-25">
                <p className="text-base md:text-lg lg:text-[18px] text-gray-700 leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

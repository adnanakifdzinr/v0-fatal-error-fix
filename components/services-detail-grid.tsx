import { use, client } from 'react';

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  image: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Brand Strategy",
    description:
      "We define your brand’s purpose, positioning, and voice to ensure every decision is intentional and aligned. Our strategy provides clarity, helping your brand stand out and resonate with the right audience.",
    features: [
      "Brand discovery & research",
      "Moodboard and creative direction",
      "Typography and symbol design",
      "Icon and wordmark variants",
      "Usage guidelines and file export",
      "Logo animation (optional)",
    ],
    image: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Visa%20Card.jpg",
  },
  {
    id: 2,
    title: "Brand Identity System",
    description:
      "We design a flexible identity system that includes logos, color palettes, typography, and guidelines — making your brand consistent, professional, and scalable across all platforms.",
    features: [
      "Brand strategy and positioning",
      "Visual identity system",
      "Color palette and typography",
      "Brand guidelines documentation",
      "Collateral design templates",
      "Brand voice and messaging",
    ],
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2007.jpg",
  },
  {
    id: 3,
    title: "Visual Language & Direction",
    description:
      "We create a cohesive visual language — including photography, illustration, layouts, and composition — so your brand is instantly recognizable and visually engaging.",
    features: [
      "Brand strategy and positioning",
      "Visual identity system",
      "Color palette and typography",
      "Brand guidelines documentation",
      "Collateral design templates",
      "Brand voice and messaging",
    ],
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2007.jpg",
  },
  {
    id: 4,
    title: "Digital Brand Experience",
    description:
      "We bring your brand to life online through intuitive, modern, and conversion-focused digital experiences — from website UI to social media and content templates.",
    features: [
      "Package concept development",
      "Structural design planning",
      "Graphic design and layout",
      "Material and finish selection",
      "Production-ready files",
      "Brand consistency application",
    ],
    image: "/packaging-design.jpg",
  },
]

function TypingText({ text }: { text: string }) {
  return <span>{text}</span>
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-[28px] md:text-[35px] lg:text-[45px] font-medium tracking-tight text-chart-5 whitespace-nowrap">
          {String(service.id).padStart(2, "0")}.
        </span>
        <h2 className="text-[28px] md:text-[35px] lg:text-[45px] uppercase tracking-tighter text-chart-5 font-medium">
          <TypingText text={service.title} />
        </h2>
      </div>

      <p className="text-[16px] md:text-[18px] leading-relaxed tracking-tighter text-chart-5 mb-8">
        {service.description}
      </p>

      <ul className="divide-y divide-[#888] flex-1">
        {service.features.map((feature, index) => (
          <li key={index} className="text-[16px] md:text-[24px] tracking-tighter text-chart-5 py-3 md:py-4">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ServicesDetailGrid() {
  return (
    <div className="bg-background text-secondary">
      {/* Mobile Layout - Stack with z-index */}
      <div className="md:hidden">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="sticky top-0 bg-background px-3 pt-1 min-h-screen flex items-center"
            style={{ zIndex: index }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      {/* Desktop Layout - First Section 01 & 02 (Sticky) */}
      <div className="hidden md:block">
        <div className="sticky top-0 z-0 bg-background px-3 md:px-5 lg:px-8 py-12 min-h-screen flex items-center">
          <div className="grid grid-cols-2 gap-16 lg:gap-20 w-full">
            {services.slice(0, 2).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Desktop Layout - Second Section 03 & 04 (Overlay) */}
        <div className="relative z-10 bg-background px-3 md:px-5 lg:px-8 py-12 min-h-screen flex items-center">
          <div className="grid grid-cols-2 gap-16 lg:gap-20 w-full">
            {services.slice(2, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

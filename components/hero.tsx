"use client"

import { useRef } from "react"

export function Hero() {
  const heroRef = useRef(null)
  const svgContainerRef = useRef(null)

  return (
    <section 
      className="w-full sticky top-0 bg-background transition-colors duration-300 z-0" 
      ref={heroRef}
    >
      <style>{`
        .cta-buttoon {
          position: relative;
          overflow: hidden;
          background: transparent;
          color: black;
          padding: 12px 3px;
          z-index: 1;
        }

        .cta-buttoon::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: black;
          transition: width 0.4s cubic-bezier(0.33, 0, 0.2, 1);
          z-index: -1;
        }

        .cta-buttoon::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          opacity: 0;
          z-index: -1;
        }

        .cta-buttoon:hover::before {
          width: 100%;
        }

        @keyframes shimmerWave {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .cta-buttoon:hover::after {
          animation: shimmerWave 0.6s ease-in-out;
        }

        .cta-buttoon:hover {
          color: white;
        }

        .cta-text-wrapper {
          position: relative;
          z-index: 2;
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
        }

        .cta-arrow {
          display: inline-block;
          width: 1.2em;
          height: 1.2em;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.4s cubic-bezier(0.33, 0, 0.2, 1);
        }

        .cta-buttoon:hover .cta-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      {/* Unified Hero for all devices */}
      <div className="flex pt-90 md:pt-70 lg:pt-70 pb-80 md:pb-90 lg:pb-100 items-center justify-between overflow-hidden w-full" ref={svgContainerRef}>
        <div className="w-full overflow-visible origin-center px-3 md:px-5 lg:px-8">
          <h1 className="text-[42px] md:text-[80px] lg:text-[120px] xl:text-[160px] 2xl:text-[196px] font-medium text-black leading-[0.9] sm:leading-[0.85] md:leading-[0.8] tracking-tighter text-left sm:text-left w-full break-words">
            Brands,
            <br />
            built with intention.
          </h1>
        </div>
      </div>
    </section>
  )
}

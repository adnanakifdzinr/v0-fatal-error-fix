"use client"

import type React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    company: "",
    services: {
      logoDesign: false,
      brandIdentity: false,
      webDesign: false,
    },
    message: "",
  })

  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (service: keyof typeof formData.services) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please fill in all required fields")
      return
    }

    const hasSelectedService = Object.values(formData.services).some((value) => value === true)
    if (!hasSelectedService) {
      alert("Please select at least one service")
      return
    }

    const formElement = e.currentTarget
    const formDataObj = new FormData(formElement)

    // Add services to the form data
    const selectedServices = Object.entries(formData.services)
      .filter(([, isSelected]) => isSelected)
      .map(([service]) => {
        if (service === "logoDesign") return "Logo Design"
        if (service === "brandIdentity") return "Brand Identity"
        if (service === "webDesign") return "Web Design"
        return service
      })

    formDataObj.append("services", selectedServices.join(", "))

    fetch("https://formspree.io/f/mblnejjn", {
      method: "POST",
      body: formDataObj,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setShowSuccess(true)
          setFormData({
            name: "",
            email: "",
            location: "",
            company: "",
            services: {
              logoDesign: false,
              brandIdentity: false,
              webDesign: false,
            },
            message: "",
          })
        }
      })
      .catch((error) => console.error("Form submission error:", error))
  }

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white transition-colors duration-300">
      {/* Divider */}
      <div className="w-full h-px bg-white/10" />

      {/* Main Footer Content */}
      <div className="w-full px-3 lg:px-8 py-16 lg:py-25">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16">
          {/* Left Column - Schedule a Chat */}
          <div className="flex flex-col justify-start">
            <h2 className="text-[36px] font-regular text-white tracking-tighter mb-6 leading-tight">
              Schedule a chat
            </h2>
            <p className="text-base md:text-lg lg:text-[18px] text-white/80 mb-8 leading-tight">
              Ready to bring your vision to life? Let's talk about your project and how we can help you create something extraordinary.
            </p>
            <div className="flex flex-col gap-3 w-fit">
              <Link
                href="https://wa.me/016151910614"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-2 font-medium lg:text-[16px] rounded-full hover:bg-gray-100 transition-colors"
              >
                Call Now
              </Link>
              <Link
                href="mailto:lozinrcontact@gmail.com"
                className="inline-block bg-white text-black px-8 py-2 font-medium lg:text-[16px] rounded-full hover:bg-gray-100 transition-colors"
              >
                lozinrcontact@gmail.com
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            {showSuccess && (
              <div className="mb-4 bg-[#0dce8d] text-black px-4 py-3 rounded-lg font-medium">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Us Title */}
              <div>
                <h3 className="text-[36px] font-medium text-white tracking-tight mb-6">
                  Contact Us
                </h3>
              </div>

              {/* Name and Email - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full h-auto bg-transparent text-white border-0 border-b border-white/30 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder-white/20 py-2 focus-visible:bg-transparent"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full h-auto bg-transparent text-white border-0 border-b border-white/30 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder-white/20 py-2 focus-visible:bg-transparent"
                />
              </div>

              {/* Location and Company - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full h-auto bg-transparent text-white border-0 border-b border-white/30 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder-white/20 py-2 focus-visible:bg-transparent"
                />
                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full h-auto bg-transparent text-white border-0 border-b border-white/30 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder-white/20 py-2 focus-visible:bg-transparent"
                />
              </div>

              {/* Services Checkboxes */}
              <div>
                <p className="text-white font-medium mb-4">What do you want our help with? *</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.logoDesign}
                      onChange={() => handleCheckboxChange("logoDesign")}
                      className="w-5 h-5 rounded bg-white/20 border border-white/50 cursor-pointer accent-white"
                    />
                    <span className="text-white">Logo Design</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.brandIdentity}
                      onChange={() => handleCheckboxChange("brandIdentity")}
                      className="w-5 h-5 rounded bg-white/20 border border-white/50 cursor-pointer accent-white"
                    />
                    <span className="text-white">Brand Identity</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.webDesign}
                      onChange={() => handleCheckboxChange("webDesign")}
                      className="w-5 h-5 rounded bg-white/20 border border-white/50 cursor-pointer accent-white"
                    />
                    <span className="text-white">Web Design</span>
                  </label>
                </div>
              </div>

              {/* Project Message */}
              <div>
                <p className="text-white font-medium mb-3">Tell us about your project *</p>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full h-20 text-white border-0 border-b border-white/30 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder-white/20 py-2 focus-visible:bg-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-white text-black font-medium py-5 text-base md:text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>


    </footer>
  )
}

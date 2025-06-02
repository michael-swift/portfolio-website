"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6 text-center">
          Thanks for reaching out! I&apos;ll get back to you soon.
        </div>
      ) : null}

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label htmlFor="firstName" className="block mb-2">
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border-neutral-200 h-12"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block mb-2">
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border-neutral-200 h-12"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border-neutral-200 h-12"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="border-neutral-200 min-h-[200px]"
        />
      </div>

      <div className="relative">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-transparent hover:bg-primary/10 text-black border border-neutral-200 rounded-none font-normal"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
        <div className="absolute right-0 top-0 h-12 w-16 border-l border-neutral-200 flex items-center justify-center">
          <ChevronRight size={16} />
        </div>
      </div>
    </form>
  )
}


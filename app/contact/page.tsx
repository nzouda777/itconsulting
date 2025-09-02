"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare, Code } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    link: "mailto:support@itcloudconsultings.com",
    description: "support@itcloudconsultings.com",
    action: "Send an email",
  },
  {
    icon: Phone,
    title: "Phone",
    link: "tel:+17065811963",
    description: "+1 (706) 581-1963",
    action: "Schedule a call",
  },
  {
    icon: Calendar,
    title: "Appointment",
    link: "https://calendly.com/itcloudconsultings-support/30min",
    description: "Free technical consultation",
    action: "Schedule an appointment", 
  },
  {
    icon: MessageSquare,
    title: "Chat",
    link: "https://wa.me/+17065811963",
    description: "Support technical in real time",
    action: "Start a conversation",
  },
]

const serviceTypes = [
  "Audit technical",
  "Web development",
  "Mobile application",
  "Cloud infrastructure",
  "Security & compliance",
  "Performance optimization",
  "Team training",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    urgency: "normal",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi (remplacer par vraie API)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)

    // Redirection vers la page de succès
    window.location.href = "/contact/success"
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 mt-24 pb-16 bg-gradient-to-tr from-second via-transparent to-transparent">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 font-mono">Contact</Badge> */}

            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">Let's start your project</h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Let's discuss your technical challenges and explore together the most suitable solutions for your objectives.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="py-16 bg-white" id="contact">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12 ">
          <div className="max-w-4xl mx-auto">
            <div className=" gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900">Contact form</CardTitle>
                    <p className="text-slate-600">
                      Fill out this form to receive a personalized response within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Full name *</label>
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@company.com"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Service concerned *</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          >
                            <option value="">Select a service</option>
                            {serviceTypes.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Estimated budget</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Select a range</option>
                            <option value="< 10k€">Less than 10k€</option>
                            <option value="10k€ - 25k€">10k€ - 25k€</option>
                            <option value="25k€ - 50k€">25k€ - 50k€</option>
                            <option value="50k€ - 100k€">50k€ - 100k€</option>
                            <option value="> 100k€">More than 100k€</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Urgency of the project</label>
                          <div className="flex space-x-4">
                            {[
                              { value: "low", label: "Not urgent" },
                              { value: "normal", label: "Normal" },
                              { value: "high", label: "Urgent" },
                            ].map((option) => (
                              <label key={option.value} className="flex items-center">
                                <input
                                  type="radio"
                                  name="urgency"
                                  value={option.value}
                                  checked={formData.urgency === option.value}
                                  onChange={handleInputChange}
                                  className="mr-2"
                                />
                                <span className="text-sm text-slate-700">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Project description *
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Describe your project, its objectives and technical constraints..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-second text-base py-3 hover:bg-second/80"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                              Sending in progress...
                            </>
                          ) : (
                            <>
                              Send my request
                              <Send className="ml-2 w-5 h-5" />
                            </>
                          )}
                        </Button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Message sent successfully!</h3>
                        <p className="text-slate-600 mb-6">
                          We will contact you within 24 hours to discuss your project.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                          Send another message
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Info */}

            </div>
          </div>
        </div>
      </section>
      {/* Contact Methods */}
      <section className="py-16">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12 ">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-second/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-6 h-6 text-second" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{method.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                    <Button variant="ghost" size="sm" className="text-second/80 hover:text-second hover:bg-second/10">
                    <Link href={method.link}>
                      {method.action}
                    </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}

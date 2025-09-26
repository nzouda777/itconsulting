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
import { useLocale } from "../../../hooks/useLocale"
import { useTranslation } from "../../../lib/i18n"
import Navigation from "@/components/Navigation"


// Translatable lists and methods are defined inside the component via i18n

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    budget: "",
    message: "",
    urgency: "normal",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // i18n
  const locale = useLocale()
  const { t } = useTranslation(locale)

  // Lists from translations
  const serviceTypes = t<string[]>("ContactPage.services") || []
  const urgencyOptions = t<Record<string, string>>("ContactPage.urgencyOptions") || {}
  const contactMethods = [
    {
      icon: Mail,
      title: t("ContactPage.methods.email.title"),
      link: "mailto:support@itcloudconsultings.com",
      description: t("ContactPage.methods.email.description"),
      action: t("ContactPage.methods.email.action"),
    },
    {
      icon: Phone,
      title: t("ContactPage.methods.phone.title"),
      link: "tel:+17065811963",
      description: t("ContactPage.methods.phone.description"),
      action: t("ContactPage.methods.phone.action"),
    },
    {
      icon: Calendar,
      title: t("ContactPage.methods.appointment.title"),
      link: "https://calendly.com/itcloudconsultings-support/30min",
      description: t("ContactPage.methods.appointment.description"),
      action: t("ContactPage.methods.appointment.action"),
    },
    {
      icon: MessageSquare,
      title: t("ContactPage.methods.chat.title"),
      link: "https://wa.me/+17065811963",
      description: t("ContactPage.methods.chat.description"),
      action: t("ContactPage.methods.chat.action"),
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi (remplacer par vraie API)
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    
    try {
      const response = await fetch("https://api.itcloudconsultings.com/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: `Message: ${formData.message}\nBudget: ${formData.budget}\nUrgency: ${formData.urgency}\nService: ${formData.service}`,
        }),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }
    } catch (error) {
      console.error("Error sending contact form:", error)
    }


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
      <Navigation  locale={locale}/>

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

            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">{t("ContactPage.heading")}</h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">{t("ContactPage.description")}</p>
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
                    <CardTitle className="text-2xl text-slate-900"> {t("ContactPage.form.title")} </CardTitle>
                    <p className="text-slate-600">
                      {t("ContactPage.form.subtitle")}
                    </p>
                  </CardHeader>
                  <CardContent>
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2"> {t("ContactPage.form.fields.nameLabel")} </label>
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder={t("ContactPage.form.fields.namePlaceholder")}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2"> {t("ContactPage.form.fields.emailLabel")} </label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder={t("ContactPage.form.fields.emailPlaceholder")}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2"> {t("ContactPage.form.fields.subjectLabel")} </label>
                          <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder={t("ContactPage.form.fields.subjectPlaceholder")}
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2"> {t("ContactPage.form.fields.serviceLabel")} </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          >
                            <option value="">{ t("ContactPage.servicesKey") }</option>
                            { serviceTypes.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2"> {t("ContactPage.form.fields.budgetLabel")} </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value=""> { t("ContactPage.form.fields.budgetPlaceholder") } </option>
                            <option value="< 10k€"> { t("ContactPage.form.fields.budgetOptions.lt10k") } </option>
                            <option value="10k€ - 25k€"> { t("ContactPage.form.fields.budgetOptions.b10_25k") } </option>
                            <option value="25k€ - 50k€"> { t("ContactPage.form.fields.budgetOptions.b25_50k") } </option>
                            <option value="50k€ - 100k€"> { t("ContactPage.form.fields.budgetOptions.b50_100k") } </option>
                            <option value="> 100k€"> { t("ContactPage.form.fields.budgetOptions.gt100k") } </option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2"> { t("ContactPage.urgencyKey") } </label>
                          <div className="flex space-x-4">
                            {Object.entries(urgencyOptions).map(([key, value]) => (
                              <label key={key} className="flex items-center">
                                <input
                                  type="radio"
                                  name="urgency"
                                  value={key}
                                  checked={formData.urgency === key}
                                  onChange={handleInputChange}
                                  className="mr-2"
                                />
                                <span className="text-sm text-slate-700">{value}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            { t('ContactPage.projectDescriptionKey') }
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={ t('ContactPage.projectDescriptionPlaceholder') }
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
                              { t('ContactPage.processing') }
                            </>
                          ) : (
                            <>
                              { t('ContactPage.buttonLabel') }
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
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{ t('ContactPage.form.success.title ') }</h3>
                        <p className="text-slate-600 mb-6">
                          { t('ContactPage.form.success.description') }
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                          { t('ContactPage.form.success.button') }
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

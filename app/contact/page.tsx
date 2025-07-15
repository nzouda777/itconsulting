"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare, Code } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "contact@ITCloudConsultings.com",
    action: "Envoyer un email",
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "+33 1 23 45 67 89",
    action: "Programmer un appel",
  },
  {
    icon: Calendar,
    title: "Rendez-vous",
    description: "Consultation technique gratuite",
    action: "Réserver un créneau",
  },
  {
    icon: MessageSquare,
    title: "Chat",
    description: "Support technique en direct",
    action: "Démarrer une conversation",
  },
]

const serviceTypes = [
  "Audit technique",
  "Développement web",
  "Application mobile",
  "Infrastructure cloud",
  "Sécurité & conformité",
  "Optimisation performance",
  "Formation équipe",
  "Autre",
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
<<<<<<< HEAD
        <div className="container mx-auto px-6">
=======
        <div className="max-w-[98%] mx-auto px-6">
>>>>>>> 4fb5a3d (flipping card updates)
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 font-mono">Contact</Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">Démarrons Votre Projet</h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Discutons de vos défis techniques et explorons ensemble les solutions les plus adaptées à vos objectifs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
<<<<<<< HEAD
        <div className="container mx-auto px-6">
=======
        <div className="max-w-[98%] mx-auto px-6">
>>>>>>> 4fb5a3d (flipping card updates)
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
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{method.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
<<<<<<< HEAD
        <div className="container mx-auto px-6">
=======
        <div className="max-w-[98%] mx-auto px-6">
>>>>>>> 4fb5a3d (flipping card updates)
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900">Formulaire de Contact</CardTitle>
                    <p className="text-slate-600">
                      Remplissez ce formulaire pour recevoir une réponse personnalisée sous 24h.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Nom complet *</label>
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
                          <label className="block text-sm font-medium text-slate-700 mb-2">Entreprise</label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Nom de votre entreprise"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Service concerné *</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          >
                            <option value="">Sélectionnez un service</option>
                            {serviceTypes.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Budget estimé</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Sélectionnez une fourchette</option>
                            <option value="< 10k€">Moins de 10k€</option>
                            <option value="10k€ - 25k€">10k€ - 25k€</option>
                            <option value="25k€ - 50k€">25k€ - 50k€</option>
                            <option value="50k€ - 100k€">50k€ - 100k€</option>
                            <option value="> 100k€">Plus de 100k€</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Urgence du projet</label>
                          <div className="flex space-x-4">
                            {[
                              { value: "low", label: "Pas urgent" },
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
                            Description du projet *
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Décrivez votre projet, vos objectifs et vos contraintes techniques..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-slate-900 hover:bg-slate-800 text-lg py-3"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              Envoyer ma demande
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
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Message envoyé avec succès !</h3>
                        <p className="text-slate-600 mb-6">
                          Nous vous recontacterons sous 24h pour discuter de votre projet.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                          Envoyer un autre message
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Pourquoi Nous Choisir ?</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Code,
                        title: "Expertise Technique",
                        description: "15+ années d'expérience en développement et architecture système",
                      },
                      {
                        icon: Clock,
                        title: "Réactivité",
                        description: "Réponse sous 24h et support technique disponible",
                      },
                      {
                        icon: CheckCircle,
                        title: "Qualité Garantie",
                        description: "Code review, tests automatisés et documentation complète",
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-slate-700" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                          <p className="text-slate-600 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="border-0 bg-slate-50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-4">Informations Pratiques</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-slate-600" />
                        <span className="text-slate-600">Paris, France (Remote possible)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-slate-600" />
                        <span className="text-slate-600">Lun-Ven 9h-18h (CET)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-slate-600" />
                        <span className="text-slate-600">Réponse garantie sous 24h</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

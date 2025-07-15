"use client"

import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Shield, Cloud, ArrowRight } from "lucide-react"

const serviceCategories = [
  {
    title: "Développement",
    description: "Solutions logicielles sur mesure",
    icon: Code2,
    services: [
      {
        name: "Applications Web",
        description: "React, Next.js, Vue.js avec architecture moderne",
        technologies: ["TypeScript", "GraphQL", "Microservices"],
        pricing: "À partir de 15k€",
      },
      {
        name: "Applications Mobiles",
        description: "iOS, Android natif et cross-platform",
        technologies: ["React Native", "Flutter", "Swift/Kotlin"],
        pricing: "À partir de 20k€",
      },
      {
        name: "APIs & Backend",
        description: "Services robustes et scalables",
        technologies: ["Node.js", "Python", "Go", "Rust"],
        pricing: "À partir de 10k€",
      },
    ],
  },
  {
    title: "Infrastructure",
    description: "Cloud et DevOps de niveau entreprise",
    icon: Cloud,
    services: [
      {
        name: "Architecture Cloud",
        description: "Migration et optimisation multi-cloud",
        technologies: ["AWS", "Azure", "GCP", "Terraform"],
        pricing: "À partir de 25k€",
      },
      {
        name: "DevOps & CI/CD",
        description: "Automatisation complète du déploiement",
        technologies: ["Kubernetes", "Docker", "Jenkins", "GitLab"],
        pricing: "À partir de 12k€",
      },
      {
        name: "Monitoring & Observabilité",
        description: "Surveillance proactive des systèmes",
        technologies: ["Prometheus", "Grafana", "ELK Stack"],
        pricing: "À partir de 8k€",
      },
    ],
  },
  {
    title: "Sécurité",
    description: "Protection et conformité avancées",
    icon: Shield,
    services: [
      {
        name: "Audit de Sécurité",
        description: "Évaluation complète des vulnérabilités",
        technologies: ["OWASP", "Pentest", "Code Review"],
        pricing: "À partir de 5k€",
      },
      {
        name: "Implémentation Zero Trust",
        description: "Architecture de sécurité moderne",
        technologies: ["IAM", "MFA", "Network Segmentation"],
        pricing: "À partir de 18k€",
      },
      {
        name: "Conformité RGPD",
        description: "Mise en conformité réglementaire",
        technologies: ["Data Mapping", "Privacy by Design"],
        pricing: "À partir de 7k€",
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className=" flex items-center justify-center h-screen pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
<<<<<<< HEAD
        <div className="container mx-auto px-6">
=======
        <div className="max-w-[98%] mx-auto px-6">
>>>>>>> 4fb5a3d (flipping card updates)
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Services Techniques</Badge>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Expertise Technique
              <br />
              de Niveau Entreprise
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Solutions complètes de développement, infrastructure cloud et sécurité. Chaque projet est conçu pour la
              performance, la scalabilité et la maintenabilité.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-24">
<<<<<<< HEAD
        <div className="container mx-auto px-6">
=======
        <div className="max-w-[98%] mx-auto px-6">
>>>>>>> 4fb5a3d (flipping card updates)
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-24 last:mb-0"
            >
              <div className="flex items-center mb-12">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mr-6">
                  <category.icon className="w-8 h-8 text-slate-700" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{category.title}</h2>
                  <p className="text-lg text-slate-600">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-slate-900">{service.name}</CardTitle>
                        <p className="text-slate-600">{service.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-slate-100 text-slate-700 font-mono text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="text-2xl font-bold text-slate-900 mb-1">{service.pricing}</div>
                          <p className="text-sm text-slate-600">Devis personnalisé selon vos besoins</p>
                        </div>

                        <Button className="w-full bg-slate-900 hover:bg-slate-800">
                          Demander un Devis
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
<<<<<<< HEAD
        <div className="container mx-auto px-6">
=======
        <div className="max-w-[98%] mx-auto px-6">
>>>>>>> 4fb5a3d (flipping card updates)
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Méthodologie</Badge>
            <h2 className="text-4xl font-bold mb-6 gradient-text">Processus de Développement Agile</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une approche structurée garantissant qualité, délais et budget maîtrisés
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse & Audit",
                description: "Évaluation technique complète de l'existant et définition des objectifs",
              },
              {
                step: "02",
                title: "Architecture & Design",
                description: "Conception de l'architecture système et des interfaces utilisateur",
              },
              {
                step: "03",
                title: "Développement Itératif",
                description: "Implémentation par sprints avec validation continue",
              },
              {
                step: "04",
                title: "Déploiement & Support",
                description: "Mise en production sécurisée et maintenance évolutive",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-mono text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play, Code2, TrendingUp, Users, Award, Calendar } from "lucide-react"
import Image from "next/image"

const categories = ["Tous", "Web", "Mobile", "Cloud", "Sécurité", "IA/ML"]

const projects = [
  {
    id: 1,
    title: "Plateforme E-commerce Next-Gen",
    category: "Web",
    description:
      "Architecture microservices avec React, Node.js et Kubernetes. Performance optimisée avec 99.9% d'uptime.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Kubernetes", "AWS"],
    metrics: { users: "50K+", performance: "< 100ms", uptime: "99.9%" },
    year: "2024",
    client: "RetailTech Corp",
    duration: "8 mois",
    team: "6 développeurs",
    links: { demo: "#", github: "#", case: "#" },
  },
  {
    id: 2,
    title: "Application Mobile FinTech",
    category: "Mobile",
    description: "App bancaire sécurisée avec biométrie, transactions temps réel et conformité PCI DSS.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "TypeScript", "GraphQL", "MongoDB", "Docker"],
    metrics: { downloads: "100K+", rating: "4.8/5", transactions: "1M+/mois" },
    year: "2024",
    client: "FinanceSecure",
    duration: "12 mois",
    team: "8 développeurs",
    links: { demo: "#", github: "#", case: "#" },
  },
  {
    id: 3,
    title: "Infrastructure Cloud Multi-Région",
    category: "Cloud",
    description: "Migration complète vers AWS avec auto-scaling, monitoring avancé et disaster recovery.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["AWS", "Terraform", "Kubernetes", "Prometheus", "Grafana", "ELK"],
    metrics: { servers: "200+", regions: "3", availability: "99.99%" },
    year: "2023",
    client: "TechScale Inc",
    duration: "6 mois",
    team: "4 DevOps",
    links: { demo: "#", github: "#", case: "#" },
  },
  {
    id: 4,
    title: "Système de Sécurité Zero Trust",
    category: "Sécurité",
    description: "Implémentation complète d'une architecture Zero Trust avec IAM avancé et monitoring.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Okta", "Vault", "Istio", "Falco", "SIEM", "PKI"],
    metrics: { threats: "99.9% bloquées", compliance: "SOC2", incidents: "0 breach" },
    year: "2023",
    client: "SecureGov",
    duration: "10 mois",
    team: "5 experts sécurité",
    links: { demo: "#", github: "#", case: "#" },
  },
  {
    id: 5,
    title: "Plateforme IA de Recommandation",
    category: "IA/ML",
    description: "Système de recommandation ML avec traitement temps réel et A/B testing intégré.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "TensorFlow", "Kafka", "Spark", "MLflow", "Kubeflow"],
    metrics: { accuracy: "94%", latency: "< 50ms", revenue: "+35%" },
    year: "2024",
    client: "MediaStream",
    duration: "14 mois",
    team: "6 data scientists",
    links: { demo: "#", github: "#", case: "#" },
  },
  {
    id: 6,
    title: "Dashboard Analytics Temps Réel",
    category: "Web",
    description: "Interface de monitoring avec visualisations interactives et alertes intelligentes.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "D3.js", "WebSocket", "InfluxDB", "Go", "Docker"],
    metrics: { datapoints: "1M+/sec", users: "500+", dashboards: "50+" },
    year: "2023",
    client: "DataViz Pro",
    duration: "5 mois",
    team: "4 développeurs",
    links: { demo: "#", github: "#", case: "#" },
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    activeCategory === "Tous" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen font-sans">
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
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">
              Portfolio Technique
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">Projets & Réalisations</h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos projets les plus innovants, des architectures complexes aux solutions sur mesure qui
              transforment les entreprises.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { icon: Code2, value: "50+", label: "Projets livrés" },
                { icon: Users, value: "200K+", label: "Utilisateurs actifs" },
                { icon: TrendingUp, value: "99.9%", label: "Uptime moyen" },
                { icon: Award, value: "15+", label: "Technologies maîtrisées" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-2xl font-bold font-mono text-slate-900">{stat.value}</span>
                  </div>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b border-slate-200">
<<<<<<< HEAD
        <div className="container mx-auto px-6">
=======
        <div className="max-w-[98%] mx-auto px-6">
>>>>>>> 4fb5a3d (flipping card updates)
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
<<<<<<< HEAD
        <div className="container mx-auto px-6">
=======
        <div className="max-w-[98%] mx-auto px-6">
>>>>>>> 4fb5a3d (flipping card updates)
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-slate-700 font-mono text-xs">{project.category}</Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Demo
                          </Button>
                          <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                            <Github className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-500 font-mono">{project.year}</span>
                        <span className="text-sm text-slate-500">{project.client}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-slate-100 text-slate-700 font-mono text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-mono text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries(project.metrics)
                          .slice(0, 3)
                          .map(([key, value]) => (
                            <div key={key}>
                              <div className="text-sm font-bold text-slate-900 font-mono">{value}</div>
                              <div className="text-xs text-slate-500 capitalize">{key}</div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedProject.title}</h2>
                    <p className="text-slate-600">
                      {selectedProject.client} • {selectedProject.year}
                    </p>
                  </div>
                  <Badge className="bg-blue-50 text-blue-700 font-mono">{selectedProject.category}</Badge>
                </div>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{selectedProject.description}</p>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Durée du projet
                    </h4>
                    <p className="text-slate-600">{selectedProject.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Équipe
                    </h4>
                    <p className="text-slate-600">{selectedProject.team}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Résultats
                    </h4>
                    <div className="space-y-1">
                      {Object.entries(selectedProject.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-slate-600 capitalize">{key}:</span>
                          <span className="font-mono font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700 font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-slate-900 hover:bg-slate-800">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </Button>
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code source
                  </Button>
                  <Button variant="outline">Étude de cas complète</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

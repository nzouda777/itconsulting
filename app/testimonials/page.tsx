"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Award,
  TrendingUp,
  Users,
  Building,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "CTO",
    company: "FinanceSecure",
    industry: "Finance",
    location: "Paris, France",
    image: "/placeholder.svg?height=120&width=120",
    content:
      "TechConsultPro a complètement transformé notre infrastructure technique. Leur expertise en architecture cloud et leur approche méthodique nous ont permis de réduire nos coûts opérationnels de 40% tout en améliorant significativement nos performances.",
    rating: 5,
    project: "Migration Cloud & Sécurité",
    duration: "8 mois",
    results: ["40% de réduction des coûts", "99.9% d'uptime", "Conformité RGPD"],
    date: "2024-01-15",
    videoUrl: "#",
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    role: "Directeur Technique",
    company: "RetailTech Corp",
    industry: "E-commerce",
    location: "Lyon, France",
    image: "/placeholder.svg?height=120&width=120",
    content:
      "Une collaboration exceptionnelle avec une équipe qui maîtrise parfaitement les technologies modernes. Notre plateforme e-commerce gère maintenant 10 fois plus de trafic avec une stabilité parfaite.",
    rating: 5,
    project: "Plateforme E-commerce Next-Gen",
    duration: "12 mois",
    results: ["10x plus de trafic", "+35% de conversions", "< 100ms de latence"],
    date: "2024-02-20",
    videoUrl: "#",
  },
  {
    id: 3,
    name: "Sophie Chen",
    role: "CEO",
    company: "DataViz Pro",
    industry: "Analytics",
    location: "Marseille, France",
    image: "/placeholder.svg?height=120&width=120",
    content:
      "Leur capacité à traduire nos besoins métier complexes en solutions techniques innovantes est remarquable. Le dashboard analytics développé dépasse toutes nos attentes en termes de performance et d'ergonomie.",
    rating: 5,
    project: "Dashboard Analytics Temps Réel",
    duration: "6 mois",
    results: ["ROI immédiat", "1M+ datapoints/sec", "Interface intuitive"],
    date: "2023-12-10",
    videoUrl: "#",
  },
  {
    id: 4,
    name: "Thomas Leroy",
    role: "Head of Engineering",
    company: "MedTech Solutions",
    industry: "Santé",
    location: "Toulouse, France",
    image: "/placeholder.svg?height=120&width=120",
    content:
      "La migration de notre système legacy vers une architecture moderne s'est déroulée sans aucune interruption de service. L'équipe TechConsultPro a fait preuve d'un professionnalisme exemplaire.",
    rating: 5,
    project: "Modernisation Système Legacy",
    duration: "10 mois",
    results: ["0 interruption", "Formation équipes", "Architecture moderne"],
    date: "2023-11-05",
    videoUrl: null,
  },
  {
    id: 5,
    name: "Amélie Rousseau",
    role: "VP Technology",
    company: "GreenTech Innovations",
    industry: "Environnement",
    location: "Nantes, France",
    image: "/placeholder.svg?height=120&width=120",
    content:
      "L'audit de sécurité réalisé par TechConsultPro nous a permis d'identifier et de corriger des vulnérabilités critiques. Leur approche proactive a renforcé significativement notre posture sécuritaire.",
    rating: 5,
    project: "Audit Sécurité & Conformité",
    duration: "4 mois",
    results: ["Vulnérabilités corrigées", "Conformité ISO 27001", "Formation sécurité"],
    date: "2023-10-18",
    videoUrl: "#",
  },
  {
    id: 6,
    name: "Alexandre Moreau",
    role: "CTO",
    company: "LogiFlow",
    industry: "Logistique",
    location: "Bordeaux, France",
    image: "/placeholder.svg?height=120&width=120",
    content:
      "Le développement de notre application mobile a été un succès total. L'équipe a su créer une expérience utilisateur exceptionnelle tout en intégrant des fonctionnalités avancées.",
    rating: 5,
    project: "Application Mobile Logistique",
    duration: "7 mois",
    results: ["UX exceptionnelle", "Géolocalisation avancée", "Adoption immédiate"],
    date: "2023-09-22",
    videoUrl: null,
  },
]

const stats = [
  { value: "98%", label: "Satisfaction Client", icon: Award },
  { value: "50+", label: "Projets Réalisés", icon: TrendingUp },
  { value: "200K+", label: "Utilisateurs Impactés", icon: Users },
  { value: "15+", label: "Secteurs d'Activité", icon: Building },
]

export default function TestimonialsPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<(typeof testimonials)[0] | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentCarousel, setCurrentCarousel] = useState(0)

  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true })

  // Auto-play for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarousel((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen font-sans">
      <Header />

      {/* Section 1: Hero with Stats (Static) */}
      <section ref={heroRef} className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 font-mono text-sm">
              Témoignages Clients
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">La Confiance de Nos Clients</h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Découvrez comment nous avons transformé les défis techniques de nos clients en succès durables.
            </p>

            {/* Stats Grid */}
            <motion.div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-3">
                      <stat.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold font-mono text-slate-900">{stat.value}</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Featured Testimonial (Static) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-50 text-green-700 border-green-200 font-mono text-sm">
                Témoignage Vedette
              </Badge>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Success Story</h2>
            </div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-12">
                    <Quote className="w-12 h-12 text-blue-500/20 mb-6" />

                    <div className="flex mb-6">
                      {[...Array(testimonials[0].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-xl text-slate-700 leading-relaxed mb-8 italic">"{testimonials[0].content}"</p>

                    <div className="flex items-center mb-8">
                      <Image
                        src={testimonials[0].image || "/placeholder.svg"}
                        alt={testimonials[0].name}
                        width={60}
                        height={60}
                        className="w-15 h-15 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{testimonials[0].name}</h4>
                        <p className="text-slate-600">{testimonials[0].role}</p>
                        <p className="text-slate-500">{testimonials[0].company}</p>
                      </div>
                    </div>

                    <Badge className="bg-blue-50 text-blue-700 font-mono text-sm">{testimonials[0].project}</Badge>
                  </div>

                  {/* Results */}
                  <div className="bg-slate-50 p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Résultats Obtenus</h3>
                    <div className="space-y-6">
                      {testimonials[0].results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-slate-700 font-medium">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Grid Layout (Static) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-purple-50 text-purple-700 border-purple-200 font-mono text-sm">
              Tous Secteurs
            </Badge>
            <h2 className="text-4xl font-bold mb-6 gradient-text">Diversité de Nos Clients</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              De la finance à la santé, nous accompagnons tous les secteurs d'activité
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(1, 4).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="cursor-pointer"
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                        <p className="text-slate-600 text-sm">{testimonial.role}</p>
                        <p className="text-slate-500 text-xs">{testimonial.company}</p>
                      </div>
                      <Badge className="bg-slate-100 text-slate-700 font-mono text-xs">{testimonial.industry}</Badge>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-slate-600 mb-6 line-clamp-4">"{testimonial.content.substring(0, 120)}..."</p>

                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{testimonial.project.substring(0, 20)}...</span>
                      <span>{testimonial.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Slider */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-orange-50 text-orange-700 border-orange-200 font-mono text-sm">
              Navigation Interactive
            </Badge>
            <h2 className="text-4xl font-bold mb-6 gradient-text">Explorez Par Vous-Même</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Naviguez à travers nos témoignages avec les contrôles interactifs
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <motion.div
                  className="flex"
                  animate={{ x: `${-currentSlide * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0">
                      <Card className="border-0 shadow-lg mx-4">
                        <CardContent className="p-12 text-center">
                          <Quote className="w-12 h-12 text-slate-300 mx-auto mb-6" />

                          <div className="flex justify-center mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>

                          <p className="text-xl text-slate-700 leading-relaxed mb-8 italic">"{testimonial.content}"</p>

                          <div className="flex items-center justify-center mb-6">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={60}
                              height={60}
                              className="w-15 h-15 rounded-full object-cover mr-4"
                            />
                            <div className="text-left">
                              <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                              <p className="text-slate-600">{testimonial.role}</p>
                              <p className="text-slate-500">{testimonial.company}</p>
                            </div>
                          </div>

                          <Badge className="bg-blue-50 text-blue-700 font-mono">{testimonial.project}</Badge>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center mt-8 space-x-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-12 h-12 rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide ? "bg-slate-900 scale-125" : "bg-slate-300 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
                  className="w-12 h-12 rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Auto-Carousel (Interactive) */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20 font-mono text-sm">
              Carrousel Automatique
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">Défilement Continu</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Laissez-vous porter par le défilement automatique de nos témoignages
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                animate={{ x: `${-currentCarousel * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 mx-4">
                      <div className="text-center">
                        <Quote className="w-12 h-12 text-white/30 mx-auto mb-6" />

                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        <p className="text-xl text-white leading-relaxed mb-8 italic">
                          "{testimonial.content.substring(0, 150)}..."
                        </p>

                        <div className="flex items-center justify-center mb-6">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="w-15 h-15 rounded-full object-cover mr-4 border-2 border-white/20"
                          />
                          <div className="text-left">
                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                            <p className="text-slate-300">{testimonial.role}</p>
                            <p className="text-slate-400">{testimonial.company}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-center space-x-4">
                          <Badge className="bg-white/20 text-white border-white/30 font-mono">
                            {testimonial.industry}
                          </Badge>
                          {testimonial.videoUrl && (
                            <Button
                              size="sm"
                              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                              onClick={() => setSelectedTestimonial(testimonial)}
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Vidéo
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentCarousel ? "w-8 bg-white" : "w-4 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <Image
                      src={selectedTestimonial.image || "/placeholder.svg"}
                      alt={selectedTestimonial.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{selectedTestimonial.name}</h2>
                      <p className="text-slate-600">{selectedTestimonial.role}</p>
                      <p className="text-slate-500">{selectedTestimonial.company}</p>
                      <div className="flex mt-2">
                        {[...Array(selectedTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTestimonial(null)}
                    className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Quote className="w-12 h-12 text-blue-500/20 mb-6" />
                    <p className="text-lg text-slate-700 leading-relaxed mb-8 italic">
                      "{selectedTestimonial.content}"
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Détails du Projet</h4>
                        <div className="space-y-2 text-sm text-slate-600">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-2" />
                            {selectedTestimonial.industry}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {selectedTestimonial.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {selectedTestimonial.location}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Résultats Clés</h4>
                        <div className="space-y-2">
                          {selectedTestimonial.results.map((result, index) => (
                            <div key={index} className="flex items-center text-sm text-slate-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {selectedTestimonial.videoUrl && (
                      <div className="bg-slate-50 rounded-lg p-6 text-center">
                        <Play className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <h4 className="font-semibold text-slate-900 mb-2">Témoignage Vidéo</h4>
                        <p className="text-slate-600 mb-4">
                          Découvrez l'interview complète de {selectedTestimonial.name}
                        </p>
                        <Button className="bg-slate-900 hover:bg-slate-800">
                          <Play className="w-4 h-4 mr-2" />
                          Regarder la vidéo
                        </Button>
                      </div>
                    )}
                  </div>

                  <div>
                    <Badge className="mb-4 bg-blue-50 text-blue-700 font-mono text-sm w-full justify-center py-2">
                      {selectedTestimonial.project}
                    </Badge>

                    <Card className="border-0 bg-slate-50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-slate-900 mb-4">Projet Similaire ?</h4>
                        <p className="text-slate-600 text-sm mb-6">
                          Discutons de votre projet et découvrons comment nous pouvons vous aider.
                        </p>
                        <div className="space-y-3">
                          <Link href="/contact">
                            <Button className="w-full bg-slate-900 hover:bg-slate-800">
                              Demander un Audit
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                          <Link href="/portfolio">
                            <Button variant="outline" className="w-full bg-transparent">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Voir le Portfolio
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Rejoignez Nos Clients Satisfaits</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transformez vos défis techniques en succès durables. Commençons par comprendre vos besoins spécifiques.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-lg px-10 py-4 font-medium">
                  Planifier un Audit Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-2 font-medium bg-transparent">
                  Découvrir Nos Réalisations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

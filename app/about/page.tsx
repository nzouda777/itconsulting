"use client"

import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  Target,
  Zap,
  Code2,
  Shield,
  Cloud,
  Smartphone,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Alexandre Martin",
    role: "CTO & Architecte Solutions",
    image: "/placeholder.svg?height=300&width=300",
    bio: "15+ années en architecture système et développement full-stack. Expert en microservices et cloud-native.",
    skills: ["Architecture", "Node.js", "AWS", "Kubernetes"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Sarah Chen",
    role: "Lead DevOps Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Spécialiste infrastructure cloud et automatisation. Certifiée AWS Solutions Architect Professional.",
    skills: ["DevOps", "Terraform", "Docker", "Monitoring"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Thomas Dubois",
    role: "Senior Full-Stack Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert React/Next.js et développement mobile. Passionné par l'UX et les performances web.",
    skills: ["React", "TypeScript", "React Native", "GraphQL"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Marie Leroy",
    role: "Cybersecurity Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert en sécurité applicative et conformité. Certifiée CISSP et spécialiste Zero Trust.",
    skills: ["Sécurité", "Pentest", "Compliance", "Zero Trust"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
]

const timeline = [
  {
    year: "2019",
    title: "Création de ITCloudConsultings",
    description: "Lancement avec une équipe de 3 développeurs seniors",
    icon: Target,
  },
  {
    year: "2020",
    title: "Première certification AWS",
    description: "Obtention du statut AWS Advanced Consulting Partner",
    icon: Cloud,
  },
  {
    year: "2021",
    title: "Expansion mobile",
    description: "Lancement de notre division développement mobile",
    icon: Smartphone,
  },
  {
    year: "2022",
    title: "Expertise sécurité",
    description: "Création de notre pôle cybersécurité et conformité",
    icon: Shield,
  },
  {
    year: "2023",
    title: "50+ projets livrés",
    description: "Franchissement du cap des 50 projets avec 99.9% de satisfaction",
    icon: Award,
  },
  {
    year: "2024",
    title: "Innovation IA",
    description: "Intégration de l'IA dans nos processus de développement",
    icon: Zap,
  },
]

const values = [
  {
    icon: Code2,
    title: "Excellence Technique",
    description: "Code de qualité, architecture robuste et bonnes pratiques de développement",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travail en équipe, communication transparente et partage de connaissances",
  },
  {
    icon: TrendingUp,
    title: "Innovation Continue",
    description: "Veille technologique constante et adoption des dernières innovations",
  },
  {
    icon: CheckCircle,
    title: "Engagement Qualité",
    description: "Tests rigoureux, documentation complète et support long terme",
  },
]

const stats = [
  { value: "50+", label: "Projets livrés", icon: Award },
  { value: "200K+", label: "Utilisateurs impactés", icon: Users },
  { value: "99.9%", label: "Satisfaction client", icon: TrendingUp },
  { value: "24/7", label: "Support technique", icon: Zap },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">À propos de nous</Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              L'Équipe Derrière
              <br />
              Vos Succès Techniques
            </h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Une équipe d'experts passionnés, unis par la même vision : transformer vos défis techniques en avantages
              concurrentiels durables.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
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

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">
                Notre Mission
              </Badge>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Démocratiser l'Excellence Technique</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nous croyons que chaque entreprise, quelle que soit sa taille, mérite d'avoir accès aux meilleures
                technologies et pratiques de développement. Notre mission est de rendre l'excellence technique
                accessible et abordable.
              </p>
              <div className="space-y-4">
                {[
                  "Architecture moderne et scalable",
                  "Sécurité et conformité intégrées",
                  "Performance et optimisation continue",
                  "Support et maintenance long terme",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Notre équipe au travail"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Nos Valeurs</Badge>
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ce Qui Nous Guide</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Des principes fondamentaux qui définissent notre approche et notre engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="text-center border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-slate-700" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">
              Notre Histoire
            </Badge>
            <h2 className="text-4xl font-bold mb-6 gradient-text">5 Années d'Innovation</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              De startup à référence technique, découvrez les étapes clés de notre évolution
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mr-8 relative z-10">
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold font-mono text-slate-900 mr-4">{event.year}</span>
                      <Badge className="bg-blue-50 text-blue-700 font-mono text-xs">Milestone</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Notre Équipe</Badge>
            <h2 className="text-4xl font-bold mb-6 gradient-text">Les Experts Derrière Vos Projets</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une équipe multidisciplinaire d'experts passionnés par l'innovation technique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        {Object.entries(member.social).map(([platform, url]) => (
                          <Button
                            key={platform}
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                          >
                            {platform === "github" && <Github className="w-4 h-4" />}
                            {platform === "linkedin" && <Linkedin className="w-4 h-4" />}
                            {platform === "twitter" && <Twitter className="w-4 h-4" />}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 font-mono text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Rejoignez Notre Aventure</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Nous recherchons constamment des talents exceptionnels pour renforcer notre équipe. Découvrez nos
              opportunités de carrière.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Voir nos Offres
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
                <MapPin className="w-5 h-5 mr-2" />
                Nous Rencontrer
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

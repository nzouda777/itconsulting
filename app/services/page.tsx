"use client"

import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Code2, Shield, Cloud, ArrowRight, PenTool, Play, Headset, Rss} from "lucide-react"

const serviceCategories = [
  {
    title: "Development",
    tag: "Web Developement",
    description: "Custom software solutions",
    icon: Code2,
    services: [
      {
        name: "Web applications",
        description: "React, Next.js, Vue.js with modern architecture",
        technologies: ["TypeScript", "GraphQL", "Microservices"],
        pricing: "From 15k€",
      },
      {
        name: "Mobile applications",
        description: "iOS, Android native and cross-platform",
        technologies: ["React Native", "Flutter", "Swift/Kotlin/Java"],
        pricing: "From 20k€",
      },
      {
        name: "APIs & Backend",
        description: "Robust and scalable services",
        technologies: ["Node.js", "Python", "Go", "PHP", "JAVA"],
        pricing: "From 10k€",
      },
    ],
  },
  {
    title: "UI/UX & Graphic Design",
    tag: "UI/UX & Graphic Design",
    description: "Creative branding, UI/UX, flyers and brochures that communicate and captivate effectively.",
    icon: PenTool,
    services: [
      {
        name: "Branding",
        description: "Logo, business cards, flyers, brochures, and more.",
        technologies: ["Photoshop", "Illustrator", "Figma", "Canva"],
        pricing: "From 15k€",
      },
      {
        name: "UI/UX",
        description: "User interface and experience design",
        technologies: ["Figma", "Canva", "Adobe XD", "InVision"],
        pricing: "From 20k€",
      },
    ],
  },
  {
    title: "Infrastructure",
    tag: "Linux/DevOps & Cloud consulting",
    description: "Cloud and DevOps at the enterprise level",
    icon: Cloud,
    services: [
      {
        name: "Architecture Cloud",
        description: "Migration and multi-cloud optimization",
        technologies: ["AWS", "Azure", "GCP"],
        pricing: "From 25k€",
      },
      {
        name: "DevOps & CI/CD",
        description: "Complete deployment automation",
        technologies: ["Kubernetes", "Docker", "Jenkins", "GitLab", "Jira", "Confluence", "Github Action", "Terraform"],
        pricing: "From 12k€",
      },
      {
        name: "Monitoring & Observability",
        description: "Proactive system monitoring",
        technologies: ["Prometheus", "Grafana", "Datadog", "New Relic", "Sentry", "ELK Stack"],
        pricing: "From 8k€",
      },
    ],
  },
  {
    title: "Motion Design & Ads",
    tag: "Motion Design & Ads",
    description: "Creative motion design and ads that engage and inspire.",
    icon: Play,
    services: [
      {
        name: "Motion Design",
        description: "Creative motion design and ads that engage and inspire.",
        technologies: ["After Effects", "Figma", "Canva", "Adobe XD", "InVision"],
        pricing: "From 15k€",
      },
      {
        name: "Ads",
        description: "Creative motion design and ads that engage and inspire.",
        technologies: ["After Effects", "Figma", "Canva", "Adobe XD", "InVision"],
        pricing: "From 20k€",
      },
    ],
  },
  {
    title: "Virtual Assistant & Call Center",
    tag: "Virtual Assistant",
    description: "Virtual assistant services to handle your daily tasks and appointments.",
    icon: Headset,
    services: [
      {
        name: "Call Center",
        description: "Call center services to handle your daily tasks and appointments.",
        technologies: ['phone', 'whatsapp', 'telegram', 'discord'],
        pricing: "From 20k€",
      },
      {
        name: "Virtual Assistant",
        description: "Virtual assistant services to handle your daily tasks and appointments.",
        technologies: [],
        pricing: "From 15k€",
      }
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
      <section className=" flex items-center justify-center h-full mt-24 pt-32 pb-16 bg-gradient-to-tr from-second via-transparent to-transparent">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            {/* <motion.div variants={itemVariants}>
              <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Services Techniques</Badge>
            </motion.div> */}

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            Technical Expertise <br />
            at the Enterprise Level
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Comprehensive development, cloud infrastructure, and security solutions. Each project is designed for
            performance, scalability, and maintainability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="pt-16 pb-24">
        <div className="2xl:container  max-w-[100%] mx-auto  px-6 md:px-12 ">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-24 last:mb-0"
            >
              <div className="flex items-start gap-4 md:items-center md:justify-center md:flex-col md:text-center mb-12" id={ category.title.toLowerCase().replace(" ", "-") }>
                <div className="w-12 h-12 md:w-16 md:h-16  bg-gradient-to-tr from-second/25 via-second/10 to-prime/25 md:rounded-2xl rounded-lg p-2 inline-flex items-center justify-center ">
                  <category.icon className="md:w-8 md:h-8 w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{category.title}</h2>
                  <p className="text-lg text-slate-600">{category.description}</p>
                </div>
              </div>

              <div className={`grid md:grid-cols-${category.services.length === 3 ? 3 : 2} gap-8`}>
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="!h-full w-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-start">
                      <CardHeader className="w-full">
                        <CardTitle className="text-xl text-slate-900">{service.name}</CardTitle>
                        <p className="text-slate-600">{service.description}</p>
                      </CardHeader>
                      <CardContent className="w-full">
                        { service.technologies.length < 1 ? (
                          <div className="mb-6">
                            {/* <h4 className="font-semibold text-slate-900 mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge
                                key={service.name}
                                variant="secondary"
                                className="bg-slate-100 text-slate-700 font-mono text-xs"
                              >
                                {service.name}
                              </Badge>
                            </div> */}
                          </div>
                        ) : (
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
                        )}

                        {/* <div className="mb-6">
                          <div className="text-2xl font-bold text-slate-900 mb-1">{service.pricing}</div>
                          <p className="text-sm text-slate-600">Devis personnalisé selon vos besoins</p>
                        </div> */}

                        <Button className="w-full bg-gradient-to-r from-prime to-second">
                          <Link href="/contact#contact">
                            Request a Quote
                          </Link>
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
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Méthodologie</Badge> */}
            <h2 className="text-4xl font-bold mb-6 gradient-text">Agile Development Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A structured approach ensuring quality, deadlines, and budget control
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analysis & Audit",
                description: "Complete technical evaluation of the existing system and definition of objectives",
              },
              {
                step: "02",
                title: "Architecture & Design",
                description: "System architecture and user interface design",
              },
              {
                step: "03",
                title: "Iterative Development",
                description: "Implementation by sprints with continuous validation",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Secure production deployment and evolving maintenance",
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
                <div className="w-16 h-16 bg-gradient-to-tr from-prime to-second text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-mono text-xl font-bold">
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
"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code2,
  Database,
  Shield,
  Zap,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Play,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
  Layers,
  PenTool,
  MessageCircle,
  Clapperboard,
  Headset,
  Rss,
  Cloud,
  Handshake,
  Target,
  Phone,
  Smartphone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

const services = [
  {
    icon: Code2,
    title: "Web Developement",
    description: "Custom websites with ongoing support and maintenance.",
    features: ["React/Next.js", "Node.js/Python", "Architecture microservices"],
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Developement",
    description: "Custom mobile apps with ongoing support and maintenance.",
    features: ["React Native", "Flutter", "Swift/Kotlin"],
    color: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: PenTool,
    title: "UI/UX & Graphic Design",
    description: "Creative branding, UI/UX, flyers and brochures that communicate and captivate effectively.",
    features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD Pipeline"],
    color: "from-yellow-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Clapperboard,
    title: "Motion Design & Ads",
    description: "Creative motion design and ads that engage and inspire.",
    features: ["Pentest", "Conformité RGPD", "Zero Trust"],
    color: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-600",
  },
  {
    icon: Headset,
    title: "Virtual Assistant",
    description: "Virtual assistant services to handle your daily tasks and appointments.",
    features: ["Load Testing", "APM", "Observabilité"],
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Rss,
    title: "Community & Social Media Management",
    description: "Social media management and community engagement services.",
    features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD Pipeline"],
    color: "from-orange-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Cloud,
    title: "Linux/DevOps & Cloud consulting",
    description: "DevSecOps and cloud consulting services to optimize your IT infrastructure.",
    features: ["Pentest", "Conformité RGPD", "Zero Trust"],
    color: "from-blue-500/10 to-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Phone,
    title: "Call Center",
    description: "Call center services to handle your daily tasks and appointments.",
    features: ["Call Center", "APM", "Observabilité"],
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
  }
]

const metrics = [
  { value: "99.9%", label: "Uptime guaranteed", icon: TrendingUp },
  { value: "< 100ms", label: "Response time", icon: Zap },
  { value: "50+", label: "Delivered projects", icon: Award },
  { value: "24/7", label: "Technical support", icon: Users },
]

const testimonials = [
  {
    name: "Marie Dubois",
    role: "CTO, FinanceSecure",
    company: "FinanceSecure",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "ITCloudConsultings a transformé notre infrastructure. Leur expertise technique et leur approche méthodique nous ont permis de réduire nos coûts de 40% tout en améliorant nos performances.",
    rating: 5,
    project: "Migration Cloud & Sécurité",
  },
  {
    name: "Jean-Pierre Martin",
    role: "Directeur Technique, RetailTech",
    company: "RetailTech Corp",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Une équipe exceptionnelle qui maîtrise parfaitement les technologies modernes. Notre plateforme e-commerce gère maintenant 10x plus de trafic avec une stabilité parfaite.",
    rating: 5,
    project: "Plateforme E-commerce",
  },
  {
    name: "Sophie Chen",
    role: "CEO, DataViz Pro",
    company: "DataViz Pro",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Leur capacité à traduire nos besoins métier en solutions techniques innovantes est remarquable. Le ROI a été immédiat et les résultats dépassent nos attentes.",
    rating: 5,
    project: "Dashboard Analytics",
  },
]

const techStack = [
  { name: "React", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Node.js", logo: "/placeholder.svg?height=60&width=60" },
  { name: "TypeScript", logo: "/placeholder.svg?height=60&width=60" },
  { name: "AWS", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Docker", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Kubernetes", logo: "/placeholder.svg?height=60&width=60" },
  { name: "PostgreSQL", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Redis", logo: "/placeholder.svg?height=60&width=60" },
]

const features = [
  {
    icon: Terminal,
    title: "Expertise & Experience",
    description: "Our team comprises seasoned professionals with deep industry knowledge and hands-on experience in the latest technologies and best practices.",
    image: "https://polymerexpert.fr/app/uploads/2023/04/Marketing-innovation.jpeg",
  },
  {
    icon: Cpu,
    title: "Tailored Solutions",
    description:
      "We don’t do one-size-fits-all. We customize IT solutions to perfectly fit your business needs, goals, and budget.",
    image: "https://excellencetraining.co.uk/wp-content/uploads/2016/04/Keyboard-Button-Tailored-3.jpg",
  },
  {
    icon: Globe,
    title: "Cutting-Edge Technology",
    description: "We leverage the latest tools, platforms, and innovations to keep your business ahead of the competition.",
    image: "https://www.plataine.com/wp-content/uploads/2019/11/shutterstock_1282709413-1.jpg",
  },
  {
    icon: Layers,
    title: "Reliable Support & Maintenance",
    description: "We provide continuous monitoring, quick issue resolution, and proactive maintenance to keep your IT infrastructure running smoothly.",
    image: "https://wsconnect.in/wp-content/uploads/2024/04/maintenance-and-it-support-Johannesburg.jpg",
  },
  {
    title: "Cost Efficiency",
    description: "Through smart planning and scalable solutions, we maximize your IT investment while minimizing unnecessary expenses.",
    image: "https://prosperity.com.au/blog_how-to-realize-huge-cost-savings-for-enterprise-telecom-840x420.jpg",
    icon: Layers
  },
  {
    title: "Security First",
    description: "We prioritize your data and network security with robust protocols, compliance standards, and ongoing risk management.",
    image: 'https://connect.geant.org/wp-content/uploads/2023/10/security-culturejpg-990x596.jpg',
    icon: Shield
  },
  {
    title: "Transparent Communication",
    description: "We keep you informed at every stage with clear, honest, and timely communication.",
    image: 'https://www.theladders.com/wp-content/uploads/handshake_190617.jpg',
    icon: MessageCircle
  },
  {
    title: "Innovation Partner",
    description: "More than just a vendor, we aim to be your long-term IT partner, driving innovation and growth alongside your business.",
    image: 'https://intuitconsultancy.com/wp-content/uploads/2023/11/Why-Is-Digital-transformation-About-People-and-Not-Just-About-Technology.png',
    icon: Handshake
  },
  {
    title: "Global Reach, Local Touch",
    description: "With access to global talent and technologies, we deliver solutions tailored to your local business environment.",
    image: 'https://cdn.prod.website-files.com/667a8a31f844cf6675e10801/66dfebdbce4538603a39c5d8_663067c92e822412ecc8d158_localglobal.png ',
    icon: Target
  }
]

export default function HomePage() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen font-sans">
      <Header />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-tr from-second via-transparent to-transparent">
        <div className="absolute inset-0 tech-grid opacity-30"  />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div style={{ y, opacity }} className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center h-full pt-24"
          >
            {/* <motion.div variants={itemVariants}>
              <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">
                v2.0.1 • Production Ready
              </Badge>
            </motion.div> */}

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              <span className="gradient-text">New Generation</span>
              <br />
              <span className="text-slate-900">Technical Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className=" text-md md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Our dedicated team of developers, designers, and engineers enables us to deliver high-quality websites and mobile applications that align seamlessly with our clients’ goals—efficiently, intelligently, and cost-effectively.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact">
                <Button size="lg" className="bg-second hover:bg-prime text-sm md:text-lg px-10 py-4 font-medium">
                Free Technical Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                size="lg"
                variant="outline"
                className="text-sm md:text-lg px-10 py-4 border-2 font-medium group"
              >
                Our Achievements
              </Button>
              </Link>
            </motion.div>

            {/* Animated Metrics */}
           
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center cursor-pointer hover:border-slate-400 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section with Advanced Animations */}
      <section className="py-24 bg-white">
        <div className="2xl:container  max-w-[100%] mx-auto h-full overflow-x-hidden px-6 md:px-12  ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Core Services</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text"> Full Technical Expertise</h2>
            <p className="text-md md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From system architecture to delivery, we master every stage of the modern development cycle, with a focus on performance and scalability.
            </p>
          </motion.div>

          <div className="flex grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 md:gap-8 gap-2 md:px-0 snap-x    py-8 ">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                className="group perspective-1000 h-64 md:h-80 snap-start min-w-full md:min-w-[300px] lg:min-w-[250px] flex-shrink-0 p-0.5 bg-gradient-to-r rounded-sm from-prime to-second"
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 px-4">
                  {/* Front Side */}
                  <Card
                    className={`absolute inset-0 w-full h-full backface-hidden border-0 shadow-sm bg-white  backdrop-blur-sm rounded-sm`}
                  >
                    <CardContent className="p-8 flex flex-col justify-center items-center text-center h-full">
                      <div className="md:w-16 md:h-16 w-12 h-12 p-4 bg-white rounded-2xl inline-flex items-center justify-center mb-6 shadow-md">
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                      <h3 className="md:text-2xl text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                      {/* <p className="text-slate-600 leading-relaxed">{service.description}</p> */}
                      {/* <div className="mt-6 text-sm text-slate-500 font-mono">Survolez pour plus de détails</div> */}
                    </CardContent>
                  </Card>

                  {/* Back Side */}
                  <Card
                    className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 border-0 shadow-lg bg-gradient-to-br from-prime to-second backdrop-blur-sm`}
                  >
                    <CardContent className="p-2 md:p-8 h-full flex flex-col justify-between bg-white w-full  text-center">
                      <div className="space-y-2">
                        <div className="flex items-center mb-1 md:flex-row flex-col justify-center space-y-4">
                          <div className="p-3 md:w-16 md:h-16 w-12 h-12 bg-white rounded-xl flex items-center justify-center  shadow-md">
                            <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                          </div>
                          <h3 className="md:text-xl text-base font-bold text-slate-900 whitespace-wrap text-wrap w-full">{service.title}</h3>
                        </div>

                        <div className="space-y-2 mb-3">

                      <p className="text-slate-600 leading-relaxed md:text-base text-xs">{service.description}</p>
                          {/* <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">Technologies</h4> */}
                          {/* <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="font-mono font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul> */}
                        </div>

                        <div className="space-y-3 mb-6 hidden">
                          <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">Avantages</h4>
                          <ul className="space-y-2 text-sm text-slate-700">
                            {service.title === "Développement" && (
                              <>
                                <li>• Code de qualité entreprise</li>
                                <li>• Architecture scalable</li>
                                <li>• Tests automatisés</li>
                              </>
                            )}
                            {service.title === "Infrastructure" && (
                              <>
                                <li>• Haute disponibilité 99.9%</li>
                                <li>• Auto-scaling intelligent</li>
                                <li>• Monitoring avancé</li>
                              </>
                            )}
                            {service.title === "Sécurité" && (
                              <>
                                <li>• Conformité RGPD/SOC2</li>
                                <li>• Audit de vulnérabilités</li>
                                <li>• Protection temps réel</li>
                              </>
                            )}
                            {service.title === "Performance" && (
                              <>
                                <li>• Optimisation en moins de 100ms</li>
                                <li>• Analyse prédictive</li>
                                <li>• Alertes intelligentes</li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>

                      <Link href={`/services#${service.title.toLowerCase().replace(" ", "-")}`} className="w-full">
                        <Button className="w-full bg-second text-white font-medium hover:bg-gradient-to-r from-prime to-second duration-500 hover:bg-prime hover:duration-1000 transition-colors md:text-base text-xs md:py-2 py-1 md:h-10 h-8">
                          Discover
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-hidden px-6 py-6 md:px-12  mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">
              Fonctionnalités Avancées
            </Badge> */}
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">Why Choose Us?</h2>
            <p className="text-md md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our differentiating technical approach guarantees exceptional results
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-16 h-16 bg-gradient-to-b from-prime to-second rounded-2xl flex items-center justify-center mb-8">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">{feature.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{feature.description}</p>

                  <div className="space-y-4 mb-8">
                    {[
                      // "Standards industriels respectés",
                      // "Documentation technique complète",
                      // "Support et maintenance inclus",
                      // "Garantie de performance",
                    ].map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link href="/services">
                    <Button className="bg-slate-900 hover:bg-slate-800 font-medium">
                      Discover
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <motion.div
                  className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-second/20 to-transparent" />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-prime rounded-full opacity-20"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-second rounded-full opacity-20"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-24 bg-white overflow-hidden hidden">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">
              Technologies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Stack Technique Moderne</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Nous maîtrisons les technologies les plus avancées pour créer des solutions robustes et évolutives
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex space-x-8 animate-scroll">
              {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center group hover:bg-slate-200 transition-colors"
                  whileHover={{ scale: 1.1, y: -4 }}
                >
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-slate-50 hidden">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Témoignages</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Ce Que Disent Nos Clients</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              La satisfaction client au cœur de notre approche technique
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                animate={{ x: `${-currentTestimonial * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="border-0 shadow-xl bg-white">
                      <CardContent className="p-12 text-center">
                        <Quote className="w-12 h-12 text-slate-300 mx-auto mb-8" />

                        <p className="text-xl text-slate-700 leading-relaxed mb-8 italic">"{testimonial.content}"</p>

                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        <div className="flex items-center justify-center space-x-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="w-15 h-15 rounded-full object-cover"
                          />
                          <div className="text-left">
                            <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                            <p className="text-slate-600">{testimonial.role}</p>
                            <p className="text-sm text-slate-500">{testimonial.company}</p>
                          </div>
                        </div>

                        <Badge className="mt-6 bg-blue-50 text-blue-700 font-mono text-xs">{testimonial.project}</Badge>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full p-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-slate-900" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-20 h-20 mx-auto mb-4 opacity-50" />
                <p className="text-xl">Vidéo de présentation</p>
                <p className="text-slate-400">Découvrez nos réalisations en action</p>
              </div>
            </div>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Ready to Transform Your Infrastructure ?
            </h2>
            <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Let's start with a free technical audit of your current system. Together we'll identify
            optimization opportunities and define a technical roadmap tailored to your business objectives.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-second hover:bg-second/90 text-lg px-10 py-4 font-medium">
                  Book an Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
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

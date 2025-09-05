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
    name: "Ivan SAHA",
    role: "CEO & Cloud Architect",
    image: "/ivan.JPG",
    bio: "15+ years of experience in system architecture and full-stack development. Expert in microservices and cloud-native.",
    skills: ["Architecture", "Node.js", "AWS", "Kubernetes"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Gilles KEMGOUM",
    role: "Lead Software Engineer",
    image: "/gilles.png",
    bio: "Responsible for the design, development, and quality of the company’s software solutions. I lead the technical team, defines technology choices, and ensures the performance, security, and scalability of delivered applications.",
    skills: ["Java", "Spring Boot", "Angular", "Laravel"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Rodrigue NZOUDA",
    role: "Fullstack engineer & Lead Shopify dev",
    image: "/rn.JPG",
    bio: "Fullstack developer. Ensure performance, security, and scalability of our Shopify applications.",
    skills: [ "NextJS", "TypeScript", "Javascript", "Shopify", "Laravel", "CI/CD"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Cyrille Toumi",
    role: "Software Engineer – Web, Mobile & Backend Developer",
    image: "/profile.jpg",
    bio: "Passionate about developing performant and scalable applications, he masters Spring Boot for the backend, Vue.js for the frontend and Flutter for mobile applications.",
    skills: ["Spring Boot", "Vue.js", "Flutter"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Manuella SAHA",
    role: "Freelance Marketplace Manager & Front end developper",
    image: "/Media.jpeg",
    bio: "skilled in creating modern, responsive, and user-friendly web interfaces while also managing freelance marketplace profiles on platforms like Fiverr and Upwork.",
    skills: ["ReactJS", "Wordpress", "Fiverr", "Upwork"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },

  {
    name: "Pouotouo Abdel ",
    role: "Software Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Backend web and mobile dev.",
    skills: ["Django", "Spring Boot", "Flutter"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Audrey SAHA",
    role: "Intern developer",
    image: "/audrey.png",
    bio: "Fullstack developer intern at ITCloudConsultings.",
    skills: ["ReactJS", "Wordpress"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "TALLE Kely",
    role: "Community Manager & Social Media Manager",
    image: "/kely.png",
    bio: "passionate about communication, I develop communities where every voice matters",
    skills: ["Social Media", "Content Marketing", "Community Management"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  }, 
  
]

const timeline = [
  {
    year: "2019",
    title: "Creation of ITCloudConsultings",
    description: "Launch with a team of 3 senior developers",
    icon: Target,
  },
  {
    year: "2020",
    title: "First AWS certification",
    description: "Obtention du statut AWS Advanced Consulting Partner",
    icon: Cloud,
  },
  {
    year: "2021",
    title: "Expansion mobile",
    description: "Launch of our mobile development division",
    icon: Smartphone,
  },
  {
    year: "2022",
    title: "Security expertise",
    description: "Creation of our cybersecurity and compliance team",
    icon: Shield,
  },
  {
    year: "2023",
    title: "50+ projects delivered",
    description: "Crossing the 50-project milestone with 99.9% satisfaction",
    icon: Award,
  },
  {
    year: "2024",
    title: "Innovation AI",
    description: "Integration of AI in our development processes",
    icon: Zap,
  },
]

const values = [
  {
    icon: Code2,
    title: "Excellence Technical",
    description: "Code of quality, robust architecture and good development practices",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Teamwork, transparent communication and knowledge sharing",
  },
  {
    icon: TrendingUp,
    title: "Innovation Continue",
    description: "Constant technology watch and adoption of the latest innovations",
  },
  {
    icon: CheckCircle,
    title: "Engagement Quality",
    description: "Thorough testing, complete documentation and long-term support",
  },
]

const stats = [
  { value: "50+", label: "Projects delivered", icon: Award },
  { value: "200K+", label: "Users impacted", icon: Users },
  { value: "99.9%", label: "Client satisfaction", icon: TrendingUp },
  { value: "24/7", label: "Technical support", icon: Zap },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 mt-24 pb-16  bg-gradient-to-tr from-second via-transparent to-transparent">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">About Us</Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              The Team Behind
              <br />
              Your Technical Success
            </h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A team of passionate experts united by a shared vision: transforming your technical challenges into durable competitive advantages.
            </p>

            <div className="gr-id grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto hidden">
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

{/* Team Section */}
<section className="py-24 bg-slate-50 " id="teams">
        <div className="2xl:container  max-w-[100%] mx-auto  px-6 md:px-12  ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Notre Équipe</Badge>
            <h2 className="text-4xl font-bold mb-6 gradient-text">The Experts Behind Your Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A multidisciplinary team of experts passionate about technical innovation
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
                      className="w-full h-64 md:h-72 object-cover top-0"
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
                    <p className="text-second font-medium mb-4">{member.role}</p>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-second/5 text-second font-mono text-xs"
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
      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  ">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">
                Our Mission
              </Badge>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Democratizing Technical Excellence</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that every company, regardless of size, deserves access to the best technologies and development practices. Our mission is to make technical excellence accessible and affordable.
              </p>
              <div className="space-y-4">
                {[
                  "Modern and scalable architecture",
                  "Integrated security and compliance",
                  "Continuous performance optimization",
                  "Long-term support and maintenance",
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
                  src="https://img.freepik.com/free-vector/cloud-internet-technology_53876-94170.jpg?t=st=1746121333~exp=1746124933~hmac=071a5604998e64b05870d0dc2e6b3c028a8f88570fbda8e14369f08bd2229f15"
                  alt="Our team at work"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl" /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Our Values</Badge>
            <h2 className="text-4xl font-bold mb-6 gradient-text">What Guides Us</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Fundamental principles that define our approach and commitment
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
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">
              Our History
            </Badge>
            <h2 className="text-4xl font-bold mb-6 gradient-text">5 Years of Innovation</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From startup to technical reference, discover the key steps of our evolution
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
                  <div className="w-16 h-16 bg-second/80 rounded-2xl flex items-center justify-center mr-8 relative z-10">
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold font-mono text-slate-900 mr-4">{event.year}</span>
                      <Badge className="bg-second/5 text-second font-mono text-xs">Milestone</Badge>
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

      

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Join Our Adventure</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              We are constantly searching for exceptional talents to strengthen our team. Discover our career opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-second hover:bg-second/80 text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                See our Offers
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
                <MapPin className="w-5 h-5 mr-2" />
                Meet Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

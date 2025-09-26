"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play, Code2, TrendingUp, Users, Award, Calendar } from "lucide-react"
import Image from "next/image"

import { useTranslation, type Locale } from '../../../lib/i18n';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import Navigation from '../../../components//Navigation';
import { useLocale } from "../../../hooks/useLocale"

interface PortfolioPageProps {
  locale: Locale
}


// const locale = useLocale(PortfolioPageProps.locale);

const projects = [
  {
    id: 0,
    title: "ITPath360",
    category: "Web",
    description:
      "E-learning platform for IT professionals and students.",
    image: "/itpath360.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Kubernetes", "AWS"],
    metrics: { users: "50K+", performance: "< 100ms", uptime: "99.9%" },
    year: "2024",
    client: "ITPath360",
    duration: "8 mois",
    team: "6 développeurs",
    links: { demo: "https://itpath360.com/", github: "#", case: "#" },
  },
  {
    id: 1,
    title: "TradeZenith",
    category: "Web",
    description: "Trading platform to learn about crypto, forex and stocks.",
    image: "/tradezenith.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Kubernetes", "AWS"],
    metrics: { users: "100K+", rating: "4.8/5", transactions: "1M+/mois" },
    year: "2024",
    client: "TradeZenith",
    duration: "6 mois",
    team: "6 développeurs",
    links: { demo: "https://tradezennith.com/", github: "#", case: "#" },
  },
  {
    id: 2,
    title: "Aspires LD",
    category: "Web",
    description: "Aspires LD is a financial consulting firm dedicated to helping individuals and businesses achieve their financial goals. Our experienced professionals offer personalized, comprehensive advice on investments, retirement planning, budgeting, and debt management.",
    image: "/asp.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Kubernetes", "AWS"],
    metrics: { users: "200+", rating: "4.8/5", transactions: "1M+/mois" },
    year: "2023",
    client: "Aspires LD",
    duration: "6 mois",
    team: "6 développeurs",
    links: { demo: "https://www.aspiresld.com/", github: "#", case: "#" },
  },
  {
    id: 3,
    title: "TradeZenith",
    category: "Graphic Design",
    description: "Trading platform to learn about crypto, forex and stocks.",
    image: "/graphic_design/td.JPG",
    technologies: ["Illustrator"],
    metrics: { users: "", rating: "", transactions: "" },
    year: "2024",
    client: "TradeZenith",
    duration: "2 days",
    team: "1 designer",
    links: { demo: "https://tradezennith.com/", github: "#", case: "#" },
  },
  {
    id: 4,
    title: "ITCloudConsultings",
    category: "Graphic Design",
    description: "IT Company",
    image: "/graphic_design/itcc.JPG",
    technologies: ["Illustrator"],
    metrics: { users: "", rating: "", transactions: "" },
    year: "2024",
    client: "ITCloudConsultings",
    duration: "2 days",
    team: "1 designer",
    links: { demo: "https://itcloudconsultings.com/", github: "#", case: "#" },
  },
  {
    id: 5,
    title: "Aspires LD",
    category: "Graphic Design",
    description: "Aspires LD is a financial consulting firm dedicated to helping individuals and businesses achieve their financial goals. Our experienced professionals offer personalized, comprehensive advice on investments, retirement planning, budgeting, and debt management.",
    image: "/graphic_design/aspire.JPG",
    technologies: ["Illustrator"],
    metrics: { users: "", rating: "", transactions: "" },
    year: "2024",
    client: "Aspires LD",
    duration: "2 days",
    team: "1 designer",
    links: { demo: "https://www.aspiresld.com/", github: "#", case: "#" },
  },
  {
    id: 6,
    title: "DelivX",
    category: "Graphic Design",
    description: "DelivX is mobile marketplace application",
    image: "/graphic_design/delivx.JPG",
    technologies: ["Illustrator"],
    metrics: { users: "", rating: "", transactions: "" },
    year: "2024",
    client: "DelivX",
    duration: "1 days",
    team: "1 designer",
    links: { demo: "#", github: "#", case: "#" },
  },
  {
    id: 7,
    title: "ITPath",
    category: "Graphic Design",
    description: "ITPath is a e-leaning website",
    image: "/graphic_design/itpath.JPG",
    technologies: ["Illustrator"],
    metrics: { users: "", rating: "", transactions: "" },
    year: "2024",
    client: "ITPath",
    duration: "2 days",
    team: "1 designer",
    links: { demo: "#", github: "#", case: "#" },
  }
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "web" | "mobile" | "uiux" | "graphic" | "motion" | "devops"
  >("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const locale = useLocale()
  const { t } = useTranslation(locale)
  console.log(t("AboutPage.title"))
  const isFrench = locale === 'fr';

  // Localized labels for display, stable keys for logic
  const categories = isFrench
    ? [
      { key: "all" as const, label: "Tous" },
      { key: "web" as const, label: "Web" },
      { key: "mobile" as const, label: "Mobile" },
      { key: "uiux" as const, label: "UI/UX Design" },
      { key: "graphic" as const, label: "Design Graphique" },
      { key: "motion" as const, label: "Motion & Ads" },
      { key: "devops" as const, label: "Devops & Cloud" },
    ]
    : [
      { key: "all" as const, label: "All" },
      { key: "web" as const, label: "Web" },
      { key: "mobile" as const, label: "Mobile" },
      { key: "uiux" as const, label: "UI/UX Design" },
      { key: "graphic" as const, label: "Graphic Design" },
      { key: "motion" as const, label: "Motion & Ads" },
      { key: "devops" as const, label: "Devops & Cloud" },
    ];

  // Map from category key to the project.category values (which are in English)
  const categoryToProjectCategory: Record<
    typeof activeCategory,
    string | null
  > = {
    all: null,
    web: "Web",
    mobile: "Mobile",
    uiux: "UI/UX Design",
    graphic: "Graphic Design",
    motion: "Motion & Ads",
    devops: "Devops & Cloud",
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
        (project) => project.category === categoryToProjectCategory[activeCategory]
      )

  return (
    <div className="min-h-screen font-sans">
      <Navigation locale={locale} />

      {/* Hero Section */}
      <section className="pt-32 mt-24 pb-16 bg-gradient-to-tr from-prime via-transparent to-transparect">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">
              Portfolio Technique
            </Badge> */}

            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">{t("PortfolioPage.heading")} </h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("PortfolioPage.description")}
            </p>

            <div className="gr id grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-aut hidden">
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
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12 ">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`md:px-6 md:py-3 px-4 py-1 text-sm md:text-base rounded-full font-medium transition-all ${activeCategory === category.key
                    ? "bg-prime text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12 ">
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
                        <Badge className="bg-second text-white font-mono text-xs">{t(`PortfolioPage.projects.${project.id}.category`)}</Badge>
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
                        <span className="text-sm text-slate-500 font-mono">{t(`PortfolioPage.projects.${project.id}.year`)}</span>
                        <span className="text-sm text-slate-500">{t(`PortfolioPage.projects.${project.id}.client`)}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-second transition-colors">
                        {t(`PortfolioPage.projects.${project.id}.title`)}
                      </h3>

                      <p className="text-slate-600 mb-4 line-clamp-2">{t(`PortfolioPage.projects.${project.id}.description`)}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
  {(() => {
    const techs = t<string[]>(`PortfolioPage.projects.${project.id}.technologies`);
    return Array.isArray(techs) ? (
      <>
        {techs.slice(0, 3).map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-slate-100 text-slate-700 font-mono text-xs"
          >
            {tech}
          </Badge>
        ))}
        {techs.length > 3 && (
          <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-mono text-xs">
            +{techs.length - 3}
          </Badge>
        )}
      </>
    ) : null;
  })()}
</div>

                      {/* <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries( t(`PortfolioPage.projects.${project.id}.metrics`) )
                          .slice(0, 3)
                          .map(([key, value]) => (
                            <div key={key}>
                              <div className="text-sm font-bold text-slate-900 font-mono">{value}</div>
                              <div className="text-xs text-slate-500 capitalize">{key}</div>
                            </div>
                          ))}
                      </div> */}
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
                  alt={t(`PortfolioPage.projects.${selectedProject.id}.title`)}
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{t(`PortfolioPage.projects.${selectedProject.id}.title`)}</h2>
                    <p className="text-slate-600">
                      {t(`PortfolioPage.projects.${selectedProject.id}.client`)} • {selectedProject.year}
                    </p>
                  </div>
                  <Badge className="bg-blue-50 text-blue-700 font-mono">{t(`PortfolioPage.projects.${selectedProject.id}.category`)}</Badge>
                </div>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t(`PortfolioPage.projects.${selectedProject.id}.description`)}</p>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {t(`PortfolioPage.projects.${selectedProject.id}.durationKey`)}
                    </h4>
                    <p className="text-slate-600">{t(`PortfolioPage.projects.${selectedProject.id}.duration`)}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {t(`PortfolioPage.projects.${selectedProject.id}.teamKey`)}
                    </h4>
                    <p className="text-slate-600">{t(`PortfolioPage.projects.${selectedProject.id}.team`)}</p>
                  </div>

                  {t(`PortfolioPage.projects.${selectedProject.id}.metrics`).length > 0 && (
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {t(`PortfolioPage.projects.${selectedProject.id}.metricsKey`)}
                      </h4>
                      <div className="space-y-1">
                        {Object.entries(selectedProject.metrics).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-slate-600 capitalize">{t(`PortfolioPage.projects.${selectedProject.id}.metrics.${key}`)}:</span>
                            <span className="font-mono font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4">{t(`PortfolioPage.projects.${selectedProject.id}.technologiesKey`)}</h4>
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
                    <Link href={selectedProject.links.demo} target="_blank" className="flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Link>

                  </Button>
                  {/* <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    {t(`PortfolioPage.projects.${selectedProject.id}.sourceCode`)}
                  </Button> */}
                  {/* <Button variant="outline">{t(`PortfolioPage.projects.${selectedProject.id}.fullCaseStudy`)}</Button> */}
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

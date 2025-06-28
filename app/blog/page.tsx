"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, User, ArrowRight, TrendingUp, Code2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = ["Tous", "Développement", "DevOps", "Sécurité", "Architecture", "Mobile", "IA/ML"]

const articles = [
  {
    id: 1,
    slug: "architecture-microservices-guide-2024",
    title: "Architecture Microservices : Guide Complet 2024",
    excerpt:
      "Découvrez les meilleures pratiques pour concevoir et implémenter une architecture microservices moderne et scalable.",
    content:
      "Les microservices représentent une approche architecturale qui structure une application comme un ensemble de services faiblement couplés...",
    category: "Architecture",
    author: "Alexandre Martin",
    date: "2024-01-15",
    readTime: "12 min",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Microservices", "Docker", "Kubernetes", "API Gateway"],
    featured: true,
    views: 2500,
  },
  {
    id: 2,
    slug: "securiser-apis-rest-checklist",
    title: "Sécuriser ses APIs REST : Checklist Complète",
    excerpt: "Une checklist exhaustive pour sécuriser vos APIs REST contre les principales vulnérabilités OWASP.",
    content:
      "La sécurisation des APIs REST est cruciale dans l'écosystème moderne. Voici les points essentiels à vérifier...",
    category: "Sécurité",
    author: "Marie Leroy",
    date: "2024-01-10",
    readTime: "8 min",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["API Security", "OWASP", "Authentication", "JWT"],
    featured: false,
    views: 1800,
  },
  {
    id: 3,
    slug: "ci-cd-github-actions",
    title: "CI/CD avec GitHub Actions : De Zéro à Héros",
    excerpt: "Maîtrisez GitHub Actions pour automatiser vos déploiements et améliorer votre workflow de développement.",
    content: "GitHub Actions révolutionne la façon dont nous gérons nos pipelines CI/CD. Dans ce guide complet...",
    category: "DevOps",
    author: "Sarah Chen",
    date: "2024-01-05",
    readTime: "15 min",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["GitHub Actions", "CI/CD", "DevOps", "Automation"],
    featured: true,
    views: 3200,
  },
  {
    id: 4,
    slug: "react-server-components-avenir-web",
    title: "React Server Components : L'Avenir du Web",
    excerpt: "Explorez les React Server Components et leur impact sur les performances et l'expérience développeur.",
    content: "Les React Server Components marquent une évolution majeure dans l'écosystème React...",
    category: "Développement",
    author: "Thomas Dubois",
    date: "2024-01-01",
    readTime: "10 min",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "Server Components", "Performance"],
    featured: false,
    views: 2100,
  },
  {
    id: 5,
    slug: "optimisation-mobile-performance-ux",
    title: "Optimisation Mobile : Performance et UX",
    excerpt: "Techniques avancées pour optimiser les performances de vos applications mobiles React Native.",
    content: "L'optimisation des applications mobiles nécessite une approche holistique...",
    category: "Mobile",
    author: "Thomas Dubois",
    date: "2023-12-28",
    readTime: "11 min",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Performance", "Mobile UX", "Optimization"],
    featured: false,
    views: 1600,
  },
  {
    id: 6,
    slug: "infrastructure-as-code-terraform",
    title: "Infrastructure as Code avec Terraform",
    excerpt: "Maîtrisez Terraform pour gérer votre infrastructure cloud de manière déclarative et reproductible.",
    content: "Terraform s'impose comme l'outil de référence pour l'Infrastructure as Code...",
    category: "DevOps",
    author: "Sarah Chen",
    date: "2023-12-25",
    readTime: "13 min",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Terraform", "IaC", "AWS", "Infrastructure"],
    featured: false,
    views: 1900,
  },
]

const popularTags = [
  "React",
  "Node.js",
  "TypeScript",
  "AWS",
  "Docker",
  "Kubernetes",
  "Security",
  "Performance",
  "API",
  "DevOps",
  "Mobile",
  "AI/ML",
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArticle, setSelectedArticle] = useState<(typeof articles)[0] | null>(null)

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "Tous" || article.category === activeCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter((article) => article.featured)

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
            <Badge className="mb-6 bg-slate-50 text-slate-700 border-slate-950 font-light md:text-sm text-xs hover:bg-slate-950 hover:text-white">Blog Technique</Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">Insights & Expertise</h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos dernières réflexions sur les technologies émergentes, les meilleures pratiques et les
              tendances qui façonnent l'avenir du développement.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg border-2 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { icon: Code2, value: "50+", label: "Articles publiés" },
                { icon: TrendingUp, value: "25K+", label: "Lectures mensuelles" },
                { icon: User, value: "4", label: "Auteurs experts" },
                { icon: Clock, value: "2x/sem", label: "Nouveaux articles" },
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

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Articles à la Une</h2>
            <p className="text-slate-600">Nos contenus les plus populaires et récents</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.slice(0, 2).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${article.slug || article.id}`}>
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-slate-700 font-mono text-xs">Featured</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString("fr-FR")}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-slate-600 mb-6 leading-relaxed">{article.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-slate-100 text-slate-700 font-mono text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge className="bg-blue-50 text-blue-700 font-mono text-xs">{article.category}</Badge>
                        <div className="flex items-center text-slate-500 text-sm">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {article.views} vues
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
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
                    : "bg-white text-slate-600 hover:bg-slate-100 shadow-sm"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Articles */}
            <div className="lg:col-span-3">
              <motion.div layout className="grid md:grid-cols-2 gap-8">
                <AnimatePresence>
                  {filteredArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="group cursor-pointer"
                    >
                      <Link href={`/blog/${article.slug || article.id}`}>
                        <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                          <div className="relative overflow-hidden">
                            <Image
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              width={400}
                              height={250}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-white/90 text-slate-700 font-mono text-xs">{article.category}</Badge>
                            </div>
                          </div>

                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4 mb-3 text-xs text-slate-500">
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {new Date(article.date).toLocaleDateString("fr-FR")}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {article.readTime}
                              </div>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {article.title}
                            </h3>

                            <p className="text-slate-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                            <div className="flex flex-wrap gap-1 mb-4">
                              {article.tags.slice(0, 2).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="bg-slate-100 text-slate-700 font-mono text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-slate-500 text-xs">
                                <User className="w-3 h-3 mr-1" />
                                {article.author}
                              </div>
                              <div className="flex items-center text-slate-500 text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                {article.views}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredArticles.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                  <div className="text-slate-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-600 mb-2">Aucun article trouvé</h3>
                  <p className="text-slate-500">Essayez avec d'autres mots-clés ou catégories</p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Tags */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Tags Populaires</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm font-mono transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-0 shadow-sm bg-slate-50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Newsletter Technique</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Recevez nos derniers articles et insights directement dans votre boîte mail.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="votre@email.com" />
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      S'abonner
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Articles */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Articles Récents</h3>
                  <div className="space-y-4">
                    {articles.slice(0, 3).map((article) => (
                      <div
                        key={article.id}
                        className="group cursor-pointer"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <h4 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors text-sm mb-1 line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-slate-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(article.date).toLocaleDateString("fr-FR")}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
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
                  src={selectedArticle.image || "/placeholder.svg"}
                  alt={selectedArticle.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6 text-sm text-slate-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(selectedArticle.date).toLocaleDateString("fr-FR")}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedArticle.readTime}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {selectedArticle.author}
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {selectedArticle.views} vues
                  </div>
                </div>

                <Badge className="mb-4 bg-blue-50 text-blue-700 font-mono">{selectedArticle.category}</Badge>

                <h1 className="text-3xl font-bold text-slate-900 mb-6">{selectedArticle.title}</h1>

                <div className="prose prose-slate max-w-none mb-8">
                  <p className="text-lg text-slate-600 leading-relaxed">{selectedArticle.content}</p>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Introduction</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Dans cet article, nous explorons en détail les concepts avancés et les meilleures pratiques pour
                    implémenter des solutions robustes et scalables. Chaque section est accompagnée d'exemples pratiques
                    et de code prêt à utiliser.
                  </p>

                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Concepts Clés</h2>
                  <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
                    <li>Architecture modulaire et découplage</li>
                    <li>Gestion des erreurs et résilience</li>
                    <li>Optimisation des performances</li>
                    <li>Tests automatisés et qualité du code</li>
                  </ul>

                  <div className="bg-slate-50 rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-slate-900 mb-3">💡 Conseil d'Expert</h3>
                    <p className="text-slate-600">
                      L'implémentation de ces concepts nécessite une approche progressive. Commencez par les
                      fondamentaux avant d'ajouter des fonctionnalités avancées.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold text-slate-900 mb-4">Tags de l'article</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-700 font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link href={`/blog/${selectedArticle.slug || selectedArticle.id}`}>
                    <Button className="bg-slate-900 hover:bg-slate-800">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Lire l'article complet
                    </Button>
                  </Link>
                  <Button variant="outline">Partager l'article</Button>
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

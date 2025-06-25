"use client"

import { motion } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  LinkIcon,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Articles data (normalement depuis une API/CMS)
const articles = [
  {
    id: 1,
    slug: "architecture-microservices-guide-2024",
    title: "Architecture Microservices : Guide Complet 2024",
    excerpt:
      "Découvrez les meilleures pratiques pour concevoir et implémenter une architecture microservices moderne et scalable.",
    content: `
# Architecture Microservices : Guide Complet 2024

Les microservices représentent une approche architecturale qui structure une application comme un ensemble de services faiblement couplés. Cette architecture offre de nombreux avantages en termes de scalabilité, de maintenabilité et de déploiement.

## Qu'est-ce que l'Architecture Microservices ?

L'architecture microservices décompose une application monolithique en plusieurs services indépendants, chacun responsable d'une fonctionnalité métier spécifique. Ces services communiquent entre eux via des APIs bien définies.

### Avantages des Microservices

- **Scalabilité indépendante** : Chaque service peut être mis à l'échelle selon ses besoins
- **Technologie diversifiée** : Possibilité d'utiliser différentes technologies par service
- **Déploiement indépendant** : Mise en production sans affecter les autres services
- **Équipes autonomes** : Chaque équipe peut travailler sur son service

## Meilleures Pratiques

### 1. Conception des Services

Chaque microservice doit avoir une responsabilité unique et bien définie. Utilisez le principe de responsabilité unique (SRP) pour déterminer les limites de vos services.

### 2. Communication Inter-Services

Privilégiez les communications asynchrones via des message brokers comme RabbitMQ ou Apache Kafka pour réduire le couplage.

### 3. Gestion des Données

Chaque service doit avoir sa propre base de données pour maintenir l'indépendance et éviter les couplages de données.

## Défis et Solutions

### Complexité Opérationnelle

L'architecture microservices introduit une complexité opérationnelle importante. Utilisez des outils comme Kubernetes pour l'orchestration et des solutions de monitoring comme Prometheus.

### Gestion des Transactions Distribuées

Implémentez le pattern Saga pour gérer les transactions distribuées de manière cohérente.

## Outils et Technologies

- **Orchestration** : Kubernetes, Docker Swarm
- **Service Mesh** : Istio, Linkerd
- **Monitoring** : Prometheus, Grafana, Jaeger
- **CI/CD** : Jenkins, GitLab CI, GitHub Actions

## Conclusion

L'architecture microservices n'est pas une solution miracle, mais elle offre des avantages significatifs pour les applications complexes nécessitant une haute scalabilité. La clé du succès réside dans une planification minutieuse et l'adoption progressive.
    `,
    category: "Architecture",
    author: "Alexandre Martin",
    date: "2024-01-15",
    readTime: "12 min",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Microservices", "Docker", "Kubernetes", "API Gateway"],
    featured: true,
    views: 2500,
  },
  // Ajouter d'autres articles...
]

export default function BlogArticlePage() {
  const params = useParams()
  const router = useRouter()
  const [shareMenuOpen, setShareMenuOpen] = useState(false)

  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return (
      <div className="min-h-screen font-sans">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Article non trouvé</h1>
          <Link href="/blog">
            <Button>Retour au blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = article.title

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl)
      alert("Lien copié dans le presse-papier!")
      return
    }

    window.open(urls[platform as keyof typeof urls], "_blank", "width=600,height=400")
    setShareMenuOpen(false)
  }

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
            className="max-w-4xl mx-auto"
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 hover:bg-slate-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Button>
            </Link>

            <div className="flex items-center space-x-4 mb-6 text-sm text-slate-500">
              <Badge className="bg-blue-50 text-blue-700 font-mono">{article.category}</Badge>
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
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                {article.views} vues
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{article.title}</h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">{article.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-700 font-mono text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setShareMenuOpen(!shareMenuOpen)}
                  className="flex items-center"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Partager
                </Button>

                {shareMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 top-12 bg-white border border-slate-200 rounded-lg shadow-lg p-2 z-10"
                  >
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-slate-50 rounded"
                    >
                      <Twitter className="w-4 h-4 mr-2 text-blue-400" />
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-slate-50 rounded"
                    >
                      <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
                      LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-slate-50 rounded"
                    >
                      <Facebook className="w-4 h-4 mr-2 text-blue-800" />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="flex items-center w-full px-3 py-2 text-sm hover:bg-slate-50 rounded"
                    >
                      <LinkIcon className="w-4 h-4 mr-2 text-slate-600" />
                      Copier le lien
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate prose-lg max-w-none">
              <div
                className="text-slate-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .replace(/\n/g, "<br>")
                    .replace(/#{1,6}\s/g, '<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">')
                    .replace(/<h2[^>]*>/g, '</p><h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">')
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/- (.*?)(<br>|$)/g, '<li class="mb-2">$1</li>'),
                }}
              />
            </div>

            {/* Call to Action */}
            <Card className="mt-16 border-0 bg-slate-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Besoin d'aide pour votre architecture ?</h3>
                <p className="text-slate-600 mb-6">
                  Notre équipe d'experts peut vous accompagner dans la conception et l'implémentation de votre
                  architecture microservices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-slate-900 hover:bg-slate-800">Demander un audit gratuit</Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline">Voir nos services</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Articles similaires</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {articles
                  .filter((a) => a.id !== article.id && a.category === article.category)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`}>
                      <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-blue-50 text-blue-700 font-mono text-xs">
                            {relatedArticle.category}
                          </Badge>
                          <h4 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{relatedArticle.title}</h4>
                          <p className="text-slate-600 text-sm line-clamp-2">{relatedArticle.excerpt}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

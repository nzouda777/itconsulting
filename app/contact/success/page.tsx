"use client"

import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Home, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen font-sans">
      <Header />

      <section className="pt-32 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </motion.div>

                <h1 className="text-3xl font-bold text-slate-900 mb-4">Message envoyé avec succès !</h1>

                <p className="text-lg text-slate-600 mb-8">
                  Merci pour votre message. Notre équipe vous recontactera sous 24h pour discuter de votre projet.
                </p>

                <div className="space-y-4 mb-8 text-left bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900">Prochaines étapes :</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Analyse de votre demande par notre équipe
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Prise de contact sous 24h
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Planification d'un audit technique gratuit
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button className="bg-slate-900 hover:bg-slate-800">
                      <Home className="w-4 h-4 mr-2" />
                      Retour à l'accueil
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="outline">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Lire notre blog
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-500">Une question urgente ? Contactez-nous directement :</p>
                  <div className="flex items-center justify-center mt-2">
                    <Mail className="w-4 h-4 mr-2 text-slate-400" />
                    <a href="mailto:contact@techconsultpro.com" className="text-blue-600 hover:underline">
                      contact@techconsultpro.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

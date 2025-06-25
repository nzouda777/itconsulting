"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Terminal, Github, Linkedin, Twitter } from "lucide-react"

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Développement Web", href: "/web-development" },
      { name: "Applications Mobiles", href: "/mobile-apps" },
      { name: "Cloud & DevOps", href: "/cloud-devops" },
      { name: "Cybersécurité", href: "/cybersecurity" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Audit Technique", href: "/audit" },
      { name: "Architecture Système", href: "/architecture" },
      { name: "Optimisation Performance", href: "/optimization" },
      { name: "Formation Équipes", href: "/training" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { name: "Documentation", href: "/documentation" },
      { name: "Études de Cas", href: "/case-studies" },
      { name: "Guides Techniques", href: "/guides" },
      { name: "API Reference", href: "/api-reference" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { name: "À propos", href: "/about-us" },
      { name: "Équipe", href: "/team" },
      { name: "Carrières", href: "/careers" },
      { name: "Partenaires", href: "/partners" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 group mb-6">
              <Terminal className="w-8 h-8 text-slate-900" />
              <span className="text-xl font-bold font-mono tracking-tight">
                TechConsult<span className="text-blue-600">Pro</span>
              </span>
            </Link>
            <p className="text-slate-600 mb-6 max-w-md">
              Expertise technique avancée pour transformer vos défis digitaux en opportunités de croissance.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:shadow-md transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="font-semibold text-slate-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">© 2024 TechConsultPro. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
              Confidentialité
            </Link>
            <Link href="/terms-of-service" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
              Conditions
            </Link>
            <Link href="/cookie-policy" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

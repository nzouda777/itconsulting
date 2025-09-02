"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Terminal, Github, Linkedin, Facebook, Youtube, Instagram } from "lucide-react"

const footerSections = [
  {
    title: "Entreprise",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/about#teams" },
      // { name: "Careers", href: "/careers" },
      // { name: "Partenaires", href: "/partners" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web & Mobile Developement", href: "/services" },
      { name: "UI/UX & Graphic Design", href: "/services" },
      { name: "Motion Design & Ads", href: "/services" },
    ],
  },
  {
    title: "",
    links: [
      { name: "Virtual Assistant", href: "/services" },
      { name: "Community & Social Media Management", href: "/services" },
      { name: "DevSecOps & Cloud Consulting", href: "/services" },
    ],
  },
  // {
  //   title: "Solutions",
  //   links: [
  //     { name: "Audit Technique", href: "/audit" },
  //     { name: "Architecture Système", href: "/architecture" },
  //     { name: "Optimisation Performance", href: "/optimization" },
  //     { name: "Formation Équipes", href: "/training" },
  //   ],
  // },
  // {
  //   title: "Ressources",
  //   links: [
  //     { name: "Documentation", href: "/documentation" },
  //     { name: "Études de Cas", href: "/case-studies" },
  //     { name: "Guides Techniques", href: "/guides" },
  //     { name: "API Reference", href: "/api-reference" },
  //   ],
  // },

]

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 group mb-6">
              <img src="/logo.png" alt="ITCloudConsultings" className="w-8/12 h-24 object-contain"/>
            </Link>
            <p className="text-slate-600 mb-6 max-w-md">
              Advanced technical expertise to transform your digital challenges into growth opportunities.
            </p>
            
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
          <p className="text-slate-600 text-sm">© 2025 ITCloudConsultings. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Youtube, href: "https://youtube.com" },
                { icon: "TikTok", href: "https://tiktok.com" },
                { icon: Instagram, href: "https://instagram.com" },

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
                  {social.icon === "TikTok" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:w-5 md:h-5  " viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.2 10.1c0 .22-.18.401-.4.39a8 8 0 0 1-3.362-.93c-.281-.15-.638.045-.638.364V15.5a6 6 0 1 1-6.4-5.987a.38.38 0 0 1 .4.387v2.8c0 .22-.18.397-.398.433A2.4 2.4 0 1 0 12.2 15.5V2.9a.4.4 0 0 1 .4-.4h2.8a.43.43 0 0 1 .418.4a4.4 4.4 0 0 0 3.983 3.982c.22.02.4.197.4.418z"></path>
                    </svg>
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

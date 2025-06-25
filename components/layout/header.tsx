"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal } from "lucide-react"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "À propos", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Terminal className="w-8 h-8 text-slate-900 group-hover:text-blue-600 transition-colors" />
              <div className="absolute -inset-1 bg-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </div>
            <span className="text-xl font-bold font-mono tracking-tight">
              TechConsult<span className="text-blue-600">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  pathname === item.href ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="ghost" size="sm">
                Audit Gratuit
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-slate-900 hover:bg-slate-800">
                Démarrer un Projet
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 border-t border-slate-200 pt-4"
            >
              <div className="flex flex-col space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Link href="/contact">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      Audit Gratuit
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="sm" className="w-full bg-slate-900 hover:bg-slate-800">
                      Démarrer un Projet
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal } from "lucide-react"
import  Announcement  from "./announcement"
import { useTranslation, type Locale } from '../../lib/i18n';


interface NavigationProps {
    locale: Locale;
}

export default function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const { t } = useTranslation(locale)
  const navigation = [
    { name: "Home", href: `/${locale}` },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

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
      <Announcement />
      <nav className="2xl:container  max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12  bg-white  py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <img src={`/logo.png`} alt="ITCloudConsultings" className="w-full h-8 object-contain"/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  pathname === item.href ? "text-prime" : "text-slate-600 hover:text-prime"
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
            {/* <Link href="/contact">
              <Button variant="ghost" size="sm">
                Free Audit
              </Button>
            </Link> */}
            <Link href="/contact#contact">
              <Button size="sm" className="bg-gradient-to-l from-prime to-second font-bold">
                Start a Project
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
              className="lg:hidden bg-white mt-4 border-t border-slate-200 pt-4"
            >
              <div className="flex flex-col space-y-2 ">
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
                          ? "text-white bg-second"
                          : "text-slate-600 hover:text-white hover:bg-second"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  {/* <Link href="/contact">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      Free Audit
                    </Button>
                  </Link> */}
                  <Link href="/contact#contact">
                    <Button size="sm" className="w-full bg-gradient-to-l from-prime to-second font-bold">
                      Start a Project
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

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CTA_URL, CTA_TEXT } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Dla kogo', href: '#dla-kogo' },
    { label: 'Program', href: '#program' },
    { label: 'Prowadzący', href: '#prowadzacy' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-heading text-2xl text-primary">
            ARCA
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-light hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button href={CTA_URL} size="default">
              {CTA_TEXT}
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <Container className="py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-light hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button href={CTA_URL} size="default">
                {CTA_TEXT}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CTA_URL } from '@/lib/constants'
import { SEGMENTS } from '@/lib/constants'

export function ForWho() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="dla-kogo" className="py-16 md:py-24 bg-bg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-center mb-4"
          >
            Dla kogo jest ten kurs?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-light text-lg mb-12 max-w-2xl mx-auto"
          >
            Znajdź swoją sytuację. Kliknij i zobacz jak kurs pomoże właśnie Tobie.
          </motion.p>

          <div className="max-w-3xl mx-auto space-y-4">
            {SEGMENTS.map((segment) => {
              const Icon = segment.icon
              const isOpen = openId === segment.id

              return (
                <motion.div
                  key={segment.id}
                  variants={fadeInUp}
                  className="bg-surface rounded-2xl border border-border overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggle(segment.id)}
                    className="w-full flex items-center gap-4 p-5 md:p-6 text-left cursor-pointer hover:bg-bg/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-primary">
                        {segment.name}
                      </h3>
                      <p className="text-text-light text-sm mt-0.5">
                        {segment.hook}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={20} className="text-text-light" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 md:px-6 md:pb-6 space-y-5">
                          <div className="border-t border-border pt-5" />

                          <div>
                            <h4 className="text-sm font-semibold text-text-light uppercase tracking-wider mb-2">
                              Problem
                            </h4>
                            <p className="text-text leading-relaxed">
                              {segment.pain}
                            </p>
                          </div>

                          <div className="bg-accent/5 rounded-xl p-5">
                            <h4 className="text-sm font-semibold text-accent-dark uppercase tracking-wider mb-2">
                              Po kursie
                            </h4>
                            <p className="text-text leading-relaxed">
                              {segment.effect}
                            </p>
                          </div>

                          <div className="flex items-start gap-3">
                            <ArrowRight size={16} className="text-accent mt-1 shrink-0" />
                            <p className="text-sm text-text font-medium leading-relaxed">
                              {segment.socialProof}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Button href={CTA_URL} size="default">
              Sprawdź swój poziom AI
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

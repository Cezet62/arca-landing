import { motion } from 'framer-motion'
import { Brain, Workflow, Target } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const deliverables = [
  {
    icon: Brain,
    title: 'Umiejętność, nie ściągawka',
    description:
      'Nie dostajesz listy „10 promptów". Uczysz się JAK pisać prompty sam — do czegokolwiek. Lista się kończy. Umiejętność zostaje na zawsze.',
  },
  {
    icon: Workflow,
    title: 'Twój system pracy z AI',
    description:
      'Które narzędzie do czego. Jak zacząć dzień z AI. Jak weryfikować wyniki. Nie kolejny PDF do szuflady — nawyk, który wchodzi w Twoją codzienną pracę.',
  },
  {
    icon: Target,
    title: 'Twój projekt',
    description:
      'Automatyzujesz tworzenie dokumentów, planów, analiz — wszystko dopasowane do Twojej pracy. Budujesz prostego agenta, który robi to za Ciebie. Dowód (dla siebie i innych) że umiesz.',
  },
]

export function WhatYouGet() {
  return (
    <section className="py-16 md:py-24 bg-surface">
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
            Co wyniesiesz z kursu?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-light text-lg mb-12 max-w-2xl mx-auto"
          >
            Nie kolejną listę promptów. Nie certyfikat do szuflady.
            Trzy rzeczy, które zostają z Tobą na stałe.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {deliverables.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-bg rounded-2xl p-7 md:p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

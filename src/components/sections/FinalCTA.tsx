import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CTA_URL } from '@/lib/constants'

export function FinalCTA() {
  return (
    <section id="test" className="pt-16 md:pt-24 pb-8 md:pb-12 bg-bg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl mb-5"
          >
            Jeden krok. Dwie minuty.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-light mb-4 leading-relaxed"
          >
            Nie musisz płacić. Nie musisz nic decydować.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text mb-4 leading-relaxed"
          >
            Zrób test diagnostyczny — za 2 minuty wiesz na jakim jesteś poziomie
            i czy ten kurs jest dla Ciebie.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light mb-10 leading-relaxed italic"
          >
            Najgorsze co możesz zrobić? Powiedzieć sobie „zrobię to później".
            Bo „później" zamienia się w „nigdy". Wiem — sam tak robiłem przez pół roku.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button href={CTA_URL} size="large">
              Sprawdź swój poziom AI
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-5 text-sm text-text-light"
          >
            Darmowy quiz. 7 pytań. Wynik od razu.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base text-text"
          >
            Albo od razu{' '}
            <a
              href="/lista.html"
              className="text-accent font-semibold underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition"
            >
              zapisz się na listę oczekujących II edycji →
            </a>
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

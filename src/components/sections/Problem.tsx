import { motion } from 'framer-motion'
import { CircleAlert, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CTA_URL } from '@/lib/constants'

const problems = [
  'Siedzisz na spotkaniu. Ktoś mówi „wrzuciłem to w AI, wyszło w 5 minut". Wszyscy kiwają głowami. Ty też kiwasz — bo co masz zrobić?',
  'Próbowałeś ChatGPT raz czy dwa. Dostałeś jakiś tekst. I co dalej? Nie wiadomo.',
  'Masz 20, 30 lat doświadczenia. Ale w temacie AI czujesz się jak pierwszoklasista. I to uczucie jest do bani.',
  'Webinary, e-booki, „10 promptów które zmienią Twoje życie". Przerabiałeś. Nic się nie zmieniło.',
  'Masz wrażenie że ten pociąg odjeżdża, a ty zostajesz na peronie. Z każdym miesiącem coraz bardziej.',
]

export function Problem() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-center mb-12"
          >
            Brzmi znajomo?
          </motion.h2>

          <div className="space-y-5">
            {problems.map((text, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-4 bg-bg rounded-xl p-5 md:p-6"
              >
                <CircleAlert size={22} className="text-accent mt-0.5 shrink-0" />
                <p className="text-lg md:text-xl text-text leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-10 text-text leading-relaxed text-lg max-w-xl mx-auto"
          >
            Jeśli choć jeden punkt trafia — czytaj dalej.
            Nie musisz tak zostawać. I nie, nie jest za późno.
          </motion.p>

          <motion.div variants={fadeInUp} className="text-center mt-8">
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

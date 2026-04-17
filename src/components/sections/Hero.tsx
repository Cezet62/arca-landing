import { motion } from 'framer-motion'
import { ArrowRight, Clock, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CTA_URL } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.08),transparent_50%)]" />

      <Container className="relative">
        <div className="max-w-3xl mx-auto">
          {/* Tekst — wycentrowany */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-5">
              <Clock size={16} />
              <span>Kurs AI dla Przedsiębiorczych</span>
              <span className="mx-1 text-accent/40">|</span>
              <Users size={16} />
              <span>Małe grupy do 20 osób</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] text-text-inverse leading-tight mb-4"
            >
              AI da Ci tysiąc odpowiedzi w&nbsp;minutę.{' '}
              <span className="text-accent">
                Tylko Ty wiesz, która jest właściwa dla&nbsp;Ciebie.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-text-inverse/70 mb-6 max-w-xl mx-auto leading-relaxed"
            >
              Naucz się pracować z&nbsp;AI powtarzalnie i&nbsp;pod kontrolą.
              4&nbsp;tygodnie. Prostym językiem. Krok po kroku.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={CTA_URL} size="large">
                Sprawdź swój poziom AI
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-3 text-sm text-text-inverse/40"
            >
              Darmowy test. 7 pytań. 2 minuty.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-5 flex justify-center">
              <ul className="space-y-1.5 text-sm md:text-base text-text-inverse/60 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  Pracujesz nad tym, co naprawdę robisz na co dzień
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  10 sesji na żywo — ćwiczysz, pytasz, budujesz
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  Tworzysz własnego asystenta AI — dopasowanego do Twoich zadań
                </li>
              </ul>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-base md:text-lg font-medium text-text-inverse/70"
            >
              <span className="text-accent font-bold">II edycja</span> · czerwiec/lipiec 2026
            </motion.p>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}

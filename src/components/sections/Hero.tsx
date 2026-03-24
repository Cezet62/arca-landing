import { motion } from 'framer-motion'
import { ArrowRight, Clock, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp, slideInLeft, staggerContainer } from '@/lib/animations'
import { CTA_URL, SPOTS_LEFT } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.08),transparent_50%)]" />

      <Container className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Tekst — lewa strona */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left"
          >
            <motion.div variants={slideInLeft} className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-5">
              <Clock size={16} />
              <span>Kurs AI dla Przedsiębiorczych</span>
              <span className="mx-1 text-accent/40">|</span>
              <Users size={16} />
              <span>Małe grupy do 20 osób</span>
            </motion.div>

            <motion.h1
              variants={slideInLeft}
              className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] text-text-inverse leading-tight mb-4"
            >
              AI da Ci tysiąc odpowiedzi w&nbsp;minutę.{' '}
              <span className="text-accent">
                Tylko Ty wiesz, która jest właściwa dla&nbsp;Ciebie.
              </span>
            </motion.h1>

            <motion.p
              variants={slideInLeft}
              className="text-lg md:text-xl text-text-inverse/70 mb-6 max-w-xl leading-relaxed"
            >
              Naucz się pracować z&nbsp;AI powtarzalnie i&nbsp;pod kontrolą.
              4&nbsp;tygodnie. Prostym językiem. Krok po kroku.
            </motion.p>

            <motion.div variants={slideInLeft} className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <Button href={CTA_URL} size="large">
                Sprawdź swój poziom AI
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </motion.div>

            <motion.p
              variants={slideInLeft}
              className="mt-3 text-sm text-text-inverse/40"
            >
              Darmowy test. 7 pytań. 2 minuty.
            </motion.p>

            <motion.div variants={slideInLeft} className="mt-5 flex justify-center md:justify-start">
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
              variants={slideInLeft}
              className="mt-5 text-base md:text-lg font-medium text-text-inverse/70"
            >
              Zostało <span className="text-accent font-bold">{SPOTS_LEFT}</span> miejsc · kwiecień 2026
            </motion.p>
          </motion.div>

          {/* Zdjęcie — prawa strona */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative"
          >
            <img
              src="/hero-placeholder.webp"
              alt="Doświadczony profesjonalista przy biurku"
              className="w-full rounded-2xl object-cover shadow-2xl border border-white/10"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

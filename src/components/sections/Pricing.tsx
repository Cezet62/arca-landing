import { motion } from 'framer-motion'
import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CTA_URL, SPOTS_LEFT } from '@/lib/constants'

const included = [
  '10 warsztatów live (2 sesje w tygodniu, 60 min + Q&A)',
  'Pracujesz na swoich zadaniach — nie na generycznych przykładach',
  'Kończysz z własnym asystentem AI dopasowanym do Twojej pracy',
  'Mała grupa do 20 osób — nie giniesz w tłumie',
  'Nagrania wszystkich sesji — wracasz kiedy chcesz',
  'Materiały i ściągawki do pobrania',
  'Dostęp do zamkniętej grupy uczestników',
]

export function Pricing() {
  return (
    <section id="cena" className="py-16 md:py-24 bg-bg">
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
            className="font-heading text-3xl md:text-4xl text-center mb-4"
          >
            Ile to kosztuje?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-light text-lg mb-12 max-w-2xl mx-auto"
          >
            Wprost. Bez gwiazdek, bez drobnego druku.
          </motion.p>

          {/* Pricing card */}
          <motion.div
            variants={fadeInUp}
            className="bg-surface rounded-2xl border-2 border-accent/30 shadow-lg shadow-accent/5 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-8 py-6 text-center">
              <p className="text-text-inverse/60 text-sm uppercase tracking-wider mb-2">
                Kurs ARCA — pierwsza edycja
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-heading text-5xl md:text-6xl text-text-inverse">
                  1497
                </span>
                <span className="text-text-inverse/60 text-xl">PLN</span>
              </div>
              <p className="text-text-inverse/40 text-sm mt-2">
                jednorazowa płatność
              </p>
            </div>

            {/* What's included */}
            <div className="px-8 py-8">
              <p className="font-semibold text-primary text-sm uppercase tracking-wider mb-5">
                Co dostajesz:
              </p>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={20} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-text leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantee */}
            <div className="mx-8 mb-8 bg-accent/5 border border-accent/20 rounded-xl px-6 py-5">
              <div className="flex items-start gap-4">
                <ShieldCheck size={28} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary mb-1">
                    Gwarancja zwrotu — bez pytań
                  </p>
                  <p className="text-text-light text-sm leading-relaxed">
                    Jeśli po dwóch pierwszych zajęciach uznasz, że to nie jest
                    dla Ciebie — zwracam 100% wpłaty bez pytań.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="px-8 pb-8 text-center">
              <Button href={CTA_URL} size="large" className="w-full sm:w-auto">
                Sprawdź swój poziom AI
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <p className="mt-4 text-sm text-text-light">
                Zostało <span className="text-accent font-semibold">{SPOTS_LEFT}</span> miejsc
                · kwiecień 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

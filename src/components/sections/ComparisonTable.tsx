import { motion } from 'framer-motion'
import { FileText, BarChart3, Users, Calendar, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import type { LucideIcon } from 'lucide-react'

interface ComparisonRow {
  icon: LucideIcon
  task: string
  subtitle: string
  without: string
  withAI: string
  aiPct: number
}

const comparisons: ComparisonRow[] = [
  {
    icon: FileText,
    task: 'Oferta handlowa dla klienta',
    subtitle: 'Zbierasz dane, piszesz, formatujesz, sprawdzasz → podajesz kontekst, AI robi draft, Ty poprawiasz',
    without: '3 godziny',
    withAI: '15 minut',
    aiPct: 8,
  },
  {
    icon: BarChart3,
    task: 'Analiza 40-stronicowego raportu',
    subtitle: 'Czytasz stronę po stronie, robisz notatki → AI wyciąga kluczowe liczby, trendy i ryzyka',
    without: 'Cały wieczór',
    withAI: '5 minut',
    aiPct: 4,
  },
  {
    icon: Mail,
    task: 'Mail do wymagającego klienta',
    subtitle: 'Piszesz, kasujesz, piszesz od nowa → 3 wersje do wyboru w minutę',
    without: '45 minut',
    withAI: '3 minuty',
    aiPct: 7,
  },
  {
    icon: Users,
    task: 'Przygotowanie do spotkania z nowym partnerem',
    subtitle: 'Google, LinkedIn, strona firmy, notatki → AI przygotowuje briefing: firma, branża, pytania',
    without: '1,5 godziny',
    withAI: '10 minut',
    aiPct: 11,
  },
  {
    icon: Calendar,
    task: 'Cotygodniowy raport dla zarządu',
    subtitle: 'Excel, zbieranie danych, formatowanie → AI zbiera, analizuje, generuje — Ty weryfikujesz',
    without: '2 godziny',
    withAI: '20 minut',
    aiPct: 17,
  },
]

export function ComparisonTable() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-center mb-4"
          >
            Ten sam człowiek. Te same zadania. Inne tempo.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-light text-lg mb-14 max-w-2xl mx-auto"
          >
            To nie science fiction. To codzienność osób, które nauczyły się
            pracować z&nbsp;AI.
          </motion.p>

          <div className="space-y-4">
            {comparisons.map((row) => {
              const Icon = row.icon
              return (
                <motion.div
                  key={row.task}
                  variants={fadeInUp}
                  className="bg-bg rounded-2xl p-6 md:p-7 border border-border"
                >
                  {/* Task header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">
                        {row.task}
                      </h3>
                      <p className="text-sm text-text-light mt-1 leading-relaxed">
                        {row.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Bars */}
                  <div className="space-y-2.5 ml-0 md:ml-14">
                    {/* Bez AI */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-text-light uppercase tracking-wider w-14 shrink-0">
                        Bez AI
                      </span>
                      <div className="flex-1 bg-border/40 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-text-light/30"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        />
                      </div>
                      <span className="text-sm text-text-light w-24 text-right shrink-0">
                        {row.without}
                      </span>
                    </div>

                    {/* Z AI */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-accent-dark uppercase tracking-wider w-14 shrink-0">
                        Z AI
                      </span>
                      <div className="flex-1 bg-border/40 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.aiPct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                        />
                      </div>
                      <span className="text-sm text-accent-dark font-semibold w-24 text-right shrink-0">
                        {row.withAI}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 bg-accent/5 border border-accent/20 rounded-2xl p-6 md:p-8 text-center"
          >
            <p className="text-2xl md:text-3xl font-heading text-primary mb-2">
              5–10 godzin tygodniowo
            </p>
            <p className="text-text-light text-lg">
              Tyle odzyskują osoby, które nauczyły się pracować z&nbsp;AI.
              Na co Ty je przeznaczysz?
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center mt-8 max-w-2xl mx-auto"
          >
            <p className="text-text text-lg leading-relaxed">
              Różnica to nie talent i&nbsp;nie technologia. To sposób pracy.
            </p>
            <p className="text-accent font-semibold text-lg mt-2">
              Na kursie uczysz się dokładnie tego.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

import { motion } from 'framer-motion'
import { MessageSquare, FolderOpen, FileText } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function BeforeAfter() {
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
            Ta sama osoba. To samo AI. Inna metoda.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-light text-lg mb-12 max-w-2xl mx-auto"
          >
            Różnica między „AI nie działa" a „jak ja to robiłem bez AI?" pamiętaj, to nie
            technologia jest przewagą — to sposób, w jaki z nią pracujesz.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* PRZED */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-border bg-bg p-6 md:p-8 opacity-75"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <span className="text-sm font-semibold text-text-light uppercase tracking-wider">
                  Przed kursem
                </span>
              </div>

              {/* Mock chat */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare size={14} className="text-text-light" />
                  </div>
                  <div className="bg-surface rounded-xl px-4 py-3 text-sm text-text leading-relaxed">
                    Napisz ofertę dla klienta na usługi consultingowe
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-border/60 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-text-light">
                    AI
                  </div>
                  <div className="bg-surface rounded-xl px-4 py-3 text-sm text-text-light leading-relaxed">
                    Szanowny Panie, mam przyjemność przedstawić ofertę naszych
                    usług consultingowych. Nasza firma posiada wieloletnie
                    doświadczenie w&nbsp;branży i&nbsp;oferuje kompleksowe
                    rozwiązania dopasowane do potrzeb klienta...
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm text-text-light italic">
                  Generyczne. Brzmi jak każda inna oferta. Wyrzucasz i piszesz
                  sam.
                </p>
              </div>
            </motion.div>

            {/* PO */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border-2 border-accent/30 bg-bg p-6 md:p-8 shadow-lg shadow-accent/5"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-accent-dark uppercase tracking-wider">
                  Po kursie
                </span>
              </div>

              {/* Project context */}
              <div className="bg-accent/5 rounded-xl px-4 py-3 mb-4 flex items-center gap-3">
                <FolderOpen size={16} className="text-accent shrink-0" />
                <span className="text-sm font-medium text-text">
                  Projekt: Klienci 2026
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-surface rounded-lg px-3 py-1.5 text-xs text-text-light">
                  <FileText size={12} /> profil-klienta.md
                </span>
                <span className="inline-flex items-center gap-1.5 bg-surface rounded-lg px-3 py-1.5 text-xs text-text-light">
                  <FileText size={12} /> cennik.md
                </span>
                <span className="inline-flex items-center gap-1.5 bg-surface rounded-lg px-3 py-1.5 text-xs text-text-light">
                  <FileText size={12} /> historia.md
                </span>
              </div>

              {/* Mock chat */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare size={14} className="text-accent" />
                  </div>
                  <div className="bg-surface rounded-xl px-4 py-3 text-sm text-text leading-relaxed">
                    Przygotuj ofertę dla Kowalski Transport na Q2
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-accent">
                    AI
                  </div>
                  <div className="bg-surface rounded-xl px-4 py-3 text-sm text-text leading-relaxed">
                    Panie Marku, po naszej rozmowie w&nbsp;styczniu
                    o&nbsp;optymalizacji tras — przygotowałem propozycję
                    dopasowaną do Waszych 3&nbsp;oddziałów. Uwzględniłem
                    sezonowość z&nbsp;poprzednich lat i&nbsp;nowy cennik...
                  </div>
                </div>
              </div>

              <div className="border-t border-accent/20 pt-4">
                <p className="text-sm text-text font-medium italic">
                  Spersonalizowane. Brzmi jakbyś pisał to pół godziny. Zajęło
                  30&nbsp;sekund.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-10 text-text-light text-lg max-w-xl mx-auto"
          >
            Tego uczymy na kursie — nie jak wpisać jedno pytanie,
            ale jak zbudować system, który pracuje z&nbsp;Tobą.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

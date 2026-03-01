import { motion } from 'framer-motion'
import { TrendingUp, Zap, Globe } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const reasons = [
  {
    icon: Zap,
    title: 'AI w 2025 to nie to samo co AI w 2023',
    text: 'Dwa lata temu ChatGPT odpowiadał jak przeciętny student. Dziś pisze lepiej niż większość ludzi, analizuje dokumenty, tworzy prezentacje i rozumie kontekst. Zmiana jest gigantyczna — i przyspiesza.',
  },
  {
    icon: Globe,
    title: 'Darmowe, po polsku, na telefonie',
    text: 'Nie potrzebujesz płatnych narzędzi, angielskiego ani komputera za 10 tysięcy. ChatGPT, Claude, Gemini — działają za darmo, po polsku, w przeglądarce. Bariera wejścia? Tylko mentalna.',
  },
  {
    icon: TrendingUp,
    title: 'Luka rośnie z każdym miesiącem',
    text: 'Ci którzy już używają AI, przyspieszają. Ci którzy nie — zostają w tyle. To jak internet w 2000 roku. Kto wszedł pierwszy, zbudował przewagę. Kto czekał — nadganiał latami.',
  },
]

export function WhyNow() {
  return (
    <section className="py-16 md:py-24 bg-bg">
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
            Dlaczego teraz?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-light text-lg mb-14 max-w-2xl mx-auto"
          >
            Bo okno się otwiera. Ale nie będzie otwarte wiecznie.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reasons.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="bg-surface rounded-2xl p-7 md:p-8 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-10 text-text text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Innymi słowy: AI jest dostępne, proste i zmienia reguły gry.
            Pytanie nie brzmi „czy się uczyć". Pytanie brzmi „czy teraz, czy za rok
            — kiedy wszyscy dookoła już będą to umieć".
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

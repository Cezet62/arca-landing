import { motion } from 'framer-motion'
import { TrendingUp, Zap, Globe } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const reasons = [
  {
    icon: Zap,
    title: '78% firm już używa AI',
    stat: 'McKinsey, 2025',
    text: 'W 2023 było to 55%. Dziś prawie 4 na 5 firm na świecie korzysta z AI w codziennej pracy. To już nie nowinka — to standard. Kto nie wchodzi, ten zostaje.',
  },
  {
    icon: Globe,
    title: 'Osoby z AI zarabiają 56% więcej',
    stat: 'PwC, 2025',
    text: 'Pracownicy z umiejętnościami AI zarabiają ponad połowę więcej niż osoby na podobnych stanowiskach bez tych umiejętności. Rok temu ta różnica wynosiła 25%. Rośnie.',
  },
  {
    icon: TrendingUp,
    title: 'Tylko 1 na 3 osoby przeszła szkolenie',
    stat: 'World Economic Forum, 2026',
    text: 'Większość ludzi jeszcze nie umie pracować z AI. To znaczy, że okno jest otwarte — kto wejdzie teraz, buduje przewagę. Kto poczeka rok — będzie nadganiał.',
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
                  className="bg-surface rounded-2xl p-7 md:p-8 border border-border flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-text-light leading-relaxed flex-1">
                    {item.text}
                  </p>
                  {item.stat && (
                    <p className="text-xs text-text-light/50 mt-4 pt-3 border-t border-border">
                      Źródło: {item.stat}
                    </p>
                  )}
                </motion.div>
              )
            })}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-10 text-text text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Dane mówią jasno: AI zmienia rynek, zmienia zarobki, zmienia zasady.
            Większość ludzi jeszcze się nie nauczyła. To jest Twoje okno.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

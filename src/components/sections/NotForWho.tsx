import { motion } from 'framer-motion'
import { Wand2, Rocket, CalendarX2, Microscope } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import type { LucideIcon } from 'lucide-react'

interface Exclusion {
  icon: LucideIcon
  headline: string
  detail: string
}

const exclusions: Exclusion[] = [
  {
    icon: Wand2,
    headline: 'Szukasz kogoś, kto zrobi to za Ciebie',
    detail:
      'AI to potężne narzędzie, ale wymaga Twojej głowy. Na kursie Ty pracujesz — na swoich zadaniach, własnymi rękami. AI pomaga, przyspiesza, podpowiada. Ale myślenie jest Twoje.',
  },
  {
    icon: Rocket,
    headline: 'Już pracujesz z AI i masz swoje metody',
    detail:
      'Jeśli codziennie korzystasz z AI w pracy i masz wypracowane workflow — ten kurs będzie za prosty. Zrób test diagnostyczny. Powiem Ci szczerze, czy jest sens.',
  },
  {
    icon: CalendarX2,
    headline: 'Nie masz teraz czasu na naukę',
    detail:
      'Dwie sesje live tygodniowo + ćwiczenia to ~4 godziny. Jeśli teraz naprawdę nie masz na to przestrzeni — lepiej poczekaj na następną edycję. Nie chcę brać pieniędzy za coś, co nie da efektu.',
  },
  {
    icon: Microscope,
    headline: 'Interesuje Cię jak AI działa w środku',
    detail:
      'Sieci neuronowe, architektury transformerów, fine-tuning — fascynujące tematy, ale nie tu. Na kursie uczymy JAK pracować z AI, nie jak AI jest zbudowane. Praktyka, nie teoria.',
  },
]

export function NotForWho() {
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
            Dla kogo to NIE jest
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-light text-lg mb-14 max-w-2xl mx-auto"
          >
            Wolę powiedzieć wprost, niż obiecywać cuda. Jeśli pasujesz
            do&nbsp;któregoś z&nbsp;tych opisów — oszczędź sobie czas
            i&nbsp;pieniądze.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {exclusions.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.headline}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-surface rounded-2xl p-6 md:p-7 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-red-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-3">
                    {item.headline}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-10 text-text leading-relaxed text-lg max-w-xl mx-auto"
          >
            Jeśli żaden z&nbsp;tych punktów to nie Ty — czytaj dalej.
            Ten kurs jest właśnie dla Ciebie.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

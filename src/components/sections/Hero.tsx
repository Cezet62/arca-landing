import { motion } from 'framer-motion'
import { ArrowRight, Clock, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp, fadeInDown, staggerContainer } from '@/lib/animations'
import { CTA_URL } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.08),transparent_50%)]" />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInDown} className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Clock size={16} />
            <span>4 tygodnie live</span>
            <span className="mx-1 text-accent/40">|</span>
            <Users size={16} />
            <span>Małe grupy warsztatowe</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-inverse leading-tight mb-6"
          >
            Naucz się AI w 4 tygodnie.{' '}
            <span className="text-accent">Bez żargonu. Bez guru-pozy.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-inverse/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Kurs dla profesjonalistów 50+, którzy słyszą o AI wszędzie
            — ale nie wiedzą od czego zacząć. (Spokojnie. Rok temu ja też nie wiedziałem.)
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={CTA_URL} size="large">
              Sprawdź swój poziom AI
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-sm text-text-inverse/40"
          >
            Darmowy test diagnostyczny. 10 pytań. Wynik od razu.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { fadeInUp } from '@/lib/animations'

export function PS() {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-bg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-text leading-relaxed italic">
            <span className="font-semibold not-italic">PS:</span> Wiesz,
            co daje największą satysfakcję? Nie to, co już osiągnąłeś, ale to
            że wciąż idziesz do przodu. AI mi to przypomniało — po 30 latach
            biznesowej rutyny znowu mogę się rozwijać. I&nbsp;to jest najlepsze
            uczucie, jakie znam.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

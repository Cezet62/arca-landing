import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { FRAMEWORK_LEVELS } from '@/lib/constants'

export function Framework() {
  return (
    <section className="py-16 md:py-24 bg-primary">
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
            className="font-heading text-3xl md:text-4xl text-center text-text-inverse mb-4"
          >
            Twoja ścieżka w ARCA
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-inverse/60 text-lg mb-14 max-w-2xl mx-auto"
          >
            5 poziomów. Ten kurs prowadzi od Studenta do Praktykanta. Innymi słowy:
            od „nie wiem co to prompt" do „używam AI w pracy codziennie".
            Nie musisz zostać ekspertem — wystarczy że ruszysz z miejsca.
          </motion.p>

          <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0">
            {FRAMEWORK_LEVELS.map((level, index) => (
              <motion.div
                key={level.level}
                variants={fadeInUp}
                className={`
                  relative flex-1 flex flex-col items-center text-center p-5 md:p-6 rounded-xl md:rounded-none
                  ${index === 0 ? 'md:rounded-l-2xl' : ''}
                  ${index === FRAMEWORK_LEVELS.length - 1 ? 'md:rounded-r-2xl' : ''}
                  ${level.active
                    ? 'bg-accent text-primary-dark'
                    : 'bg-primary-light text-text-inverse/40'
                  }
                `}
              >
                <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${level.active ? 'text-primary-dark/60' : 'text-text-inverse/20'}`}>
                  Poziom {level.level}
                </span>
                <span className={`font-heading text-xl md:text-2xl mb-1 ${level.active ? 'text-primary-dark' : 'text-text-inverse/40'}`}>
                  {level.name}
                </span>
                <span className={`text-xs ${level.active ? 'text-primary-dark/70' : 'text-text-inverse/20'}`}>
                  {level.description}
                </span>
                {level.active && (
                  <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-primary-dark text-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Ten kurs
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-text-inverse/50 text-sm mt-8"
          >
            Framework ARCA — Akademia Rozwoju Człowieka Aktywnego
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { COURSE_WEEKS } from '@/lib/constants'

export function CourseTimeline() {
  return (
    <section id="program" className="py-16 md:py-24 bg-bg">
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
            4 tygodnie. Od zera do samodzielności.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-light text-lg mb-14 max-w-2xl mx-auto"
          >
            2 sesje live tygodniowo (60 min + Q&A każda). Każdy tydzień buduje na poprzednim.
            Zaczynasz od „co to jest prompt?", kończysz z własnym projektem zrobionym w AI.
          </motion.p>

          <div className="max-w-3xl mx-auto">
            {COURSE_WEEKS.map((week, index) => (
              <motion.div
                key={week.week}
                variants={fadeInUp}
                className="relative flex gap-6 md:gap-8 pb-10 last:pb-0"
              >
                {/* Timeline line */}
                {index < COURSE_WEEKS.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-[calc(100%-3.5rem)] bg-border" />
                )}

                {/* Week number */}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 relative z-10">
                  <span className="text-text-inverse font-bold text-sm">
                    {week.week}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-surface rounded-2xl p-6 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      Tydzień {week.week}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl mb-2">
                    {week.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {week.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

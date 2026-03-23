import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { FRAMEWORK_LEVELS } from '@/lib/constants'

const levelDetails: Record<string, string> = {
  I: 'Spotykasz się z AI po raz pierwszy. Potrzebujesz jasno wytyczonych zadań, które jesteś w stanie zrozumieć i zrealizować przy pomocy Czeladnika. Wykonując proste zadania wzmacniasz swoją motywację do dalszej nauki i zaczynasz rozumieć reguły, które rządzą współpracą z AI.',
  II: 'Radzisz sobie coraz lepiej. Rozumiesz podstawy promptowania i potrafisz samodzielnie rozwiązywać proste zadania. Nadal potrzebujesz pomocy w sytuacjach, które wymagają „spojrzenia z boku". Na tym etapie łatwo o zniechęcenie — przyrost umiejętności nie jest już tak skokowy jak na początku. Dlatego ważne, żeby pomoc była blisko.',
  III: 'Pierwszy poziom, na którym masz świadomość celu i potrafisz samodzielnie opracowywać sposoby dotarcia do niego z pomocą AI. Budujesz własne systemy pracy, umiejętności (skills) i projekty. Pogłębiasz zrozumienie dzieląc się doświadczeniami z innymi na tej samej drodze. To poziom, na którym najłatwiej się zatrzymać — masz wiedzę, która działa. Żeby iść dalej, potrzebujesz silnej motywacji.',
  IV: 'Na tym poziomie nie wystarczy powtarzanie prostych zadań. Automatyzujesz procesy, budujesz agentów, integrujesz AI z innymi narzędziami. Zaczynasz dostrzegać z całą mocą, ile jeszcze nie wiesz w tej dziedzinie. To poziom największego wysiłku intelektualnego.',
  V: 'Masz kompletną wiedzę z dziedziny AI w swoim obszarze. Nawet jeśli czegoś nie wiesz, potrafisz wskazać gdzie to znaleźć. Bawisz się swoimi zdolnościami — łączysz AI z wiedzą branżową w sposób nowatorski, tworząc rozwiązania, które zaskakują nawet Ciebie.',
}

export function Framework() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null)

  return (
    <section id="framework" className="py-16 md:py-24 bg-primary">
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
            5 poziomów. Ten kurs prowadzi od Studenta i Praktykanta DO Czeladnika. Innymi słowy:
            od „nie wiem co to prompt" do „samodzielnie pracuję z AI na co dzień".
          </motion.p>

          <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0">
            {FRAMEWORK_LEVELS.map((level, index) => (
              <motion.div
                key={level.level}
                variants={fadeInUp}
                onClick={() => setActiveLevel(level.level)}
                className={`
                  relative flex-1 flex flex-col items-center text-center p-5 md:p-6 rounded-xl md:rounded-none cursor-pointer transition-all
                  ${index === 0 ? 'md:rounded-l-2xl' : ''}
                  ${index === FRAMEWORK_LEVELS.length - 1 ? 'md:rounded-r-2xl' : ''}
                  ${level.active
                    ? 'bg-accent text-primary-dark hover:bg-accent/90'
                    : 'bg-primary-light text-text-inverse/60 hover:bg-primary-light/80'
                  }
                `}
              >
                <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${level.active ? 'text-primary-dark/60' : 'text-text-inverse/40'}`}>
                  Poziom {level.level}
                </span>
                <span className={`font-heading text-xl md:text-2xl mb-1 ${level.active ? 'text-primary-dark' : 'text-text-inverse/60'}`}>
                  {level.name}
                </span>
                <span className={`text-xs ${level.active ? 'text-primary-dark/70' : 'text-text-inverse/40'}`}>
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
            className="text-center text-text-inverse/40 text-xs mt-4"
          >
            Kliknij w poziom, żeby dowiedzieć się więcej
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-center text-text-inverse/50 text-sm mt-6"
          >
            Framework ARCA — Akademia Rozwoju Człowieka Aktywnego
          </motion.p>
        </motion.div>
      </Container>

      {/* Level detail popup */}
      <AnimatePresence>
        {activeLevel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setActiveLevel(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-lg w-full bg-surface rounded-2xl p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveLevel(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-bg transition-colors cursor-pointer"
              >
                <X size={18} className="text-text-light" />
              </button>

              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                Poziom {activeLevel}
              </p>
              <h3 className="font-heading text-2xl text-primary mb-4">
                {FRAMEWORK_LEVELS.find(l => l.level === activeLevel)?.name}
              </h3>
              <p className="text-text leading-relaxed">
                {levelDetails[activeLevel]}
              </p>

              {FRAMEWORK_LEVELS.find(l => l.level === activeLevel)?.active && (
                <div className="mt-5 bg-accent/10 rounded-xl px-4 py-3">
                  <p className="text-sm text-accent-dark font-medium">
                    Ten poziom jest częścią kursu ARCA
                  </p>
                </div>
              )}
              {activeLevel === 'III' && (
                <div className="mt-5 bg-accent/10 rounded-xl px-4 py-3">
                  <p className="text-sm text-accent-dark font-medium">
                    Cel kursu ARCA. Chętni wchodzą na ten poziom razem z prowadzącym.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

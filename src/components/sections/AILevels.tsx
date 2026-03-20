import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const levels = [
  {
    level: 1,
    label: 'Prosty chat',
    pct: '~95%',
    image: '/ChatGPT.png',
    alt: 'ChatGPT — proste pytanie, generyczna odpowiedź',
    description:
      'Jedno pytanie, generyczna odpowiedź. „Dzień dobry… [Twoje imię / Nazwa firmy]" — AI nie wie o\u00A0Tobie nic.',
  },
  {
    level: 2,
    label: 'Projekt z kontekstem',
    pct: '~5%',
    image: '/ChatGPT_Projekt.png',
    alt: 'ChatGPT z projektem — pliki klienta, cennik, spersonalizowany mail',
    description:
      'AI zna Twojego klienta, Twój cennik, Twój styl. Jedno zdanie — i\u00A0dostajesz maila, który brzmi jakbyś pisał go kwadrans.',
  },
  {
    level: 3,
    label: 'Terminal + automatyzacja',
    pct: '~1%',
    image: null,
    alt: 'Claude Code — 4 spersonalizowane maile wygenerowane automatycznie',
    description:
      '4 klientów, 4 spersonalizowane maile — każdy dopasowany do historii współpracy, tonu i\u00A0indywidualnego rabatu.',
  },
]

function TerminalMockup({ expanded = false }: { expanded?: boolean }) {
  const textSize = expanded ? 'text-sm' : 'text-[10px] md:text-[11px]'
  const padding = expanded ? 'p-6 md:p-8' : 'p-3 md:p-4'
  const spacing = expanded ? 'mb-4' : 'mb-2'
  const spaceY = expanded ? 'space-y-0.5' : 'space-y-px'

  return (
    <div className={`bg-[#1a1a2e] rounded-xl ${padding} font-mono ${textSize} leading-snug h-full`}>
      {/* Prompt */}
      <div className="text-gray-500 mb-0.5">$&nbsp;claude</div>
      <div className={`text-white ${spacing}`}>
        <span className="text-blue-400">&gt;</span> Przeczytaj profile klientów i&nbsp;cennik.
        Dla każdego wygeneruj maila o&nbsp;podwyżce cen.
      </div>

      {/* Reading files */}
      <div className="text-gray-400 mb-0.5">Czytam pliki klientów...</div>
      <div className={`${spaceY} ${spacing}`}>
        <div><span className="text-green-400">✓</span> <span className="text-gray-300">kowalski-transport.md</span></div>
        <div><span className="text-green-400">✓</span> <span className="text-gray-300">nowak-logistics.md</span></div>
        <div><span className="text-green-400">✓</span> <span className="text-gray-300">wisniewska-consulting.md</span></div>
        <div><span className="text-green-400">✓</span> <span className="text-gray-300">zielinski-dev.md</span></div>
      </div>

      {/* Email preview */}
      <div className={`text-gray-400 mb-1`}>Generuję spersonalizowane maile...</div>
      <div className={`border border-gray-700 rounded-lg p-2 ${expanded ? 'p-3' : ''} ${spacing} bg-black/30`}>
        <div className="text-gray-500 text-[9px] uppercase tracking-wider mb-1">mail-kowalski.md</div>
        <div className="text-gray-200">Cześć Marku,</div>
        <div className="text-gray-400">
          po naszym spotkaniu w&nbsp;Krakowie chciałem dać Ci znać z&nbsp;wyprzedzeniem{expanded && ' — od 1 kwietnia aktualizujemy ceny. Współpracujemy od 2018, chcę zaproponować rabat 10% + 5% za polecenia'}...
        </div>
      </div>

      {/* Remaining files */}
      <div className={`${spaceY} ${spacing}`}>
        <div><span className="text-green-400">✓</span> <span className="text-gray-300">mail-kowalski.md</span> <span className="text-gray-600">— rabat 15%</span></div>
        <div><span className="text-green-400">✓</span> <span className="text-gray-300">mail-nowak.md</span> <span className="text-gray-600">— ton formalny</span></div>
        <div><span className="text-green-400">✓</span> <span className="text-gray-300">mail-wisniewska.md</span> <span className="text-gray-600">— projekt PZU</span></div>
        <div><span className="text-green-400">✓</span> <span className="text-gray-300">mail-zielinski.md</span> <span className="text-gray-600">— rabat 10%</span></div>
      </div>

      {/* Done */}
      <div className="text-green-400 font-semibold">Gotowe — 4 maile w demo/maile/</div>
      <div className="text-gray-500 mt-1">Wygenerowano w 49 sekund</div>
    </div>
  )
}

export function AILevels() {
  const [activeLevel, setActiveLevel] = useState<number | null>(null)

  // Block body scroll when lightbox is open
  useEffect(() => {
    if (activeLevel) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeLevel])

  return (
    <section className="py-16 md:py-24 bg-primary overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-center text-text-inverse mb-4"
          >
            Trzy poziomy pracy z&nbsp;AI
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-inverse/60 text-lg mb-14 max-w-2xl mx-auto"
          >
            Każdy musi kiedyś wysłać trudnego maila.
            Różnica? Sposób, w&nbsp;jaki pracujesz z&nbsp;AI.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {levels.map((item) => (
              <motion.div
                key={item.level}
                variants={fadeInUp}
                className="flex flex-col"
              >
                {/* Level badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                      {item.level}
                    </span>
                    <span className="font-semibold text-text-inverse">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-text-inverse/40 uppercase tracking-wider">
                    {item.pct} ludzi
                  </span>
                </div>

                {/* Screenshot or Terminal mockup — clickable */}
                <button
                  onClick={() => setActiveLevel(item.level)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border shadow-2xl mb-5 cursor-pointer group ${
                    item.image
                      ? 'border-white/10 bg-white'
                      : 'border-white/10 bg-[#1a1a2e]'
                  }`}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-contain object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 overflow-hidden">
                      <TerminalMockup />
                    </div>
                  )}

                  {/* Tap/hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-center pb-3 md:items-center md:pb-0">
                    <div className="opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:p-3 flex items-center gap-1.5">
                      <ZoomIn size={16} className="text-white md:w-6 md:h-6" />
                      <span className="text-white text-xs md:hidden">Powiększ</span>
                    </div>
                  </div>

                </button>

                {/* Description */}
                <p className="text-text-inverse/70 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 text-center max-w-2xl mx-auto"
          >
            <div className="inline-block bg-accent/10 border border-accent/20 rounded-2xl px-8 py-6">
              <p className="text-text-inverse text-lg leading-relaxed">
                Na kursie prowadzę Cię od poziomu 1 do poziomu 2.
                <br className="hidden md:block" />
                Najambitniejsi wejdą ze mną na poziom 3 —{' '}
                <span className="text-accent font-medium">
                  i&nbsp;sami zobaczą, czy chcą iść dalej.
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {activeLevel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90"
            onClick={() => setActiveLevel(null)}
          >
            {/* Fixed close button — always visible, always tappable */}
            <button
              onClick={() => setActiveLevel(null)}
              className="fixed top-4 right-4 z-[60] w-11 h-11 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 active:bg-white/30 transition-colors cursor-pointer"
            >
              <X size={22} className="text-white" />
            </button>

            {/* Scrollable content area */}
            <div className="absolute inset-0 overflow-y-auto overscroll-contain">
              <div
                className="min-h-full flex items-start md:items-center justify-center p-4 pt-16 pb-8 md:p-8"
                onClick={(e) => {
                  // Close only when clicking the padding area, not the content
                  if (e.target === e.currentTarget) setActiveLevel(null)
                }}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative max-w-5xl w-full"
                >
                  {(() => {
                    const item = levels.find(l => l.level === activeLevel)!
                    return (
                      <>
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                            {item.level}
                          </span>
                          <span className="font-semibold text-white text-lg">
                            {item.label}
                          </span>
                          <span className="text-sm text-white/40">
                            {item.pct} ludzi
                          </span>
                        </div>

                        {/* Full-size content */}
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.alt}
                              className="w-full h-auto block"
                            />
                          ) : (
                            <TerminalMockup expanded />
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-white/70 leading-relaxed text-base mt-4 max-w-2xl">
                          {item.description}
                        </p>
                      </>
                    )
                  })()}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

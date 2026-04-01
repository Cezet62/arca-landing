import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const certificates = [
  {
    badge: '/CAIBA-badge.png',
    cert: '/CAIBA.png',
    alt: 'Certified AI Business Associate',
    inProgress: false,
  },
  {
    badge: '/CAIWB-badge.png',
    cert: '/CAIWB.png',
    alt: 'Certified AI Web Builder',
    inProgress: false,
  },
  {
    badge: '/CAIBP-badge.png',
    cert: null,
    alt: 'Certified AI Business Professional — w trakcie certyfikacji',
    inProgress: true,
  },
]

export function About() {
  const [activeCert, setActiveCert] = useState<string | null>(null)

  return (
    <section id="prowadzacy" className="py-16 md:py-24 bg-surface">
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
            className="font-heading text-3xl md:text-4xl text-center mb-14"
          >
            Prowadzący — <a href="https://www.ziarkowskicezary.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors">Cezary Ziarkowski</a>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
            {/* Sticky photo — pins to viewport on desktop while text scrolls */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-2 md:sticky md:top-28"
            >
              <img
                src="/cz.webp"
                alt="Cezary Ziarkowski"
                className="w-full aspect-[4/5] object-cover object-top rounded-2xl border border-border"
              />
              <div className="grid grid-cols-3 gap-2 pt-4">
                {certificates.map((cert) => (
                  <button
                    key={cert.alt}
                    onClick={() => cert.cert && setActiveCert(cert.cert)}
                    className={`relative flex items-center justify-center p-2 rounded-xl bg-bg border border-border transition-all ${
                      cert.cert
                        ? 'cursor-pointer hover:border-accent hover:shadow-md'
                        : 'cursor-default'
                    } ${cert.inProgress ? 'opacity-50' : ''}`}
                  >
                    <img
                      src={cert.badge}
                      alt={cert.alt}
                      className="w-full h-auto"
                    />
                    {cert.inProgress && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[9px] bg-accent text-white px-1.5 py-0.5 rounded-full whitespace-nowrap">
                        w trakcie
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Scrolling bio */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-3 space-y-5"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-text">
                Od ponad <span className="font-semibold text-primary">30 lat</span> pracuję
                w&nbsp;finansach i&nbsp;na rynkach kapitałowych — zarządy, rady nadzorcze,
                giełda, analizy, transakcje — to mój chleb codzienny.
              </p>

              <p className="text-lg text-text leading-relaxed">
                Półtora roku temu dołożyłem do tego coś, o&nbsp;co bym się wcześniej nie podejrzewał —
                sztuczną inteligencję. Ktoś mi pokazał. Nie teoria, nie slajdy.
                Usiadł obok mnie i&nbsp;powiedział: „spróbuj tak".
                I&nbsp;spróbowałem.
              </p>

              <p className="text-lg text-text leading-relaxed">
                Szybko się okazało, że AI to nie magia — to narzędzie.
                Jak Excel w&nbsp;latach 90. Kto się nauczył, zdobył przewagę.
                Kto nie — dalej liczył na kalkulatorze.
                (Nic w&nbsp;tym złego, ale różnica w&nbsp;prędkości — gigantyczna.)
              </p>

              <p className="text-lg text-text leading-relaxed">
                Od tego momentu AI stało się częścią mojego codziennego życia.
                Nie zastępuje 30 lat doświadczenia — <strong>wzmacnia je</strong>.
                Robię w&nbsp;minuty to, co kiedyś zajmowało godziny.
                I&nbsp;nie zostałem programistą — zostałem profesjonalistą z&nbsp;nowym narzędziem.
              </p>

              <p className="text-lg text-text leading-relaxed">
                Nie jestem guru. Jestem{' '}
                <a href="#framework" className="font-semibold text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">czeladnikiem</a> —
                krok przed Tobą na tej samej drodze. I&nbsp;właśnie dlatego
                wiem czego potrzebujesz na starcie. Bo sam tam byłem półtora roku temu.
              </p>

              <div className="bg-accent/5 rounded-xl p-5 border-l-4 border-accent">
                <p className="text-lg font-heading text-primary italic">
                  "Jeśli ja dałem radę — jaką Ty masz wymówkę?"
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Certificate popup */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-lg border border-border cursor-pointer hover:bg-bg transition-colors z-10"
              >
                <X size={20} className="text-text" />
              </button>
              <img
                src={activeCert}
                alt="Certyfikat"
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

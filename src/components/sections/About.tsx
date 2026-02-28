import { motion } from 'framer-motion'
import { Award, TrendingUp, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const credentials = [
  { icon: TrendingUp, label: '30 lat w biznesie i finansach' },
  { icon: Award, label: 'Exit za 30 mln PLN' },
  { icon: Zap, label: 'Uczył się AI od zera w 2025' },
]

export function About() {
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
            Kim jestem?
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
              <div className="flex flex-wrap gap-2 pt-4">
                {credentials.map((cred) => {
                  const Icon = cred.icon
                  return (
                    <div
                      key={cred.label}
                      className="inline-flex items-center gap-2 bg-bg rounded-lg px-3 py-1.5 text-xs font-medium text-text"
                    >
                      <Icon size={14} className="text-accent" />
                      {cred.label}
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Scrolling bio */}
            <motion.div
              variants={fadeInUp}
              className="md:col-span-3 space-y-5"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-text">
                Mam <span className="font-semibold text-primary">63 lata</span>.
                30 lat w finansach i biznesie. Zarządzam spółkami giełdowymi.
                Jedną z firm biotech, którą zbudowaliśmy od zera, sprzedaliśmy za 30 mln zł.
              </p>

              <p className="text-lg text-text leading-relaxed">
                Innymi słowy — nie jestem przypadkowym gościem z internetu.
              </p>

              <p className="text-lg text-text leading-relaxed">
                A rok temu? Siedziałem przed ekranem i googlowałem
                „co to jest prompt". (Nie żartuję.) Ktoś na spotkaniu
                rzucił „przegoń to przez ChatGPT", a ja pokiwałem
                głową — bo co miałem zrobić?
              </p>

              <p className="text-lg text-text leading-relaxed">
                Potem ktoś mi pokazał. Nie guru z YouTube'a.
                Nie webinar za 997 złotych. Normalny człowiek, który
                powiedział: „spróbuj tak". I spróbowałem.
              </p>

              <p className="text-lg text-text leading-relaxed">
                Szybko się okazało, że AI to nie magia — to narzędzie.
                Jak Excel w latach 90. Kto się nauczył — wygrał.
                Kto nie — dalej liczył na kalkulatorze.
                (Nic w tym złego, ale różnica w prędkości — gigantyczna.)
              </p>

              <p className="text-lg text-text leading-relaxed">
                Dziś buduję firmy z AI. Automatyzuję procesy. Piszę
                kod — ja, człowiek który nigdy nie był programistą.
                Nie dlatego że jestem geniuszem technologicznym.
                Dlatego że ktoś mi pokazał od czego zacząć.
              </p>

              <p className="text-lg text-text leading-relaxed">
                Nie jestem guru. Jestem{' '}
                <span className="font-semibold text-primary">czeladnikiem</span> —
                krok przed Tobą na tej samej drodze. I właśnie dlatego
                wiem czego potrzebujesz na starcie. Bo sam tam byłem rok temu.
              </p>

              <div className="bg-accent/5 rounded-xl p-5 border-l-4 border-accent">
                <p className="text-lg font-heading text-primary italic">
                  "Jeśli ja jako 63-latek to robię — jaką Ty masz wymówkę?"
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

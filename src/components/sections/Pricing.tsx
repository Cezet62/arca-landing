import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, CalendarDays } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { GOOGLE_SHEET_URL, SPOTS_LEFT } from '@/lib/constants'

const included = [
  '10 warsztatów live (2 sesje w tygodniu, 60 min + Q&A)',
  'Pracujesz na swoich zadaniach — nie na generycznych przykładach',
  'Kończysz z własnym asystentem AI dopasowanym do Twojej pracy',
  'Mała grupa do 20 osób — nie giniesz w tłumie',
  'Nagrania wszystkich sesji — wracasz kiedy chcesz',
  'Materiały i ściągawki do pobrania',
  'Dostęp do zamkniętej grupy uczestników',
]

export function Pricing() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          poziom: 'Spotkanie',
          wynik: 'Zapis na spotkanie',
          kwalifikuje_sie: 'Tak',
        }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="spotkanie" className="py-16 md:py-24 bg-bg">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-center mb-4"
          >
            Co dostajesz na kursie?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-text-light text-lg mb-12 max-w-2xl mx-auto"
          >
            Konkretne umiejętności, nie slajdy do zapomnienia.
          </motion.p>

          {/* What's included */}
          <motion.div
            variants={fadeInUp}
            className="bg-surface rounded-2xl border border-border shadow-sm px-8 py-8 mb-12"
          >
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={20} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-text leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Meeting signup */}
          <motion.div
            variants={fadeInUp}
            className="bg-primary rounded-2xl px-8 py-10 text-center"
          >
            <CalendarDays size={32} className="text-accent mx-auto mb-4" />
            <h3 className="font-heading text-2xl md:text-3xl text-text-inverse mb-3">
              Chcesz zobaczyć, jak to działa?
            </h3>
            <p className="text-text-inverse/70 text-lg leading-relaxed max-w-xl mx-auto mb-2">
              Zapraszam Cię na{' '}
              <strong className="text-text-inverse">darmowe spotkanie online</strong>,
              na&nbsp;którym pokażę na żywo, jak wygląda praca z&nbsp;AI w&nbsp;praktyce.
            </p>
            <p className="text-text-inverse/50 text-base mb-8">
              Żadnych slajdów. Żadnego bełkotu. Zobaczysz mój ekran i&nbsp;to,
              co naprawdę robię każdego dnia.
            </p>

            {status === 'success' ? (
              <div className="bg-accent/10 border border-accent/30 rounded-xl px-6 py-5 max-w-md mx-auto">
                <p className="text-text-inverse font-semibold text-lg mb-1">Gotowe!</p>
                <p className="text-text-inverse/70 text-sm">
                  Dziękuję za zapis. Sprawdź swoją skrzynkę — zaproszenie już leci.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Twoje imię"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-text-inverse placeholder:text-text-inverse/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Twój email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-text-inverse placeholder:text-text-inverse/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    'Wysyłam...'
                  ) : (
                    <>
                      Zapisuję się na spotkanie
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-300 text-sm">
                    Coś poszło nie tak. Spróbuj ponownie.
                  </p>
                )}
                <p className="text-text-inverse/40 text-xs">
                  Twoje dane są bezpieczne. Nie wysyłam spamu. Dostaniesz zaproszenie
                  na&nbsp;spotkanie i&nbsp;ewentualne informacje o&nbsp;ARCA — nic więcej.
                </p>
              </form>
            )}

            <p className="mt-6 text-sm text-text-inverse/50">
              Zostało <span className="text-accent font-semibold">{SPOTS_LEFT}</span> miejsc
              · pierwsza edycja: kwiecień 2026
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

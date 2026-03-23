import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, CalendarDays, Video, Users, UserCheck, BookOpen, Globe, Monitor } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { GOOGLE_SHEET_URL, SPOTS_LEFT } from '@/lib/constants'
import type { LucideIcon } from 'lucide-react'

interface IncludedItem {
  icon: LucideIcon
  text: string
  highlight?: boolean
}

const included: IncludedItem[] = [
  { icon: Monitor, text: '8 warsztatów live (2 sesje w tygodniu, 90 min każda)' },
  { icon: CalendarDays, text: '2 warsztaty weekendowe' },
  { icon: Video, text: 'Nagrania i materiały dostępne przez rok na platformie Skool' },
  { icon: Check, text: 'Wszystko robisz w swoim środowisku — Twoje maile, Twoje raporty, Twoje dokumenty' },
  { icon: Users, text: 'Mała grupa do 20 osób' },
  { icon: UserCheck, text: 'Godzina konsultacji 1:1 z prowadzącym' },
  { icon: ArrowRight, text: 'Kończysz szkolenie z automatyzacją dopasowaną do Twojej pracy, własną stroną WWW i systemem zarządzania wiedzą', highlight: true },
]

const weekendWorkshops = [
  {
    icon: BookOpen,
    title: 'NotebookLM',
    description: 'Narzędzie, które zamienia Twoje dokumenty w podcasty, prezentacje, mapy myśli i streszczenia.',
  },
  {
    icon: Globe,
    title: 'Budowanie stron z AI',
    description: 'Twoja strona, Twój pomysł, Ty decydujesz co na niej jest. Od zera do działającej strony w internecie.',
  },
]

export function Pricing() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
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
            className="font-heading text-3xl md:text-4xl text-center mb-14"
          >
            Co dostajesz na kursie?
          </motion.h2>

          {/* What's included — grid */}
          <motion.div variants={fadeInUp} className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.text}
                    className={`flex items-start gap-4 rounded-2xl p-5 border transition-colors ${
                      item.highlight
                        ? 'bg-accent/5 border-accent/20 md:col-span-2'
                        : 'bg-surface border-border'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      item.highlight ? 'bg-accent/15' : 'bg-primary/5'
                    }`}>
                      <Icon size={20} className={item.highlight ? 'text-accent' : 'text-primary/70'} />
                    </div>
                    <span className={`text-text leading-relaxed pt-2 ${item.highlight ? 'font-medium' : ''}`}>
                      {item.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Weekend workshops — cards */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-5 text-center">
              Warsztaty weekendowe
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {weekendWorkshops.map((ws) => {
                const Icon = ws.icon
                return (
                  <div
                    key={ws.title}
                    className="bg-surface rounded-2xl border border-border p-6 md:p-7"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h4 className="font-heading text-xl text-primary mb-2">{ws.title}</h4>
                    <p className="text-text-light leading-relaxed">{ws.description}</p>
                  </div>
                )
              })}
            </div>
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
            <div className="mb-8" />

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
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-accent"
                  />
                  <span className="text-sm text-text-inverse/60 leading-relaxed text-left">
                    Wyrażam zgodę na kontakt mailowy w&nbsp;sprawie kursu ARCA
                  </span>
                </label>
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

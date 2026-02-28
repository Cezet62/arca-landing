import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface PrivacyProps {
  isOpen: boolean
  onClose: () => void
}

export function Privacy({ isOpen, onClose }: PrivacyProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-surface rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-text-light hover:text-text transition-colors cursor-pointer z-10"
              aria-label="Zamknij"
            >
              <X size={24} />
            </button>

            <div className="p-6 md:p-10">
              <h2 className="font-heading text-2xl md:text-3xl text-primary mb-6">
                Polityka prywatności
              </h2>

              <div className="space-y-5 text-text-light leading-relaxed text-sm">
                <section>
                  <h3 className="font-semibold text-text mb-2">
                    1. Administrator danych
                  </h3>
                  <p>
                    Administratorem danych osobowych jest Cezary Ziarkowski,
                    prowadzący projekt ARCA (Akademia Rozwoju Człowieka
                    Aktywnego). Kontakt: ziarkowskicezary@gmail.com
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-text mb-2">
                    2. Jakie dane zbieramy
                  </h3>
                  <p>
                    Zbieramy wyłącznie dane podane dobrowolnie przez formularz
                    na stronie: imię oraz adres email. Dane te służą wyłącznie
                    do kontaktu w sprawie kursu ARCA.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-text mb-2">
                    3. Cel przetwarzania
                  </h3>
                  <p>
                    Dane przetwarzane są w celu przesłania informacji o kursie
                    ARCA, w tym szczegółów spotkania onboardingowego, na
                    podstawie wyrażonej zgody (art. 6 ust. 1 lit. a RODO).
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-text mb-2">
                    4. Okres przechowywania
                  </h3>
                  <p>
                    Dane przechowywane są do momentu wycofania zgody lub
                    zakończenia kontaktu w sprawie kursu.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-text mb-2">
                    5. Twoje prawa
                  </h3>
                  <p>
                    Masz prawo do dostępu do swoich danych, ich sprostowania,
                    usunięcia, ograniczenia przetwarzania oraz wycofania zgody w
                    dowolnym momencie. W celu realizacji tych praw skontaktuj
                    się: ziarkowskicezary@gmail.com
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-text mb-2">
                    6. Udostępnianie danych
                  </h3>
                  <p>
                    Dane nie są udostępniane podmiotom trzecim w celach
                    marketingowych. Formularze obsługiwane są przez serwis
                    FormSubmit.co, który przetwarza dane wyłącznie w celu
                    dostarczenia wiadomości.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-text mb-2">
                    7. Pliki cookies
                  </h3>
                  <p>
                    Strona nie wykorzystuje plików cookies do śledzenia
                    użytkowników ani celów reklamowych.
                  </p>
                </section>
              </div>

              <div className="mt-8 pt-6 border-t border-border text-xs text-text-light">
                Ostatnia aktualizacja: luty 2026
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { useState, useEffect, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, CheckCircle2, Sparkles, Mail } from 'lucide-react'
import { QUIZ_QUESTIONS, QUIZ_RESULTS, GOOGLE_SHEET_URL } from '@/lib/constants'

interface QuizProps {
  isOpen: boolean
  onClose: () => void
}

type Phase = 'questions' | 'form' | 'result'

function getLevel(score: number) {
  if (score <= 6) return 'student'
  if (score <= 13) return 'praktykant'
  return 'czeladnik'
}

const slideVariants = {
  enter: { x: 60, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -60, opacity: 0 },
}

export function Quiz({ isOpen, onClose }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [phase, setPhase] = useState<Phase>('questions')
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setCurrentQuestion(0)
        setAnswers([])
        setPhase('questions')
        setSelectedAnswer(null)
        setName('')
        setEmail('')
        setConsent(false)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const score = answers.reduce((sum, a) => sum + a, 0)
  const levelKey = getLevel(score)
  const result = QUIZ_RESULTS[levelKey]

  const handleAnswer = (points: number, index: number) => {
    setSelectedAnswer(index)

    setTimeout(() => {
      const newAnswers = [...answers, points]
      setAnswers(newAnswers)
      setSelectedAnswer(null)

      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
      } else {
        setPhase('form')
      }
    }, 400)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          name,
          email,
          poziom: `${result.name} (${result.level})`,
          wynik: `${score}/21`,
          kwalifikuje_sie: result.qualifies ? 'Tak' : 'Nie',
        }),
      })
    } catch {
      // Still show result even if submission fails
    }

    setPhase('result')
    setIsSubmitting(false)
  }

  const progress = phase === 'questions'
    ? ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100
    : 100

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
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Quiz card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-surface rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-text-light hover:text-text transition-colors cursor-pointer z-10"
              aria-label="Zamknij"
            >
              <X size={24} />
            </button>

            {/* Progress bar */}
            <div className="h-1 bg-border">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>

            <div className="p-6 md:p-10">
              <AnimatePresence mode="wait">
                {/* QUESTIONS PHASE */}
                {phase === 'questions' && (
                  <motion.div
                    key={`q-${currentQuestion}`}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-sm font-semibold text-accent">
                        Pytanie {currentQuestion + 1}
                      </span>
                      <span className="text-sm text-text-light">
                        z {QUIZ_QUESTIONS.length}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl text-primary mb-8 leading-relaxed">
                      {QUIZ_QUESTIONS[currentQuestion].scenario}
                    </h3>

                    <div className="space-y-3">
                      {QUIZ_QUESTIONS[currentQuestion].answers.map(
                        (answer, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswer(answer.points, index)}
                            disabled={selectedAnswer !== null}
                            className={`
                              w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer
                              ${
                                selectedAnswer === index
                                  ? 'border-accent bg-accent/10 text-primary'
                                  : 'border-border hover:border-accent/50 hover:bg-bg text-text'
                              }
                              ${selectedAnswer !== null && selectedAnswer !== index ? 'opacity-50' : ''}
                            `}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`
                                  shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold
                                  ${
                                    selectedAnswer === index
                                      ? 'bg-accent text-primary-dark'
                                      : 'bg-bg text-text-light'
                                  }
                                `}
                              >
                                {String.fromCharCode(65 + index)}
                              </span>
                              <span className="leading-relaxed pt-1">
                                {answer.text}
                              </span>
                            </div>
                          </button>
                        )
                      )}
                    </div>
                  </motion.div>
                )}

                {/* FORM PHASE — email before result */}
                {phase === 'form' && (
                  <motion.div
                    key="form"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
                      >
                        <Mail size={36} className="text-accent" />
                      </motion.div>
                      <h3 className="font-heading text-2xl md:text-3xl text-primary mb-2">
                        Twój wynik jest gotowy!
                      </h3>
                      <p className="text-text-light">
                        Podaj dane, żeby zobaczyć swój poziom AI
                        i&nbsp;otrzymać szczegóły spotkania.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="max-w-md mx-auto space-y-4"
                    >
                      <div>
                        <label
                          htmlFor="quiz-name"
                          className="block text-sm font-medium text-text mb-1.5"
                        >
                          Imię
                        </label>
                        <input
                          id="quiz-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Twoje imię"
                          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none transition-colors text-text"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="quiz-email"
                          className="block text-sm font-medium text-text mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          id="quiz-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="twoj@email.pl"
                          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none transition-colors text-text"
                        />
                      </div>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="mt-1 w-4 h-4 accent-accent"
                        />
                        <span className="text-sm text-text-light leading-relaxed">
                          Wyrażam zgodę na kontakt mailowy w sprawie kursu
                          ARCA
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Wysyłam...' : 'Zobacz swój wynik'}
                        {!isSubmitting && <ArrowRight size={20} />}
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* RESULT PHASE */}
                {phase === 'result' && (
                  <motion.div
                    key="result"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
                    >
                      <Sparkles size={36} className="text-accent" />
                    </motion.div>

                    <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Twój wynik: {score}/21
                    </p>

                    <h3 className="font-heading text-3xl md:text-4xl text-primary mb-2">
                      Poziom {result.level}: {result.name}
                    </h3>

                    {result.qualifies && (
                      <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <CheckCircle2 size={16} />
                        Kwalifikujesz się na kurs ARCA
                      </div>
                    )}

                    {!result.qualifies && (
                      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <CheckCircle2 size={16} />
                        Masz solidne podstawy
                      </div>
                    )}

                    <p className="text-lg text-text leading-relaxed max-w-lg mx-auto mb-6">
                      {result.description}
                    </p>

                    <p className="text-sm text-text-light mb-8">
                      {result.qualifies
                        ? 'Szczegóły spotkania onboardingowego wyślę na podany adres email.'
                        : 'Dam znać na podany adres email, gdy kurs zaawansowany będzie gotowy.'}
                    </p>

                    <button
                      onClick={onClose}
                      className="text-accent hover:text-accent-dark font-medium transition-colors cursor-pointer"
                    >
                      Wróć do strony
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

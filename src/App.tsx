import { useState, useEffect, useCallback } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { WhyNow } from '@/components/sections/WhyNow'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { ForWho } from '@/components/sections/ForWho'
import { NotForWho } from '@/components/sections/NotForWho'
import { WhatYouGet } from '@/components/sections/WhatYouGet'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { AILevels } from '@/components/sections/AILevels'
import { CourseTimeline } from '@/components/sections/CourseTimeline'
import { About } from '@/components/sections/About'
import { Framework } from '@/components/sections/Framework'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { PS } from '@/components/sections/PS'
import { Quiz } from '@/components/sections/Quiz'
import { Privacy } from '@/components/sections/Privacy'

function App() {
  const [quizOpen, setQuizOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  const openQuiz = useCallback(() => setQuizOpen(true), [])

  const closeQuiz = useCallback(() => {
    setQuizOpen(false)
    if (window.location.hash === '#quiz') {
      history.replaceState(null, '', window.location.pathname)
    }
  }, [])

  // Open quiz when hash is #quiz (click or direct URL)
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#quiz') {
        openQuiz()
      }
    }

    handleHash() // check on mount
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [openQuiz])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhyNow />
        <ComparisonTable />
        <ForWho />
        <NotForWho />
        <WhatYouGet />
        <BeforeAfter />
        <CourseTimeline />
        <AILevels />
        <About />
        <Framework />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <PS />
      </main>
      <Footer onPrivacyClick={() => setPrivacyOpen(true)} />
      <Quiz isOpen={quizOpen} onClose={closeQuiz} />
      <Privacy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  )
}

export default App

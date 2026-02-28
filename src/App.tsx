import { useState, useEffect, useCallback } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { WhyNow } from '@/components/sections/WhyNow'
import { ForWho } from '@/components/sections/ForWho'
import { WhatYouGet } from '@/components/sections/WhatYouGet'
import { CourseTimeline } from '@/components/sections/CourseTimeline'
import { About } from '@/components/sections/About'
import { Framework } from '@/components/sections/Framework'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Quiz } from '@/components/sections/Quiz'

function App() {
  const [quizOpen, setQuizOpen] = useState(false)

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
        <ForWho />
        <WhatYouGet />
        <CourseTimeline />
        <About />
        <Framework />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Quiz isOpen={quizOpen} onClose={closeQuiz} />
    </>
  )
}

export default App

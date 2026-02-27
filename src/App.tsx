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

function App() {
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
    </>
  )
}

export default App

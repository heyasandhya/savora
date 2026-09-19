import React from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './sections/HeroSection.jsx'
import About from './sections/About.jsx'
import Stats from './sections/Stats.jsx'
import Dishes from './sections/Dishes.jsx'
import Features from './sections/Features.jsx'
import BookingProcess from './sections/BookingProcess.jsx'
import Timing from './sections/Timing.jsx'
import TestimonialSec from './sections/TestimonialSec.jsx'
import FAQs from './sections/FAQs.jsx'
import CTA from './sections/CTA.jsx'
import Footer from './components/Footer.jsx'
import LenisScroll from './components/LenisScroll.jsx'

const App = () => {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <TestimonialSec />
      <FAQs />
      <CTA />
      <Footer />

    </>
  )
}

export default App

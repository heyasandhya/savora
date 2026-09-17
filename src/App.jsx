import React from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './sections/HeroSection.jsx'
import About from './sections/About.jsx'
import Stats from './sections/Stats.jsx'
import Dishes from './sections/Dishes.jsx'
import Features from './sections/Features.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <About/>
      <Stats/>
      <Dishes/>
      <Features/>
    </>
  )
}

export default App

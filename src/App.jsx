import React from 'react'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import About from './components/About.jsx'
import Marquee from './components/Marquee.jsx'
import ReviewSelection from './components/ReviewsSection.jsx'


function App() {

  return (
    <div className='w-full min-h-screen bg-white text-[#9ACEEB]'>
      <Navbar />
      <LandingPage />
      <About />
      <Marquee />
      <ReviewSelection />


    </div>
  )
}

export default App
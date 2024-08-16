import React from 'react'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import About from './components/Abour.jsx'
import Marquee from './components/Marquee.jsx'


function App() {

  return (
    <div className='w-full min-h-screen bg-white text-[#9ACEEB]'>
      <Navbar />
      <LandingPage />
      <About/>
      <Marquee/>
      
    </div>
  )
}

export default App
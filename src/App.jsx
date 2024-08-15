import React from 'react'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'


function App() {

  return (
    <div className='w-full min-h-screen bg-zinc-50 text-zinc-950'>
      <Navbar />
      <LandingPage />
      
    </div>
  )
}

export default App
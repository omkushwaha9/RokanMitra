import React from 'react'

function Navbar() {
  return (
    <div className=' w-full px-16 py-8 font-["Neue Montreal"] flex justify-between items-center '>
      <div className='title'>
          <h1 className='text-white font-semibold'>
          RokanMitra
          </h1>
      </div>
      <div className='links flex gap-10'>
        {["About", "Our Products", "Our Services", "Research", "Contact Us"].map((item, index) => (
          <a key={index} className={`text-lg font-light ${index === 4 && "ml-32"}`}>{item}</a>
        ))}

      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import logop from '../images/logop.png'

function Navbar() {
  return (

    <div className=' fixed w-full px-16 bg-white font-["Neue Montreal"] flex justify-between items-center '>
      <div className='Title'>
      <img className=' w-48 py-5'  src={logop} alt='Profile'/>
        
      </div>
      <div className='links flex gap-10 py-3'>
        {["About", "Our Products", "Our Services", "Research", "Contact Us"].map((item, index) => (
          <a key={index} className={`text-lg font-light ${index === 4 && "ml-32"}`}>{item}</a>
        ))}

      </div>
    </div>
  )
}

export default Navbar
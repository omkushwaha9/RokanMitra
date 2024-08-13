import React from 'react'
import logop from '../images/logop.png'

function Navbar() {
  return (

    <div className=' w-full px-16 py-5 font-["Neue Montreal"] flex justify-between items-center '>
      <div className='Title'>
      <img className=' w-48'  src={logop} alt='Profile'/>
        
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
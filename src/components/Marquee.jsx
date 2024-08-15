import React from 'react'
import { motion } from 'framer-motion'


function Marquee() {
  return (
    <div className='w-full  rounded-xl bg-zinc-950 text-white'>
      <div className='text flex'>
        
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: [1512, -982] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-xl  uppercase pr-60 p-2 font-semibold'>
          Rokan Mitra
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: [1512, -982] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-xl  uppercase pr-60 p-2 font-semibold'>
          Rokan Mitra
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: [1512, -982] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-xl  uppercase pr-60 p-2 font-semibold'>
          Rokan Mitra
        </motion.h1>
        
        
        
        
      </div>
    </div>
  )
}

export default Marquee
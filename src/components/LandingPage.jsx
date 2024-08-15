import { motion } from 'framer-motion';
import React from 'react'
import { LuDownload } from "react-icons/lu";
// import logop from '../images/logop.png'

function LandingPage() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen  pt-1'>
            <div className='textstructure mt-48 px-16'>
                {["Financial Services", "Trading", "Trusted Partner"].map((item, index) => {
                    return <div className='masker'>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "8vw" }}
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                                    className=' mr-5 w-[9vw] rounded-md h-[5.7vw] relative -top-[0.8vw]'
                                >
                                    <img className=' h-[5.6vw] rounded-md' src='https://www.bankrate.com/2019/03/22142110/How-to-trade-stocks.jpg?auto=webp&optimize=high&crop=16:9' alt='Profile' />
                                </motion.div>
                            )}
                            <h1 className=' pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[6vw]  font-bold font-["Founders_Grotesk_x-Condensed"] '>
                                {item}
                            </h1>
                        </div>
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-700 mt-44 flex justify-between items-center py-5 px-16 '>
                <div className='px-4 py-2 border-[1px] border-zinc-700 font-light text-md uppercase rounded-full'>Become A partner</div>
                {["Investor Relations"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
                <div className='px-4 py-2 border-[1px] border-zinc-700 font-light text-md uppercase rounded-full'>Login</div>
                {["Policies"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
                <div className='start flex items-center gap-2'>
                    <div className='px-4 py-2 border-[1px] border-zinc-700 font-light text-md uppercase rounded-full'>Open an Account</div>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-700'>
                        <LuDownload />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage
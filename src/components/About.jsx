import React from 'react'

function About() {
    return (
        <div className='w-full  p-16 bg-white rounded-tl-xl rounded-tr-xl text-sky-700'>
            <h1 className='font-["Neue_Montreal"] text-5xl'>
                About Us
            </h1>
            <p className='font-["Neue_Montreal"] pt-1 text-xl'>
                Over 30 Years of Financial Expertise at Your Service
            </p>
            <div className='w-full flex gap-32 border-t-[1px] pt-10 mt-10 border-[#737373]  '>
                <div className='w-1/2'>
                    <h1 className='text-xl font-light'>
                        Rokan Mitra Shares and Finance Limited - The one-stop for Financial Services like Stock Broking,
                        Wealth Management, Investment Planning, IPO, Mutual Funds Distribution and More.
                        At MSFL, our 30+ years of experience means you get Expert Advice and personalized services to
                        reach your financial goals. We are trusted by 4lk + clients, 400 + Partners and 100 + branches
                        across India. </h1>
                    <button className=' flex gap-10 items-center px-5 py-4 bg-[#9ACEEB] mt-7 rounded-full text-white  '>
                        Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full '></div>
                    </button>
                </div>
                <div className='w-1/2 h-[50vh] mt-10 rounded-xl bg-[#9ACEEB]'>

                </div>
            </div>
        </div>
    )
}

export default About
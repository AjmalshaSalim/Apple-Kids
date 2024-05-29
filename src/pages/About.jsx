import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
      <>
       <Navbar/>
       <div className='min-h-[300px] bg-yellow-300 flex justify-center items-center flex-col gap-6'>
       <h1 className="font-bold text-2xl text-white font-mono sm:text-3xl md:text-4xl lg:text-5xl">About Us</h1>
      <p className="font-bold text-white font-sans sm:text-lg md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet</p>
       </div>
      </>
       
    
   

  )
}

export default About
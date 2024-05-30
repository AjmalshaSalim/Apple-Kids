import React, { useState } from 'react'
import homeMainImage from '../assets/images/home-main-3.png'
import '../App.css'

import Navbar from './Navbar';


function Header() {
  
  return (
   <div className='min-h-[600px] bg-gray-200 w-auto'>
      {/* navsection */}
      <Navbar/>



      {/* subHeaderSection */}
      <div className='w-auto min-h-[500px] grid sm:grid-cols-2'>

        <div className='sm:block hidden'>
          <img
            decoding="async"
            src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg"
            className='w-96 h-96'
            alt="Illustration"
          />
        </div>
        
        <div className='flex flex-col justify-center sm:items-start items-center space-y-6 p-4 bg-no-repeat animate-bg'  style={{backgroundImage:`url(${homeMainImage})` ,
          backgroundPosition:  ' right bottom',
          
          
          }}>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-center'>
            Little Minds <br /> Grow Here !!
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. ratione de
          </p>
          <div className='flex space-x-4'>
            <button className='bg-cyan-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>
              About US
            </button>
            <button className='bg-pink-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>
              Contact US
            </button>
            
          </div>
         
        </div>
        

      </div>
      
    </div>
  )
}

export default Header
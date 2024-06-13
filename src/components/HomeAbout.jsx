import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/images/svg-element-9.svg'
import och from '../assets/images/svg-element-9.svg'

function HomeAbout() {
  return (
    <>

<div className='min-h-[400px] grid lg:grid-cols-2 mb-4 ' >


        <div className='flex flex-col justify-center sm:items-start items-center gap-6 p-4 sm:ml-[200px] '>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold  font-fredoka  '>Education <br />through play!</h1>
                <p className='text-base sm:text-lg md:text-xl font-league-spartan w-[350px] sm:p-0 p-4 '>
    Get the right mortgage to buy your new home — or refinance to take advantage of low rates or convert equity into cash. We've got the personal service to guide you along the way.
  </p>
            <Link to='/about' >
            <button className='bg-[#E21D26] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg'>
                About Us
            </button>
            </Link>
           
        </div>
        


        <div className='flex items-center lg:justify-start  justify-center bg-no-repeat bg-right-bottom' style={{backgroundImage:`url(${bg})`,backgroundSize:'600px 400px'}} >
        <div className='sm:w-2/3  sm:h-80 w-64  rounded-3xl overflow-hidden'>
        <img
            src='https://images.pexels.com/photos/8363027/pexels-photo-8363027.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='kids pic'
            className=' rounded-3xl w-full'
        />
        </div>
         </div>


       
    </div>
    </>
  )
}

export default HomeAbout
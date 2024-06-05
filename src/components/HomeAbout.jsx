import React from 'react'
import { Link } from 'react-router-dom'

function HomeAbout() {
  return (
    <>

<div className='min-h-[400px] grid sm:grid-cols-2 mb-4 ' >


        <div className='flex flex-col justify-center items-center gap-6 p-4 '>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center'>
                Education through play!
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-center'>
                Get the right mortgage to buy your new home — or refinance to take advantage of low rates or convert equity into cash. We've got the personal service to guide you along the way.
            </p>
            <Link to='/about' >
            <button className='bg-cyan-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>
                About Us
            </button>
            </Link>
           
        </div>

        <div className='flex justify-center items-center bg-no-repeat bg-right-bottom' style={{backgroundImage:"url(https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg)"}}>
        <img
            src='https://images.pexels.com/photos/8363015/pexels-photo-8363015.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='kids pic'
            className=' sm:w-2/3  sm:h-80 w-64  rounded-tl-3xl rounded-br-3xl'
        />
         </div>


       
    </div>
    </>
  )
}

export default HomeAbout
import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
      <>
       <Navbar/>
 
      {/* Banner section */}
       <div className='min-h-[300px] bg-yellow-300 flex justify-center items-center flex-col gap-6'>
       <h1 className="font-bold text-2xl text-white font-mono sm:text-3xl md:text-4xl lg:text-5xl">About Us</h1>
      <p className="font-bold text-white font-sans sm:text-lg md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet</p>
       </div>
        

        {/* top-section */}
       <div className='min-h-[400px] grid sm:grid-cols-2'>
          <div className='flex justify-center items-center'>
          <img  className=' w-72 h-80 rounded-tl-2xl rounded-br-3xl' src='https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600' />
          </div>
          <div className='flex flex-col justify-center items-start gap-4'>
          <h1 className='text-2xl sm:text-3xl md:text-3xl font-bold font-serif text-center'>
                
                About Apple Kids🍎
            </h1>
              <p className='text-base sm:text-lg md:text-xl text-center w-72'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore nobis ipsa delectus amet excepturi quo cupiditate, accusamus !  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt ratione ea porro aspernatur aliquam iusto.
            </p>
          </div> 
       </div>


       {/* mid-section */}
       <div className='min-h-[300px] bg-gray-200'>

       </div>



      </>
       
    
   

  )
}

export default About
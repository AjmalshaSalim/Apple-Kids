import React from 'react'
import Navbar from '../components/Navbar'
import Contactform from '../components/contact/Contactform'
import Contactmap from '../components/contact/Contactmap'

function Contact() {
  return (
   <>
      <Navbar/>
      <Contactform/>
      <Contactmap/>
      
{/* formsection */}

      {/* <div className='min-h-[400px] grid sm:grid-cols-2 bg-gray-50 '>
       <div className='flex flex-col justify-center items-center space-y-4 p-6 '>
  <div className='flex flex-col sm:items-start w-full max-w-md items-center'>
    <h1 className='text-xl font-semibold text-pink-500 mb-1'>Our Location</h1>
    <p className='text-base text-gray-600'>National Nagar,Kallattumukku,Manacuad P.O,Trivandrum-09</p>
  </div>
  <div className='flex flex-col sm:items-start w-full max-w-md items-center'>
    <h1 className='text-xl font-semibold text-pink-500 mb-1'>Phone Number</h1>
    <p className='text-base text-gray-600'>7736965145 | 8086029291</p>
  </div>
  <div className='flex flex-col sm:items-start w-full max-w-md items-center'>
    <h1 className='text-xl font-semibold text-pink-500 mb-1'>Email Address</h1>
    <p className='text-base text-gray-600'>abc@gmail.com</p>
  </div>
</div>




</div>
</div> */}


{/* { map} */}
      {/* <div className='min-h-[400px]'>
      <iframe className='w-full min-h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.4921144773434!2d76.87479147313799!3d8.548585296327833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf9bca82635f%3A0x72d8ed7960ffc184!2sTechnopark%20Phase%203!5e0!3m2!1sen!2sin!4v1717042920701!5m2!1sen!2sin"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      */}

   </> 
  )
}

export default Contact
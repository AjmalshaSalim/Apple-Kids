import React from 'react'

function Contactmap() {
  return (
   <>
 
      <div className='grid lg:grid-cols-2 min-h-[600px]'>  
          <div className='flex items-center justify-center p-4 '>
          <iframe className='h-[500px] sm:w-[500px] w-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.4921144773434!2d76.87479147313799!3d8.548585296327833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf9bca82635f%3A0x72d8ed7960ffc184!2sTechnopark%20Phase%203!5e0!3m2!1sen!2sin!4v1717042920701!5m2!1sen!2sin"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='flex justify-center lg:items-start items-center space-y-4 flex-col p-4'>
             <h1 className='font-fredoka text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold '>Contact Information</h1>
             <div className=''>
             <p className='font-league-spartan text-center '>Do you have questions,comments?</p>
             
             </div>
            
             <div className='flex sm:flex-row flex-col gap-6'>
                  <div className=''>
                    <h2 className='font-fredoka font-bold'>Location</h2>
                    <p  className='font-league-spartan'>National nagar,Kallattumukku</p>
                    <p  className='font-league-spartan'>Manacaud P.O,Trivandrum-09</p>
                  </div>
                  <div className=''>
                    <h2 className='font-fredoka font-bold'>Opening hours</h2>
                    <p  className='font-league-spartan'>9.30 am - 2.30 pm</p>
                    <p  className='font-league-spartan'>Ages: 2-6 years</p>
                  </div>
             </div>
             <div>
             <p className='font-league-spartan text-red-500'>7736965145 | 8086029291 </p>
             <p className='font-league-spartan text-red-500'>Applekidskindergarten@gmail.com</p>
             </div>
             
          </div>
      </div>

   </>
  )
}

export default Contactmap
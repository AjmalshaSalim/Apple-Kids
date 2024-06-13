import React from 'react'

function Card() {
  return (
    <>
    <div className='min-h-[800px] flex justify-center items-center'>
        <div className='bg-yellow-300 w-[800px] h-[500px] rounded-2xl flex overflow-hidden'>
            <div className='bg-[#F06D4F] w-1/2 flex flex-col space-y-4 justify-center items-start p-6 '>
            <div>
               <p className='font-fredoka text-white'>The curriculum aims to</p>
                <h1 className='font-fredoka text-white text-xl sm:text-2xl font-bold '>Develop skills relevant to the 21st century:</h1>
            </div>


            <div className='flex gap-4'>
               <div>
                 <p className='bg-white px-2 rounded-lg font-fredoka'>1</p>
               </div>
               <div>
                 <h1 className='text-white font-fredoka'>Critical thinking</h1>
                 <p className='text-white font-league-spartan'>  
                 These conceptions in education will help children gain different skills needed for their successful future.
                 </p>
               </div>
            </div>

            <div className='flex gap-4'>
               <div>
                 <p className='bg-white px-2 rounded-lg font-fredoka'>2</p>
               </div>
               <div>
                 <h1 className='text-white font-fredoka'>Creativity</h1>
                 <p className='text-white font-league-spartan'>  
                 We strive to help each child to find their own talents, and also constantly develop and graduate from the school with a confidence in their abilities.
                 </p>
               </div>
            </div>

            <div className='flex gap-4'>
               <div>
                 <p className='bg-white px-2 rounded-lg font-fredoka'>3</p>
               </div>
               <div>
                 <h1 className='text-white font-fredoka'>Communication</h1>
                 <p className='text-white font-league-spartan'>  
                 These conceptions in education will help children gain different skills needed for their successful future.
                 </p>
               </div>
            </div>
            
            
               
            </div>
            <div className='bg-pink-800 w-1/2'>
                 janna
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Card
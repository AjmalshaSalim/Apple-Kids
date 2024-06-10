import React from 'react'
import Classes from './Classes'
import Countup from './Countup'
import Homecards from './Homecards'

function Home() {
  return (
    <div className='min-h-[600px]'>
        {/* headeing section */}

        <div className='min-h-[200px] flex flex-col justify-center items-center space-y-4 p-2 mt-2 mx-auto container'>
  <button className='bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg h-8 w-32'>
    Enroll Now
  </button>
  <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center'>
    A day full of discoveries<br />and knowledge!
  </h1>
  <p className='text-base sm:text-lg md:text-xl text-center'>
     Explore Our Ongoing Classes!!!
  </p>
</div>


       
  <Classes/>
  <Countup/>
  <Homecards/>

    </div>
  )
}

export default Home
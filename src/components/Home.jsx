import React from 'react'
import Classes from './Classes'

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


        {/* card section */}
        {/* <div className=' min-h-[400px] flex sm:flex-row flex-col gap-10 justify-center items-center'>


        <div className='bg-white border border-gray-300 rounded-sm rounded-tl-lg w-52 h-64 p-4 shadow-md'>
           <img width="48" height="48" src="https://img.icons8.com/dusk/64/curriculum.png" alt="curriculum"/>
            <h3 className='text-lg font-semibold mb-2 mt-4'>Card Title</h3>
            <p className='text-sm text-gray-700'>This is a card description. Add some text here to describe the content of the card.</p>
        </div>



        <div className='bg-white border border-gray-300 rounded-lg w-52 h-64 p-4 shadow-md'>
            <img width="48" height="48" src="https://img.icons8.com/office/16/star--v1.png" alt="star--v1"/>
            <h3 className='text-lg font-semibold mb-2 mt-4'>Card Title</h3>
             <p className='text-sm text-gray-700'>This is a card description. Add some text here to describe the content of the card.</p>
        </div>

        <div className='bg-white border border-gray-300 rounded-lg w-52 h-64 p-4 shadow-md'>
              <img width="48" height="48" src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/external-Feedback-customer-review-bearicons-outline-color-bearicons.png" alt="external-Feedback-customer-review-bearicons-outline-color-bearicons"/>
             <h3 className='text-lg font-semibold mb-2 mt-4'>Card Title</h3>
             <p className='text-sm text-gray-700'>This is a card description. Add some text here to describe the content of the card.</p>
        </div>

        <div className='bg-white border border-gray-300 rounded-lg w-52 h-64 p-4 shadow-md'>
            <img width="48" height="48" src="https://img.icons8.com/glassmorphism/48/graduation-cap.png" alt="graduation-cap"/>
            <h3 className='text-lg font-semibold mb-2 mt-4'>Card Title</h3>
            <p className='text-sm text-gray-700'>This is a card description. Add some text here to describe the content of the card.</p>
        </div>

        </div>
  */}
  <Classes/>

    </div>
  )
}

export default Home
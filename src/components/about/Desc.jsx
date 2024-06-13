import React from 'react'
import Aboutwave from './Aboutwave'

function Desc() {
  return (
    <>
    <div className='mb-[-2px]'>
    <Aboutwave/>

    </div>
     
    <div className="min-h-[400px] bg-[#FCF2D9] flex flex-col space-y-8 sm:p-4 p-6  justify-center items-center">
  <h1 className="font-fredoka text-2xl sm:text-4xl md:text-5xl font-bold text-center">
    A School Made for Young Children
  </h1>
  <p className="text-base sm:text-lg md:text-xl font-league-spartan w-full max-w-5xl px-4 sm:px-8 md:px-12 lg:px-16">
    Demonstrated by living our core values: compassion, growth, courage to act, responsibility, belonging, curiosity. You can see them cultivated in every experience for students, families, and staff.

    Our curriculum appeals to student diversity and interest, and is rigorous and challenging. We understand each child comes to us with different talents, learning styles, and identities. And we celebrate that difference because our diversity is our strength.

    Community is everything at Corlears. It’s who we are and how things get done. Everyone here is motivated by a deep commitment to making sure each child and family feels welcome and included. When everyone feels like they belong, we are stronger and smarter together. We’re a community driven to make the world a better place—starting in our own backyard.
  </p>
</div>

    </>
    
  )
}

export default Desc
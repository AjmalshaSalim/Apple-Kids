import React from 'react'

function Homecards() {

  const cardData = [
    {
      id: 1,
      imgSrc: "https://img.icons8.com/ios/50/178E18/light-on--v1.png",
      title: "Active Learning",
      description: "This is a card description. Add some text here to describe the content of the card."
    },
    {
      id: 2,
      imgSrc: "https://img.icons8.com/ios/50/E63535/star--v1.png",
      title: "Expert Teachers",
      description: "This is a card description. Add some text here to describe the content of the card."
    },
    {
      id: 3,
      imgSrc: "https://img.icons8.com/neon/96/thumb-up.png",
      title: "Strategy Teachers",
      description: "This is aStrategy Teachers card description. Add some text here to describe the content of the card."
    },
    {
      id: 4,
      imgSrc: "https://img.icons8.com/fluency-systems-regular/48/35CCE6/confetti.png",
      title: "Full Day Programs",
      description: "This is a card description. Add some text here to describe the content of the card."
    }
  ];

  return (
  
        
        //  card section 
        <div className=' min-h-[400px] flex md:flex-row flex-col gap-10 justify-center items-center   flex-wrap p-6'>

      {cardData.map((card,index) =>  (
        <div  key={index} className='bg-white border border-gray-300 rounded-lg w-52 h-64 p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out  group'>
        <img width="48" height="48" src={card.imgSrc} alt={card.title} className='transition-transform duration-500 ease-in-out  group-hover:rotate-180' />
        <h3 className='text-lg font-semibold mb-2 mt-4 font-fredoka'>{card.title}</h3>
        <p className='text-md line-clamp-5 text-gray-700 font-league-spartan mt-3'>{card.description}</p>
      </div>
      ))}
        </div>
 
   
  )
}

export default Homecards


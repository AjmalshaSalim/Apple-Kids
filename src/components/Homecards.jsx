import React from 'react'

function Homecards() {

  const cardData = [
    {
      id: 1,
      imgSrc: "https://img.icons8.com/dusk/64/curriculum.png",
      title: "Active Learning",
      description: "This is a card description. Add some text here to describe the content of the card."
    },
    {
      id: 2,
      imgSrc: "https://img.icons8.com/office/16/star--v1.png",
      title: "Expert Teachers",
      description: "This is a card description. Add some text here to describe the content of the card."
    },
    {
      id: 3,
      imgSrc: "https://img.icons8.com/external-bearicons-outline-color-bearicons/64/external-Feedback-customer-review-bearicons-outline-color-bearicons.png",
      title: "Strategy Teachers",
      description: "This is aStrategy Teachers card description. Add some text here to describe the content of the card."
    },
    {
      id: 4,
      imgSrc: "https://img.icons8.com/glassmorphism/48/graduation-cap.png",
      title: "Full Day Programs",
      description: "This is a card description. Add some text here to describe the content of the card."
    }
  ];

  return (
  
        
        //  card section 
        <div className=' min-h-[400px] flex md:flex-row flex-col gap-10 justify-center items-center   flex-wrap p-6'>

      {cardData.map((card,index) =>  (
        <div  key={index} className='bg-white border-t-4 border-l-4 border-purple-300 rounded-lg w-52 h-64 p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:bg-pink-100 group'>
        <img width="48" height="48" src={card.imgSrc} alt={card.title} className='transition-transform duration-500 ease-in-out  group-hover:rotate-180' />
        <h3 className='text-lg font-semibold mb-2 mt-4 text-purple-600 hover:text-purple-800 font-mono'>{card.title}</h3>
        <p className='text-sm text-gray-700'>{card.description}</p>
      </div>
      ))}
        </div>
 
   
  )
}

export default Homecards
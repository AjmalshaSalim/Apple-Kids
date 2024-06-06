import React from 'react'
import { Link } from 'react-router-dom'

const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gallery Image 1',
      category: 'office'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/273062/pexels-photo-273062.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gallery Image 2',
      category: 'playing'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gallery Image 3',
      category: 'sitting'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1154180/pexels-photo-1154180.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gallery Image 4',
      category: 'office'
    },
]

function Homegallery() {
  return (
    <>
    <div className='min-h-[400px] bg-pink-100 p-4'>
        <div className='flex justify-center items-center p-3'>
        <h1 className='sm:text-4xl text-xl md:text-2xl font-bold text-gray-800 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-400'>
    Explore Our Gallery
  </h1>
        </div>
    <div className='min-h-[400px]  bg-no-repeat' >
   <div className=" py-12">
      <div className="container mx-auto px-4">
       
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    <div className='flex justify-center items-center'>
        <Link to='/gallery'>
        <button className='px-6 py-2 mt-4 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-300'>
    See more 
  </button>
        </Link>
 
</div>
    </div>
    </>
  )
}

export default Homegallery
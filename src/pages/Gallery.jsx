import React, { useState } from 'react'
import Navbar from '../components/Navbar'

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
  {
      id: 5,
      image: 'https://images.pexels.com/photos/3087286/pexels-photo-3087286.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gallery Image 3',
      category: 'playing'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/8363769/pexels-photo-8363769.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gallery Image 4',
      category: 'office'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gallery Image 1',
      category: 'office'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/273062/pexels-photo-273062.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gallery Image 2',
      category: 'playing'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gallery Image 3',
      category: 'sitting'
    },
    {
      id: 10,
      image: 'https://images.pexels.com/photos/1154180/pexels-photo-1154180.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Gallery Image 4',
      category: 'office'
    },
    {
        id: 11,
        image: 'https://images.pexels.com/photos/3087286/pexels-photo-3087286.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Gallery Image 3',
        category: 'playing'
      },
      {
        id: 12,
        image: 'https://images.pexels.com/photos/8363769/pexels-photo-8363769.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'Gallery Image 4',
        category: 'office'
      },
  // Add more gallery items as needed
];

function Gallery() {
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

   
   const [filter, setFilter] = useState('all');

   const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
   const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  return (
    <>
    <Navbar/>

   {/* top section */}
    <div className='min-h-[400px]  grid sm:grid-cols-2 mb-4 ' >
        <div className='flex flex-col justify-center items-center gap-6 p-4 bg-no-repeat' style={{backgroundImage:"url(https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg)"}}>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center'>
                Gallery!
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-center'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos recusandae, alias non consequatur aperiam. Amet, fugit! Explicabo, officia culpa. Reiciendis non eaque deserunt aliquid provident saepe neque veritatis doloremque!
            </p>
            
        </div>


        <div className='flex justify-center'>
        <img
            src='https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='kids pic'
            className=' sm:w-2/3  sm:h-80 w-64  rounded-tl-3xl rounded-br-3xl'
        />
         </div>
    </div>

   {/* image section */}

   <div className='flex justify-center items-center min-h-[100px] bg-pink-100'>
      <div className=' bg-pink-200 h-12 px-6 rounded-md flex justify-center items-center'>
        <ul className='flex flex-row space-x-6 gap-4' >
        <li
              className={`text-yellow-600 font-sans text-xl hover:bg-yellow-200 cursor-pointer ${filter === 'all' ? 'bg-yellow-200' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </li>
            <li
              className={`text-yellow-600 font-sans text-xl hover:bg-yellow-200 cursor-pointer ${filter === 'office' ? 'bg-yellow-200' : ''}`}
              onClick={() => setFilter('office')}
            >
              Office
            </li>
            <li
              className={`text-yellow-600 font-sans text-xl hover:bg-yellow-200 cursor-pointer ${filter === 'playing' ? 'bg-yellow-200' : ''}`}
              onClick={() => setFilter('playing')}
            >
              Playing
            </li>
            <li
              className={`text-yellow-600 font-sans text-xl hover:bg-yellow-200 cursor-pointer ${filter === 'sitting' ? 'bg-yellow-200' : ''}`}
              onClick={() => setFilter('sitting')}
            >
              Sitting
            </li>
         </ul>
      </div>
    </div>

   <div className='min-h-[400px] bg-pink-100 bg-no-repeat ' style={{backgroundImage:"url(https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg)",
     backgroundPosition: 'right',
   }}>
   <div className=" py-12">
      <div className="container mx-auto px-4">
       
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentItems.map((item) => (
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
    <div className='flex justify-center items-center p-4'>
    <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-1 px-3 py-2 bg-gray-400 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
    <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="mx-1 px-3 py-2 bg-gray-400 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
    </div>
    
   </div>


  
    </>
  )
}

export default Gallery
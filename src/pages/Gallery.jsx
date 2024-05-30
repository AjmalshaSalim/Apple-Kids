import React from 'react'
import Navbar from '../components/Navbar'

function Gallery() {
    const galleryItems = [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Gallery Image 1',
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/273062/pexels-photo-273062.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Gallery Image 2',
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Gallery Image 3',
        },
        {
          id: 4,
          image: 'https://images.pexels.com/photos/1154180/pexels-photo-1154180.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Gallery Image 4',
        },
        {
            id: 5,
            image: 'https://images.pexels.com/photos/3087286/pexels-photo-3087286.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Gallery Image 3',
          },
          {
            id: 6,
            image: 'https://images.pexels.com/photos/8363769/pexels-photo-8363769.jpeg?auto=compress&cs=tinysrgb&w=600',
            alt: 'Gallery Image 4',
          },
        // Add more gallery items as needed
      ];
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

   <div className='min-h-[500px] bg-pink-100 bg-no-repeat ' style={{backgroundImage:"url(https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg)",
     backgroundPosition: 'right',
   }}>
   <div className=" py-12">
      <div className="container mx-auto px-4">
       
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

    </>
  )
}

export default Gallery
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Events() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const newsItems = [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Event Title 1',
          date: 'May 30, 2024',
          description: 'This is a short description of the event. Learn more about what happened and key highlights.'
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Event Title 2',
          date: 'June 1, 2024',
          description: 'This is another short description of the event. Discover the details and important moments.'
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Event Title 2',
            date: 'June 1, 2024',
            description: 'This is another short description of the event. Discover the details and important moments.'
          },
          {
            id: 4,
            image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Event Title 2',
            date: 'June 1, 2024',
            description: 'This is another short description of the event. Discover the details and important moments.'
          },
          {
            id: 5,
            image: 'https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Event Title 2',
            date: 'June 1, 2024',
            description: 'This is another short description of the event. Discover the details and important moments.'
          },
        // Add more news items as needed
      ];

      const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.ceil(newsItems.length / itemsPerPage);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
  return (
    <>
         <Navbar/>

         {/* Banner section */}

         <div className='min-h-[250px] bg-gray-200 flex  flex-col gap-2 justify-center items-center bg-no-repeat' style={{backgroundImage:"url(https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg)"}}>
            <p><Link to='/'>Home</Link>/Events </p>
             <h1 className='sm:text-4xl text-xl font-bold font-mono'>News & Events</h1>
         </div>
         

         {/* card section */}

         <div className='min-h-[500px] bg-gray-100'>
         <div className=" py-12">
  <div className="container mx-auto px-4">
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {currentItems.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg border border-red-200 hover:border-red-600 transition duration-300 ease-in-out">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg border-b border-gray-200" />
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.date}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </div>
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

       {/* subscribeform */}
        <div className='min-h-[100px] bg-purple-300 grid sm:grid-cols-12'>
  <div className='sm:col-span-4 flex justify-center items-center'>
    <h1 className='text-2xl text-white font-bold'>Subscribe to our newsletter</h1>
  </div>
  <div className='sm:col-span-8 flex justify-center items-center'>
    <input className='px-12 py-4 border border-gray-400 rounded-lg outline-none focus:border-purple-500' placeholder='Enter your email...' id='mail' />
    <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg m-4'>Subscribe</button>
  </div>
       </div>


    </>
  )
}

export default Events
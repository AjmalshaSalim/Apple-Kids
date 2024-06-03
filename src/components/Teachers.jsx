import React from 'react'

const teachers = [
  {
    name: 'John Doe',
    subject: 'Mathematics',
    image: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Jane Smith',
    subject: 'Science',
    image: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Mike Johnson',
    subject: 'History',
    image: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Emily Davis',
    subject: 'English',
    image: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

function Teachers() {
  return (
    <>
    <div className='min-h-[500px] bg-gray-100'>
         <div className='flex justify-center items-center p-6'>
         <h1 className='text-2xl sm:text-3xl md:text-4xl  font-bold font-mono'>
            Meet Our Amazing Teachers
          </h1>
         </div>
         <div className='flex flex-wrap justify-center items-center p-6'>
      {teachers.map((teacher, index) => (
        <div
          key={index}
          className='bg-white rounded-lg shadow-lg m-4 p-6 max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4'
        >
          <img
            className='rounded-full w-32 h-32 mx-auto'
            src={teacher.image}
            alt={teacher.name}
          />
          <h2 className='text-xl font-bold text-center mt-4'>{teacher.name}</h2>
          <p className='text-center text-gray-700'>{teacher.subject}</p>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Teachers
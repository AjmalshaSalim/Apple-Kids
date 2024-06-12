import React from 'react'

const teachers = [
  {
    name: 'Bushra Basheer',
    subject: 'Principal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4Yrvkzk-tPEJgHl4FVdzStqNvTQ4qwsrO86RR5eZPyezwUqG',
  },
  {
    name: 'Shaika Aysha ',
    subject: 'Academic Coordinator',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRV1F_ukZOj3wfq2riV2TnAgEWGiiIaQwBY3P1C646dWdtmfy8m',
  },
  {
    name: 'Afsana',
    subject: 'Montessori',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTnstAqmulCYiDEgXUCMVlrUx0LfYJL3y3pOrApiL7taL18x1',
  },
  {
    name: 'Amina',
    subject: 'CTTC',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWNYnFSuFmQ1lZBkMlUYBEa-7mnwEGyB6dgYOUsju8ZkhRZAbH',
  },
  {
    name: 'Fathima',
    subject: 'Dheeniyath',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTnstAqmulCYiDEgXUCMVlrUx0LfYJL3y3pOrApiL7taL18x1',
  },
];


function Teachers() {
  return (
    <>
    <div className='min-h-[800px] p-6 '>
         <div className='flex justify-center items-center p-6 flex-col gap-4'>
         <h1 className='text-2xl sm:text-3xl md:text-4xl  font-bold font-fredoka'>
            Meet Our Team
          </h1>
          <p className='text-base  w-[500px] sm:text-lg md:text-xl text-center font-league-spartan'>
          Now is the time to invest in your child's education
  </p>
         </div>



 <div className='container mx-auto p-6'>
  <div className='flex flex-wrap justify-center gap-20 '>
    {teachers.map((teacher, index) => (
      <div
        key={index}
        className='bg-white border border-gray-300 rounded-lg w-full sm:w-60 md:w-52 lg:w-48 p-4 shadow-md hover:shadow-lg   hover:border-r-5 hover:border-b-2 hover:border-r-gray-200 hover:border-b-gray-200'
      >
        <img
          className='rounded-full w-32 h-32 mx-auto'
          src={teacher.image}
          alt={teacher.name}
        />
        <h2 className='text-xl font-bold text-center mt-4 font-fredoka'>{teacher.name}</h2>
        <p className='text-center text-[#379E3B] font-fredoka'>{teacher.subject}</p>
      </div>
    ))}
  </div>
</div> 



    </div>
    </>
  )
}

export default Teachers
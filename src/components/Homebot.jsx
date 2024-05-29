import React from 'react'

function Homebot() {
  return (
    <div className='min-h-[700px] '>
       <div className='min-h-[500px]  bg-no-repeat flex flex-col justify-center items-center gap-5'  style={{backgroundImage:"url('https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg')"}}>
       <button className='bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg h-8  '>
               How we work?
             </button>
             <p className='text-base sm:text-lg md:text-xl text-center w-72'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore nobis ipsa delectus amet excepturi quo cupiditate, accusamus !
            </p>
       </div>
       <div className='min-h-[200px] bg-yellow-200 grid sm:grid-cols-3'>
      <div className='flex flex-col space-y-4 justify-center items-center m-4'>
      <h1 className='text-6xl font-extrabold text-yellow-600'>20</h1>
  <h2 className='text-2xl font-semibold text-gray-700'>Facility</h2>
      </div>
      <div className='flex flex-col space-y-4 justify-center items-center m-4'>
      <h1 className='text-6xl font-extrabold text-yellow-600'>8</h1>
  <h2 className='text-2xl font-semibold text-gray-700'>Staff</h2>
      </div>
      <div className='flex flex-col space-y-4 justify-center items-center m-4'>
      <h1 className='text-6xl font-extrabold text-yellow-600'>10</h1>
  <h2 className='text-2xl font-semibold text-gray-700'>Experience</h2>
      </div>
     </div>
    </div>
  )
}

export default Homebot 


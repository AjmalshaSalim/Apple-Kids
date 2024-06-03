import React from 'react'
import { Link } from 'react-router-dom'

function Homemid() {
  return (
    <>
    <div className='min-h-[400px] grid sm:grid-cols-2 mb-4 ' >
        <div className='flex flex-col justify-center items-center gap-6 p-4 bg-no-repeat' style={{backgroundImage:"url(https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg)"}}>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center'>
                Education through play!
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-center'>
                Get the right mortgage to buy your new home — or refinance to take advantage of low rates or convert equity into cash. We've got the personal service to guide you along the way.
            </p>
            <Link to='/about' >
            <button className='bg-cyan-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>
                About Us
            </button>
            </Link>
           
        </div>


        <div className='flex justify-center'>
        <img
            src='https://images.pexels.com/photos/8363015/pexels-photo-8363015.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='kids pic'
            className=' sm:w-2/3  sm:h-80 w-64  rounded-tl-3xl rounded-br-3xl'
        />
         </div>
    </div>

    <div className='min-h-[400px] bg-blue-100 grid sm:grid-cols-2 '>
       <div className='flex justify-center items-center'>
            <img  className=' w-72 h-80 rounded-tl-2xl rounded-br-3xl' src='https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600' />
       </div>
       <div className='flex justify-center sm:items-start items-center flex-col gap-6'>
            <button className='bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg h-8  '>
               why choose us?
             </button>
             <p className="text-lg border-2 border-indigo-200 border-t-indigo-500 rounded-lg p-1 text-center w-72">Innovative Learning</p>
            <p className="text-lg border-2 border-indigo-200 border-t-indigo-500 rounded-lg p-1 text-center w-72">Experienced Educators</p>
            <p className="text-lg border-2 border-indigo-200 border-t-indigo-500 rounded-lg p-1 text-center w-72">Interactive Learning</p>
            <p className="text-lg border-2 border-indigo-200 border-t-indigo-500 rounded-lg p-1 text-center w-72">Cultural Diversity</p>
             
       </div>
    </div>

    </>
  )
}

export default Homemid





















{/* <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path class="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
</svg> */}

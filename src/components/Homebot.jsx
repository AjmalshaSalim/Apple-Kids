import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Teachers from './Teachers';
import Homegallery from './Homegallery';


function Homebot() {
 
  return (
 <>
 <div className=' min-h-[400px]   grid lg:grid-cols-2 p-4'>
 <div className='  flex flex-col justify-center mt-6 items-center gap-4' >
       <button className='bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg h-8  '>
               Our mission
             </button>   
             <p className="flex items-center border-2 border-red-200 rounded-lg p-3 mb-4 shadow-md sm:w-96">
          <i className="fas fa-book text-pink-400 mr-3"></i>
          Provide value-based education
        </p>
        <p className="flex items-center border-2 border-red-200 rounded-lg p-3 mb-4 shadow-md sm:w-96">
          <i className="fas fa-user-graduate text-pink-400 mr-3"></i>
          Mold the character of the younger generation
        </p>
        <p className="flex items-center border-2 border-red-200 rounded-lg p-3 mb-4 shadow-md sm:w-96">
          <i className="fas fa-child text-pink-400 mr-3"></i>
          Stress-free, child-centered, holistic education
        </p>
       </div>

       <div className='flex lg:justify-start justify-center items-center  bg-no-repeat bg-right-bottom ' style={{backgroundImage:"url('https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg')"}}>
         <img className='h-80 rounded-lg' src='https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=600'  alt='apple kids image' />
       </div>
 </div>
       
 


       {/* Teachers */}
       <Teachers/>

       {/* gallery */}

       <Homegallery/>

    
    </>
   
  )
}

export default Homebot 




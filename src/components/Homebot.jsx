import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Teachers from './Teachers';


function Homebot() {
 
  return (
 <>
       <div className='min-h-[300px]  bg-no-repeat flex flex-col justify-start mt-6 items-center gap-4'  style={{backgroundImage:"url('https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg')"}}>
       <button className='bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg h-8  '>
               Our mission
             </button>   
             <p className="flex items-center border-2 border-red-200 rounded-lg p-3 mb-4 shadow-md sm:w-96">
          <i className="fas fa-book text-red-500 mr-3"></i>
          Provide value-based education
        </p>
        <p className="flex items-center border-2 border-red-200 rounded-lg p-3 mb-4 shadow-md sm:w-96">
          <i className="fas fa-user-graduate text-red-500 mr-3"></i>
          Mold the character of the younger generation
        </p>
        <p className="flex items-center border-2 border-red-200 rounded-lg p-3 mb-4 shadow-md sm:w-96">
          <i className="fas fa-child text-red-500 mr-3"></i>
          Stress-free, child-centered, holistic education
        </p>
       </div>
 


       {/* Teachers */}
       <Teachers/>

    
    </>
   
  )
}

export default Homebot 


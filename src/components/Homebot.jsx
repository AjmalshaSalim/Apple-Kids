import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Teachers from './Teachers';


function Homebot() {
  const { ref: facilityRef, inView: facilityInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this value based on when you want to trigger the animation
  });
  const { ref: staffRef, inView: staffInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
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

     {/* footertop */}

       <div className='min-h-[200px] bg-yellow-200 grid sm:grid-cols-3'>
      <div ref={facilityRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
        {facilityInView && <CountUp end={20} duration={2} className='text-6xl font-extrabold text-yellow-600' />}
        <h2 className='text-2xl font-semibold text-gray-700'>Facility</h2>
      </div>
      <div ref={staffRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
        {staffInView && <CountUp end={8} duration={2} className='text-6xl font-extrabold text-yellow-600' />}
        <h2 className='text-2xl font-semibold text-gray-700'>Staff</h2>
      </div>
      <div ref={experienceRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
        {experienceInView && <CountUp end={10} duration={2} className='text-6xl font-extrabold text-yellow-600' />}
        <h2 className='text-2xl font-semibold text-gray-700'>Experience</h2>
      </div>
    </div>

    </>
   
  )
}

export default Homebot 


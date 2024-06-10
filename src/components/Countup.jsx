import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Countup() {
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
      const { ref: studentsRef, inView: studentsInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
  return (
    
    <>

    
    <div className='min-h-[200px] bg-yellow-200 grid sm:grid-cols-4'>
    <div ref={studentsRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
      {studentsInView && <CountUp end={100} duration={2}  suffix="+" className='text-6xl font-extrabold text-yellow-600' />} 
      
      <h2 className='text-2xl font-semibold text-gray-700'>Total students</h2>
    </div>
    <div ref={facilityRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
      {facilityInView && <CountUp end={20} duration={2} className='text-6xl font-extrabold text-yellow-600' />}
      <h2 className='text-2xl font-semibold text-gray-700'>services</h2>
    </div>
    <div ref={staffRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
      {staffInView && <CountUp end={8} duration={2} className='text-6xl font-extrabold text-yellow-600' />}
      <h2 className='text-2xl font-semibold text-gray-700'>Staff</h2>
    </div>
    <div ref={experienceRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
      {experienceInView && <CountUp end={5} duration={2} className='text-6xl font-extrabold text-yellow-600' />}
      <h2 className='text-2xl font-semibold text-gray-700'>Experience</h2>
    </div>
  </div>

    </>

    

  )
}

export default Countup
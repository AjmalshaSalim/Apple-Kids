import React from 'react'
import aboutImage from '../../assets/images/about-2.jpg'
import bg from '../../assets/images/svg-element-10.svg'
import eruma from '../../assets/images/svg-element-40.svg'

function Imagesection() {
  return (
    <>
    <div className='min-h-[600px] grid sm:grid-cols-2 '>
        <div className='flex  sm:justify-end items-center justify-center  bg-no-repeat  sm:bg-left-top xl:bg-center 2xl:bg-right-bottom  mb-[100px] p-6 ' style={{backgroundImage:`url(${bg})`,
         backgroundSize:'500px 400px'}}>
             <div className='bg-pink-200  w-[300px] h-[400px] overflow-hidden  rounded-md ' >
                 <img src={aboutImage} alt='about-image ' className='w-full h-full' />    
             </div>
             <img src={eruma} alt='eruma'className='w-[100px] h-[100px] relative top-[200px] right-[50px]  '/>
             
        </div>
        
        <div className='flex flex-col justify-center  sm:items-start items-center gap-6 p-4  '>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold  font-fredoka  '>A Diverse and  <br />Inclusive Community</h1>
                <p className='text-base sm:text-lg md:text-xl font-league-spartan w-[350px] sm:p-0 p-4 '>
    Get the right mortgage to buy your new home — or refinance to take advantage of low rates or convert equity into cash. We've got the personal service to guide you along the way.
  </p>
            </div>
        </div>

   
    </>
  )
}

export default Imagesection
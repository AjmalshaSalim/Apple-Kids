import React from 'react'
import Navbar from '../components/Navbar'
// import Feedback from '../components/Feedback'
import Countup from '../components/Countup'
import aboutImage from '../assets/images/home-main-4.png'
import Homecards from '../components/Homecards'


function About() {
 
 
  return (
      <>
       <Navbar/>
 
      {/* Banner section */}
       <div className='min-h-[300px] bg-gray-200 flex justify-center items-center flex-col gap-6'>
       <h1 className="font-bold text-2xl text-white font-mono sm:text-3xl md:text-4xl lg:text-5xl">About Us</h1>
      <p className="font-bold text-white font-sans sm:text-lg md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet</p>
       </div>
        

        {/* top-section */}
       <div className='min-h-[400px] grid sm:grid-cols-2'>
          <div className='flex justify-center items-center sm:mt-0  mt-6 '>
          <img  className=' w-72 h-80 rounded-tl-2xl rounded-br-3xl' src='https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600' />
          </div>
          <div className='flex flex-col justify-center sm:items-start gap-2 items-center bg-no-repeat ' style={{backgroundImage :`url(${aboutImage})`,
           backgroundPosition:'right bottom'}}>
          <h1 className='text-2xl sm:text-3xl md:text-3xl font-bold font-serif text-center '>
                
                About Apple Kids🍎
            </h1>
              <p className='text-base sm:text-lg md:text-xl text-center w-72 sm:p-0  p-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempore nobis ipsa delectus amet excepturi quo cupiditate, accusamus !  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt ratione ea porro aspernatur aliquam iusto.
            </p>
          </div> 
       </div>


       {/* mid-section */}
       <div className='min-h-[300px] bg-gray-200 flex justify-start items-center flex-col gap-4 px-4 rounded-custom-top '>
       <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center font-mono sm:mt-4 mt-2">
        Lorem, ipsum dolor.
      </h1>
      <p className="text-base font-normal text-gray-600 leading-relaxed w-4/5 mx-auto text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sunt veniam optio cupiditate exercitationem ratione, nisi aliquid temporibus voluptates nemo quibusdam in fuga illo. Molestiae officiis fuga praesentium provident pariatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam suscipit dolorem nisi non voluptas, dicta placeat eaque ex itaque aut ducimus expedita fugiat sed labore dolores saepe consequatur. Qui!.
      </p>
     
       </div>

<Homecards/>
      {/* feedback section */}

     {/* <Feedback/> */}

     <Countup/>



      </>
       
    
   

  )
}

export default About
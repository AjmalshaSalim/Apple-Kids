import React from 'react'

import bg from '../assets/images/aj1.png'
import Footertop from './Footertop'
import logo from '../assets/images/logoapp.png'

function Footer() {
  return (
 <>
   <Footertop/>

{/* second portion */}

        <div className=' min-h-[600px] bg-no-repeat md:bg-cover bg-contain flex justify-start items-center overflow-hidden bg-[#F87253]  ' style={{ backgroundImage: `url(${bg})` }}
        >
         <div className=' grid md:grid-cols-4  mx-auto container'>


         <div className='flex flex-col space-y-6 justify-start items-center sm:p-2 p-4 '>
               <img  src={logo} alt='logo' className='md:w-[100px] md:h-[100px] w-[50px] h-[50px]' />
      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-league-spartan">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat libero illo beatae, aspernatur dignissimos quas consequuntur fuga quidem ad quisquam optio obcaecat.
      </p>
                   
                </div> 
   
             <div className='flex flex-col lg:space-y-6 space-y-3 justify-start items-center sm:p-2 p-4'>
                <h1 className="text-3xl md:text-2xl font-bold text-white font-fredoka">Pages</h1>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white font-league-spartan">Home</h3>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white font-league-spartan">About Us</h3>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white font-league-spartan">Contact</h3>
      <h3 className="text-lg md:text-md font-medium  cursor-pointer text-white font-league-spartan">News & Events</h3>
      <h3 className="text-lg md:text-md font-medium  cursor-pointer text-white font-league-spartan">Gallery</h3>
                </div>
                <div className='flex flex-col lg:space-y-6 space-y-3 justify-start items-center sm:p-2 p-4'>
                <h1 className="text-3xl md:text-2xl font-bold text-white  font-fredoka">courses</h1>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white font-league-spartan">Home</h3>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white font-league-spartan">About Us</h3>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white font-league-spartan">Contact</h3>
      <h3 className="text-lg md:text-md font-medium  cursor-pointer text-white font-league-spartan">News & Events</h3>
      <h3 className="text-lg md:text-md font-medium  cursor-pointer text-white font-league-spartan">Gallery</h3>
                </div>

                <div className='flex flex-col lg:space-y-6  space-y-3 justify-start items-center sm:p-2 p-4'>
                <h1 className="text-3xl md:text-2xl font-bold text-white  font-fredoka">Information</h1>
                <div className="flex items-center">
      <span><img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/FFFFFF/address.png" alt="address"/></span>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white ml-2 font-league-spartan ">Kazhakutam,Trivandrum</h3>
    </div> 
    <div className="flex items-center">
      <span><img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/FFFFFF/email.png" alt="email"/></span>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white ml-2 font-league-spartan ">abc@gmail.com</h3>
    </div> 
    </div>
              


         </div>
        </div>

        </>    
      
  )
}

export default Footer


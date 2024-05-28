import React from 'react'

function Footer() {
  return (
    <>
    <div className='min-h-[700px]'>


    <div className="min-h-[300px] flex flex-col justify-start items-center p-4  ">
      <h1 className="font-sans text-4xl font-black w-full h-16 flex justify-center items-center tracking-wider">
        Instagram <span className="text-red-500">@kindergarten</span>
      </h1>
      <p className="font-sans text-sm text-center tracking-wider">
        We're always up to something good. Follow along and don't miss a minute.
      </p>
    </div>


        <div className='min-h-[400px] bg-fuchsia-300 rounded-tl-[80px] rounded-tr-[80px] flex flex-col p-4'>
            <div className='min-h-[280px] grid sm:grid-cols-5 mx-auto container gap-2 mt-6 space-y-2'>


       {/* first */}
                <div className='flex flex-col space-y-6 justify-start items-center '>
                <h1 className="text-white text-4xl  font-serif italic">
        Lal Ninas
      </h1>
      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat libero illo beatae, aspernatur dignissimos quas consequuntur fuga quidem ad quisquam optio obcaecat.
      </p>
                   <div className='flex '>
                   <img width="30" height="30" src="https://img.icons8.com/bubbles/50/facebook-new.png" alt="facebook-new"/>
                   <img width="30" height="30" src="https://img.icons8.com/bubbles/50/instagram-new--v2.png" alt="instagram-new--v2"/>
                   <img width="30" height="30" src="https://img.icons8.com/bubbles/50/twitter-squared.png" alt="twitter-squared"/>
                   <img width="30" height="30" src="https://img.icons8.com/bubbles/50/youtube-play.png" alt="youtube-play"/>
                   </div>
                </div>
       {/* second */}

                <div className='flex flex-col space-y-6 justify-start items-center'>
                <h1 className="text-3xl md:text-2xl font-bold text-white">Pages</h1>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white">Home</h3>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white">About Us</h3>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white">Contact</h3>
      <h3 className="text-lg md:text-md font-medium  cursor-pointer text-white">News & Events</h3>
      <h3 className="text-lg md:text-md font-medium  cursor-pointer text-white">Gallery</h3>
                </div>


      <div className='flex flex-col space-y-6 justify-start items-center'>
                <h1 className="text-3xl md:text-2xl font-bold text-white">Programs</h1>
                <h3 className="text-lg md:text-md font-medium cursor-pointer text-white">Home</h3>
                <h3 className="text-lg md:text-md font-medium cursor-pointer text-white">About Us</h3>
                <h3 className="text-lg md:text-md font-medium cursor-pointer text-white">Contact</h3>
                <h3 className="text-lg md:text-md font-medium  cursor-pointer text-white">News & Events</h3>
                <h3 className="text-lg md:text-md font-medium  cursor-pointer text-white">Gallery</h3>
                </div>


        <div className='flex flex-col space-y-6 justify-start items-center'>
                <h1 className="text-3xl md:text-2xl font-bold text-white">Lessons</h1>
                <h3 className="text-lg md:text-md font-medium cursor-pointer text-white">Courses</h3>
                <h3 className="text-lg md:text-md font-medium cursor-pointer text-white">Classes</h3>
                <h3 className="text-lg md:text-md font-medium cursor-pointer text-white">Groups</h3>
                
                </div>


                <div className='flex flex-col space-y-6 justify-start sm:items-start items-center'>
                <h1 className="text-3xl md:text-2xl font-bold text-white">Information</h1>
                <div className="flex items-center">
      <span><img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/FFFFFF/address.png" alt="address"/></span>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white ">Kazhakutam,Trivandrum</h3>
    </div> 
    <div className="flex items-center">
      <span><img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/FFFFFF/email.png" alt="email"/></span>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white ">abc@gmail.com</h3>
    </div> 
               
    <div className="flex items-center">
      <span><img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/FFFFFF/ringer-volume.png" alt="ringer-volume"/></span>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white ">+91 7552345617</h3>
    </div> 
                
                </div>
            </div>


            <div className='flex  sm:justify-start items-center justify-center sm:p-0 p-4 mx-auto container ' >
               <p className='text-white sm:text-lg text-md'>jannakondeth@2024 -- This is a Sample Website</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
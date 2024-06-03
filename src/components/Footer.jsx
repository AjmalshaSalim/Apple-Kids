import React from 'react'
import aama from '../assets/images/svg-element-12.svg'

function Footer() {
  return (
    <>
    <div className='min-h-[700px]'>

{/* first portion */}
    <div className="min-h-[300px] flex flex-col justify-start items-center p-4  ">
      <a href='https://www.instagram.com/apple_kids24?utm_source=qr&igsh=MXc3OHVsNzl6aHF3Zw=='>
      <h1 className="font-sans sm:text-4xl text-md font-black w-full h-16 flex justify-center items-center tracking-wider">
  Instagram&nbsp;<span className="text-red-500">@Apple Kids🍏</span>
</h1>
      </a>
    
      <p className="font-sans text-sm text-center tracking-wider">
        We're always up to something good. Follow along and don't miss a minute.
      </p>
      <img  className=' w-52 h-56' src={aama} alt='aama'/>
     
     
      {/* <div class="elementor-widget-container" style="transform: rotate(5.15065deg);">
        <img loading="lazy" decoding="async" width="167" height="206" src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34.png" class="attachment-full size-full wp-image-27721 cmsmasters_img cmsmasters-lazyload ls-is-cached lazyloaded" alt="" data-sizes="(max-width: 167px) 100vw, 167px" data-src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34.png" data-srcset="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34.png 167w, https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34-30x37.png 30w, https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34-8x10.png 8w" srcset="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34.png 167w, https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34-30x37.png 30w, https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34-8x10.png 8w" sizes="(max-width: 167px) 100vw, 167px"/>												
	</div> */}



    </div>


{/* second portion */}

        <div className='min-h-[500px] bg-fuchsia-300 rounded-tl-[80px] rounded-tr-[80px] flex flex-col p-4'>
            <div className='min-h-[400px] grid sm:grid-cols-5 mx-auto container gap-2 mt-6 space-y-2'>


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
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white ml-2 ">Kazhakutam,Trivandrum</h3>
    </div> 
    <div className="flex items-center">
      <span><img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/FFFFFF/email.png" alt="email"/></span>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white ml-2 ">abc@gmail.com</h3>
    </div> 
               
    <div className="flex items-center">
      <span><img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/FFFFFF/ringer-volume.png" alt="ringer-volume"/></span>
      <h3 className="text-lg md:text-md font-medium cursor-pointer text-white ml-2">+91 7552345617</h3>
    </div> 
                
                </div>
            </div>


            <div className='flex  sm:justify-start items-center justify-center sm:p-0 p-4 mx-auto container ' >
               <p className='text-white sm:text-lg text-md'>a2zalphabetsolutionz@2024 -- This is a Sample Website</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
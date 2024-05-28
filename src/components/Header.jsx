import React from 'react'

function Header() {
  return (
    <div className='min-h-[600px] bg-gray-200'>
      {/* navsection */}
        <div className='min-h-[100px] grid sm:grid-cols-2'>
          {/* titleSection */}
           <div className='flex justify-start items-center p-4'>
           <a  href="https://los-ninos.cmsmasters.net/los-ninos" class="elementor-widget-cmsmasters-site-logo__link" rel="nofollow"><img src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/logo-main.svg" alt="Los Niños Main" title="Los Niños Main" class="cmsmasters-lazyload-disabled elementor-widget-cmsmasters-site-logo__img elementor-widget-cmsmasters-site-logo-main"/></a>
           </div>

           {/* navlinkssection */}
           <div className='flex space-x-5 justify-start items-center'>
                <h3 className='text-lg font-bold font-mono'>Home</h3>
                <h3 className='text-lg font-bold font-mono'>About</h3>
                <h3 className='text-lg font-bold font-mono'>News & Events</h3>
                <h3 className='text-lg font-bold font-mono'>Gallery</h3>
                <h3 className='text-lg font-bold font-mono'>Contact</h3>
                <button className='bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>
                  Enroll Now
                </button>
          </div>
          <img decoding="async" width="30" height="50" src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg" class="attachment-full size-full wp-image-32937" alt="" />
        </div>


        {/* subHeaderSection */}
        <div>

        </div>

    </div>
  )
}

export default Header
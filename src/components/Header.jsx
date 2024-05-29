import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
   <div className='min-h-[600px] bg-gray-200 w-auto'>
      {/* navsection */}
      <div className='min-h-[100px] grid sm:grid-cols-12 sm:w-auto w-full'>
        {/* titleSection */}
        <div className='flex sm:justify-start items-center sm:p-4 justify-between p-4 sm:col-span-4'>
          <a href="https://los-ninos.cmsmasters.net/los-ninos" className="elementor-widget-cmsmasters-site-logo__link" rel="nofollow">
            <img
              src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/logo-main.svg"
              alt="Los Niños Main"
              title="Los Niños Main"
              className="cmsmasters-lazyload-disabled elementor-widget-cmsmasters-site-logo__img elementor-widget-cmsmasters-site-logo-main"
            />
          </a>
          <div className='sm:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>
        </div>

        {/* navlinkssection */}
        <div className={`flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-5 md:justify-center justify-start items-center sm:flex ${isOpen ? 'flex' : 'hidden'} sm:block sm:p-4 sm:col-span-8`}>
          <h3 className='text-lg font-bold font-mono'>Home</h3>
          <h3 className='text-lg font-bold font-mono'>About</h3>
          <h3 className='text-lg font-bold font-mono'>Events</h3>
          <h3 className='text-lg font-bold font-mono'>Gallery</h3>
          <h3 className='text-lg font-bold font-mono'>Contact</h3>
          <button className='bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>
            Enroll Now
          </button>
        </div>
      </div>

      {/* subHeaderSection */}
      <div className='w-auto min-h-[500px] grid sm:grid-cols-2'>
        <div className='sm:block hidden'>
          <img
            decoding="async"
            src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg"
            className='w-96 h-96'
            alt="Illustration"
          />
        </div>
        
        <div className='flex flex-col justify-center items-center space-y-6 p-4'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-center'>
            Little Minds <br /> Grow Here !!
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. ratione de
          </p>
          <div className='flex space-x-4'>
            <button className='bg-cyan-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>
              About US
            </button>
            <button className='bg-pink-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>
              Contact US
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-16 max-w-screen-xxl mx-auto'>

      
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 md:py-[5vw] ml-4 md:ml-10'>

        
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
          Book Appointment <br /> with Trusted Doctors
        </p>

    
        <div>
          <img 
            src={assets.group_profiles} 
            alt="Doctor Profile"
            className="w-32 h-auto mb-4"
          />
        </div>

      
        <p className="text-white">
          Simply browse through our extensive list of trusted doctors and schedule
          your appointment at your convenience. We ensure quality and trust.
        </p>

        
        <a href="#" className="flex items-center gap-2 text-white font-medium hover:underline">
          Book Appointment
          <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
        </a>
      </div>


    { }
    
      <div className='md:w-1/2 relative pt-10'>
        <img
          className="md:absolute md:bottom-0 md:right-0 md:left-180  w-[280px] md:w-[380px] h-auto rounded-lg"
          src={assets.header_img}
          alt="Header"
        />
      </div>

    </div>
  )
}

export default Header

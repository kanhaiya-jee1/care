import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#4f7cff] rounded-2xl px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto items-center overflow-hidden">

      {/* Left Side - Text and Info */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-20">

  
        <div className="flex items-center bg-white/20 px-4 py-1 rounded-full text-sm text-white font-medium shadow">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          Trusted Healthcare Platform
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-snug">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        
        <div className="flex items-center gap-4">
     
          <img src={assets.group_profiles} alt="Group Profiles" className="w-20 h-auto" />
          <div>
            <p className="text-yellow-400 text-lg font-semibold">
              ★★★★★ <span className="text-white ml-2 text-base font-medium">4.9/5 (12,000+ reviews)</span>
            </p>
            <p className="text-white text-sm font-light mt-1">
              Simply browse through our extensive list of trusted doctors, <br />
              schedule your appointment hassle-free.
            </p>
          </div>
        </div>


        <a
          href="speciality"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition flex items-center gap-2 mt-4"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
        </a>
      </div>

      {/* Right Side - Image and Tags */}
      <div className="md:w-1/2 relative flex justify-center md:justify-end mt-10 md:mt-0">
      
        <img
          className="w-[320px] md:w-[420px] lg:w-[480px] h-auto"
          src={assets.header_img}
          alt="Header"
        />

       
        <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <span className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0"></span>
          <p className="text-gray-700 text-sm font-semibold leading-tight">
            500+ Doctors <br />
            <span className="text-gray-500 font-normal">Available Now</span>
          </p>
        </div>

  
        <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <span className="w-5 h-5 bg-blue-500 rounded-full flex-shrink-0"></span>
          <p className="text-gray-700 text-sm font-semibold leading-tight">
            24/7 Support <br />
            <span className="text-gray-500 font-normal">Always Here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

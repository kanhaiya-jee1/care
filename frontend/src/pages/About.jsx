import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
  return (
    <div className="px-6 md:px-20 lg:px-32 py-10">
  
      <div className="text-center text-2xl pt-5 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

     
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center justify-center">
    
        <div className="flex justify-center">
          <img
            src={assets.about_image}
            alt="About Us"
            className="w-[420px] h-[340px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-[450px] text-gray-600 text-sm leading-6 space-y-3 text-justify">
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
            At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments
            and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our
            platform, integrating the latest advancements to improve user experience and deliver superior service.
            Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you
            every step of the way.
          </p>
          <b className="text-gray-800 block text-base">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the
            gap between patients and healthcare providers, making it easier for you to access the care you need, when
            you need it.
          </p>
        </div>
      </div>

     
      <div className="text-xl my-4 text-center md:text-left">
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 gap-5 justify-center md:justify-start">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-3 text-[15px] hover:bg-[#4A6CF7] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer w-[300px] h-[220px]">
          <b>Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-3 text-[15px] hover:bg-[#4A6CF7] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer w-[300px] h-[220px]">
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-3 text-[15px] hover:bg-[#4A6CF7] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer w-[300px] h-[220px]">
          <b>Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

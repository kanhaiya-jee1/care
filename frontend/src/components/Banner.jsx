import React from 'react';
// import React, { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// ✅ Correct image import
import  { assets } from "../assets/assets_frontend/assets";

const Banner = () => {

//   line no 11 to 27 is proper funcanality code here 

//   const { docId } = useParams();
//   const { doctors, currencySymbol } = useContext(AppContext);

//   const [docInfo, setDocInfo] = useState(null);

//   useEffect(() => {
//     if (doctors && docId) {
//       const foundDoctor = doctors.find((doc) => doc._id === docId);
//       setDocInfo(foundDoctor);
//     }
//   }, [doctors, docId]);

//   if (!docInfo) {
//     return <h2 className="text-center mt-10">Loading doctor details...</h2>;
//   }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-3xl px-6 md:px-12 lg:px-16 py-12 flex flex-col md:flex-row items-center justify-between mt-10 shadow-2xl">

      {/* LEFT CONTENT */}
      <div className="md:w-1/2 max-w-xl text-center md:text-left space-y-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
          Book Appointment 
        </h1>

        {/* Description */}
        <p className="text-blue-100 text-base md:text-lg leading-relaxed">
          Experience world-class healthcare with our network of certified medical
          professionals. Quick booking, secure consultations, and personalized care.
        </p>

        {/* Button */}
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition inline-flex items-center gap-2">
          Create Account →
        </button>

        {/* Rating / Secure / Support */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 mt-6 justify-center md:justify-start">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-blue-50">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-400 text-lg">✔</span>
            <span className="text-blue-50">100% Secure</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-blue-200 text-lg">⏰</span>
            <span className="text-blue-50">24/7 Available</span>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
        <img
          src={assets.appointment_img}
          alt="Doctor"
          className="w-[320px] md:w-[400px] lg:w-[450px] rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;

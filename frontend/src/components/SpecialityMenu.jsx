//   1
import React from 'react'
import { Link } from 'react-router-dom' 
import { specialityData } from "../assets/assets_frontend/assets"

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      {/* Heading */}
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors, schedule your app.
      </p>

      {/* Speciality Cards */}
      <div className='flex sm:justify-center gap-6 pt-5 w-full overflow-scroll'>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctor/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 group'
          >
            {/* Image */}
            <img
              className='wave-on-hover inline-block w-16 sm:w-24 mb-2 rounded-full border-2 border-gray-200 shadow-md'
              src={item.image}
              alt={item.speciality}
            />

            {/* Speciality Name */}
            <p className='transition-all duration-300 group-hover:text-green-600'>
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu

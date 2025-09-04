import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { doctors } from '../assets/assets_frontend/assets'

const TopDoctor = () => {
  const navigate = useNavigate()
  const { doctor } = useContext(AppContext)

  return (
    <div className='py-10 px-4 text-gray-800'>
      <h1 className='text-2xl font-semibold mb-2 text-center'>Top Doctors to Book</h1>
      <p className='text-sm mb-6 text-center'>
        Simply browse through our extensive list of trusted doctors
      </p>

      {/* Doctor Cards */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6'>
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className='border p-4 rounded-lg shadow-md bg-white 
                       hover:shadow-2xl hover:-translate-y-2 hover:scale-105 
                       transition-all duration-300 ease-in-out cursor-pointer group'
          >
            {/* Doctor Image */}
            <div className='overflow-hidden rounded-lg'>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-24 sm:h-28 md:h-32 object-cover mb-2 rounded-lg 
                           transform group-hover:scale-110 group-hover:rotate-1 
                           transition-all duration-500 ease-in-out'
              />
            </div>

            {/* Doctor Info */}
            <div>
              <div className='flex justify-between text-sm text-green-600'>
                <p>✔️</p> <p>Available</p>
              </div>
              <p className='font-semibold mt-2 group-hover:text-green-700 flex items-center gap-1'>
                {item.name}
                <span className='opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300'>
                  ➡️
                </span>
              </p>
              <p className='text-sm text-gray-600'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className='mt-10 flex justify-center'>
        <button
          onClick={() => {
            navigate('/doctor')
            scrollTo(0, 0)
          }}
          className='bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300'
        >
          More
        </button>
      </div>
    </div>
  )
}

export default TopDoctor

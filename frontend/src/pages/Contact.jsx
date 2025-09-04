import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>
          CONTACT <span className='text-gray-700 font-semibold'>US</span>       
        </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        {/* Image Section */}
        <img 
          className='w-full md:w-[360px] h-[300px] object-cover rounded-lg shadow-lg' 
          src={assets.contact_image} 
          alt="Contact"
        />

        {/* Text Section */}
        <div className='flex flex-col justify-center items-start gap-6 max-w-[360px]'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>54709 willms Station <br /> Suit 350, Washignton, USA</p>
          <p className='text-gray-500'>Tel:+ 91 - 9199218217  <br /> Email: kanhaiyajee804418@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact

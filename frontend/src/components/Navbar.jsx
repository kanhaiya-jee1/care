import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets.js';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400 px-4 md:px-8'>
    
      <img 
        onClick={() => navigate('/')} 
        className='w-44 cursor-pointer' 
        src={assets.logo} 
        alt="Logo" 
      />

    
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/">
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-slate-900 w-3/5 m-auto' />
        </NavLink>
        <NavLink to="/doctors">
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-slate-900 w-3/5 m-auto' />
        </NavLink>
        <NavLink to="/about">
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
        <NavLink to="/contact">
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
      </ul>

    
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile"/>
            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown"/>
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => navigate('/login')} 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Create Account
          </button>
        )}

   
        <img 
          onClick={() => setShowMenu(true)} 
          className='w-6 md:hidden cursor-pointer' 
          src={assets.menu_icon} 
          alt='menu' 
        />
      </div>

   
      <div className={`${showMenu ? 'fixed w-full h-full top-0 right-0 z-20 bg-white' : 'hidden'} md:hidden transition-all`}>
        <div className='flex justify-between items-center p-4'>
          <img src={assets.logo} alt="Logo" className='w-36'/>
          <img 
            onClick={() => setShowMenu(false)} 
            src={assets.cross_icon} 
            alt='close' 
            className='w-7 cursor-pointer'
          />  
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <NavLink  to="/" onClick={() => setShowMenu(false)}> <p className='px-4 py-2 rounded  inline-block'>Home</p></NavLink>
          <NavLink  to="/doctors" onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded  inline-block'>ALL DOCTORS</p></NavLink>
          <NavLink  to="/about" onClick={() => setShowMenu(false)}><p className= 'px-4 py-2 rounded  inline-block'>ABOUT</p></NavLink>
          <NavLink  to="/contact" onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded  inline-block'>CONTACT</p></NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu';
import logo from '../../assets/Rehkitz_negativ.png'

function Navbar({menuVisible, setMenuVisible}) {

  return (
    <nav className="absolute top-0 text-white w-screen mt-10 flex items-center">
      <MobileMenu visible={menuVisible}/>
      <button className="z-20 pl-[10%]" onClick={() => setMenuVisible(!menuVisible)}>
        { menuVisible ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars lg:hidden" ></i>)
        }
      </button>
      <Link to="/" className="hover:cursor-pointer hidden lg:block"><img src={logo} className="w-28"/></Link>
      <ul className="hidden lg:flex ml-10 text-lg">
        <li className="ml-10 hover:text-[#45bf41] hover:cursor-pointer">Über uns</li>
        <li className="ml-10 hover:text-[#45bf41] hover:cursor-pointer">Unsere Arbeit</li>
        <li className="ml-10 hover:text-[#45bf41] hover:cursor-pointer">Vereinssatzung</li>
        <li className="ml-10 hover:text-[#45bf41] hover:cursor-pointer">Blog</li>
      </ul>
      <a href="" className="text-white text-lg rounded-3xl bg-[#45bf41] py-3 px-7 mr-[10%] hidden ml-auto lg:block hover:cursor-pointer hover:bg-[#4b8c48]">Spenden</a>
    </nav>
  )
}

export default Navbar
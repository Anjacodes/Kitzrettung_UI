import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Rehkitz_negativ.png'

function MobileMenu({visible}) {
  if (visible) {
    return (
    <div className='h-screen w-screen fixed top-0 bg-[#102613] text-white py-40 px-20'>
      <Link to="/" className="hover:cursor-pointer"><img src={logo}className="w-20 mb-12"/></Link>
      <h2 className="mb-6 hover:text-[#45bf41] hover:cursor-pointer">Über uns</h2>
      <h2 className="mb-6 hover:text-[#45bf41] hover:cursor-pointer">Unsere Arbeit</h2>
      <h2 className="mb-6 hover:text-[#45bf41] hover:cursor-pointer">Vereinssatzung</h2>
      <h2 className="mb-12 hover:text-[#45bf41] hover:cursor-pointer">Blog</h2>
      <a href="" className="text-white text-lg rounded-3xl bg-[#45bf41] py-3 px-7 lg:block hover:cursor-pointer hover:bg-[#4b8c48]">Spenden</a>
  </div>
  )}
}

export default MobileMenu;
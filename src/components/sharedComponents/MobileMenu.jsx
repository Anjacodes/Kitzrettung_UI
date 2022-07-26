import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Rehkitz_negativ.png'

function MobileMenu({visible}) {
  if (visible) {
    return (
    <div className='h-screen w-screen fixed top-0 bg-[#102613] text-white py-40 px-20'>
      <Link to="/" className="hover:cursor-pointer"><img src={logo}className="w-28 mb-12"/></Link>
     <ul>
        <li className="font-avenirHeavy mb-6 hover:cursor-pointe group">
          <Link to="/about" className='hover:text-second'>ÜBER UNS</Link>
          <ul className='text-base hidden group-hover:block'>
            <li><a className='hover:text-second hover:cursor-pointer'>Unsere Motivation</a></li>
            <li><a className='hover:text-second hover:cursor-pointer'>Unser Verein</a></li>
            <li><a className='hover:text-second hover:cursor-pointer'>Unsere Arbeit</a></li>
          </ul>
        </li>
        <li className="font-avenirHeavy mb-6 hover:cursor-pointer group">
          <a className='hover:text-second'>LEISTUNGEN</a>
          <ul className='text-base hidden group-hover:block'>
            <li><a className='hover:text-second hover:cursor-pointer'>Verfahren</a></li>
            <li><a className='hover:text-second hover:cursor-pointer'>Rechtliches</a></li>
            <li><a className='hover:text-second hover:cursor-pointer'>Kosten</a></li>
          </ul>
        </li>
        <li className="font-avenirHeavy mb-6 hover:cursor-pointer group">
          <a className='hover:text-second'>WISSENSWERTES</a>
          <ul className='text-base hidden group-hover:block'>
            <li><a className='hover:text-second hover:cursor-pointer'>Biologie</a></li>
            <li><a className='hover:text-second hover:cursor-pointer'>Technik</a></li>
            <li><a className='hover:text-second hover:cursor-pointer'>Galerie</a></li>
          </ul>
        </li>
        <li className="font-avenirHeavy mb-12 hover:text-second hover:cursor-pointer">BLOG</li>
     </ul>
      <a href="" className="text-white text-lg rounded-3xl bg-[#45bf41] py-3 px-7 lg:block hover:cursor-pointer hover:bg-[#4b8c48]">Spenden</a>
  </div>
  )}
}

export default MobileMenu;
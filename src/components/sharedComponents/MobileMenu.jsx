import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Rehkitz_negativ.png'

function MobileMenu({visible, setMenuVisible}) {

  const body = document.querySelector('body');
  visible ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden');

  if (visible) {
    return (
    <div className='h-screen w-screen fixed top-0 bg-[#102613] text-white py-40 px-20'>
      <Link to="/" className="hover:cursor-pointer"><img src={logo} className="w-28 mb-12" onClick={() => setMenuVisible(false)} /></Link>
     <ul className='mb-20'>
        <li className="font-avenirHeavy mb-6 hover:cursor-pointe group">
          <a className='hover:text-second'>ÜBER UNS</a>
          <ul className='text-base hidden group-hover:block'>
            <li><NavLink to="/motivation" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Unsere Motivation</NavLink></li>
            <li><NavLink to="/verein" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Unser Verein</NavLink></li>
            <li><NavLink to="/arbeit" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Unsere Arbeit</NavLink></li>
          </ul>
        </li>
        <li className="font-avenirHeavy mb-6 hover:cursor-pointer group">
          <a className='hover:text-second'>LEISTUNGEN</a>
          <ul className='text-base hidden group-hover:block'>
            <li><NavLink to="/verfahren" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Verfahren</NavLink></li>
            <li><NavLink to="/rechtliches" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Rechtliches</NavLink></li>
            <li><NavLink to="kosten" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Kosten</NavLink></li>
          </ul>
        </li>
        <li className="font-avenirHeavy mb-6 hover:cursor-pointer group">
          <a className='hover:text-second'>WISSENSWERTES</a>
          <ul className='text-base hidden group-hover:block'>
            <li><NavLink to="/biologie" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Biologie</NavLink></li>
            <li><NavLink to="/technik" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Technik</NavLink></li>
            <li><NavLink to="/galerie" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Galerie</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/blog" className="font-avenirHeavy mb-12 hover:text-second hover:cursor-pointer" onClick={() => setMenuVisible(false)}>BLOG</NavLink></li>
     </ul>
      <a href="" className="text-white text-lg rounded-3xl bg-[#45bf41] py-3 px-7 lg:block hover:cursor-pointer hover:bg-[#4b8c48">Spenden</a>
  </div>
  )}
}

export default MobileMenu;
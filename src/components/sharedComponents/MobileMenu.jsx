import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Rehkitz_negativ.png'

function MobileMenu({visible, setMenuVisible}) {

  const body = document.querySelector('body');
  visible ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden');

  if (visible) {
    return (
    <div className='h-screen w-screen fixed top-0 bg-[#102613] text-white py-20 px-20 z-10'>
      <Link to="/" className="hover:cursor-pointer"><img src={logo} className="ml-auto w-28 mb-3" onClick={() => setMenuVisible(false)} /></Link>
     <ul className='mb-8'>
        <li className='font-avenirHeavy mb-4'><NavLink to="/" className="font-avenirHeavy hover:text-second hover:cursor-pointer" onClick={() => setMenuVisible(false)}>HOME</NavLink></li>
        <li className="font-avenirHeavy mb-4 hover:cursor-pointe group">
          <a className='hover:text-second'>ÜBER UNS</a>
          <ul className='text-base hidden group-hover:block'>
            <li><NavLink to="/motivation" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Unsere Motivation</NavLink></li>
            <li><NavLink to="/verein" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Unser Verein</NavLink></li>
            <li><NavLink to="/arbeit" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Unsere Arbeit</NavLink></li>
          </ul>
        </li>
        <li className="font-avenirHeavy mb-4 hover:cursor-pointer group">
          <a className='hover:text-second'>LEISTUNGEN</a>
          <ul className='text-base hidden group-hover:block'>
            <li><NavLink to="/verfahren" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Verfahren</NavLink></li>
            <li><NavLink to="/rechtliches" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Rechtliches</NavLink></li>
            <li><NavLink to="kosten" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Kosten</NavLink></li>
          </ul>
        </li>
        <li className="font-avenirHeavy mb-4 hover:cursor-pointer group">
          <a className='hover:text-second'>WISSENSWERTES</a>
          <ul className='text-base hidden group-hover:block'>
            <li><NavLink to="/biologie" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Biologie</NavLink></li>
            <li><NavLink to="/technik" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Technik</NavLink></li>
            <li><NavLink to="/galerie" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Galerie</NavLink></li>
          </ul>
        </li>
        <li className="font-avenirHeavy mb-4 hover:cursor-pointer group">
          <a className='hover:text-second'>KONTAKT</a>
          <ul className='text-base hidden group-hover:block'>
            <li><NavLink to="/kontakt" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Schreib uns</NavLink></li>
            <li><a href="https://order.webaro.cloud/?portal=rehkitzrettung-euskirchen.webaro.cloud" rel="noopener noreferrer" target="_blank" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>Buch uns</a></li>
          </ul>
        </li>
        <li className="font-avenirHeavy hover:cursor-pointer"><NavLink to="/blog" className='hover:text-second hover:cursor-pointer' onClick={() => setMenuVisible(false)}>BLOG</NavLink></li>
     </ul>
     <div className='flex justify-normal'>
        <NavLink to="/spenden" className="text-white text-lg text-center rounded-3xl bg-[#45bf41] py-3 w-28 mr-4 hover:cursor-pointer hover:bg-white hover:text-second" onClick={() => setMenuVisible(false)}>Spenden</NavLink>
        <a href="https://order.webaro.cloud/?portal=rehkitzrettung-euskirchen.webaro.cloud" target="_blank" className="text-second text-lg text-center rounded-3xl bg-white py-3 w-28 lg:block hover:cursor-pointer hover:bg-second hover:text-white" onClick={() => setMenuVisible(false)}>Buchen</a>
     </div>
  </div>
  )}
}

export default MobileMenu;
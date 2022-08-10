import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
      <Link to="/" className="hover:cursor-pointer hidden lg:block"><img src={logo} className="w-40"/></Link>
      <ul className="hidden lg:flex ml-10 text-lg">
        <li className="ml-10 group">
          <Link to="/about" className='hover:text-second hover:scale-125 hover:cursor-pointer font-avenirHeavy tracking-wider '>ÜBER UNS</Link>
          <ul className='absolute pt-2 hidden group-hover:block'>
            <li><NavLink to="/motivation" className='hover:cursor-pointer hover:text-second'>Unsere Motivation</NavLink></li>
            <li><NavLink to="/verein" className='hover:cursor-pointer hover:text-second'>Unser Verein</NavLink></li>
            <li><NavLink to="/arbeit" className='hover:cursor-pointer hover:text-second'>Unsere Arbeit</NavLink></li>
          </ul>
        </li>
        <li className="ml-10 group">
          <a className='hover:text-second hover:scale-125 hover:cursor-pointer font-avenirHeavy tracking-wider '>LEISTUNGEN</a>
          <ul className='absolute pt-2 hidden group-hover:block'>
            <li><NavLink to="/verfahren" className='hover:cursor-pointer hover:text-second'>Verfahren</NavLink></li>
            <li><NavLink to="/rechtliches" className='hover:cursor-pointer hover:text-second'>Rechtliches</NavLink></li>
            <li><NavLink to="/kosten" className='hover:cursor-pointer hover:text-second'>Kosten</NavLink></li>
          </ul>
        </li>
        <li className="ml-10 group">
          <a className='hover:text-second hover:scale-125 hover:cursor-pointer font-avenirHeavy tracking-wider '>WISSENSWERTES</a>
          <ul className='absolute pt-2 hidden group-hover:block'>
            <li><NavLink to="/biologie" className='hover:cursor-pointer hover:text-second'>Biologie</NavLink></li>
            <li><NavLink to="/technik" className='hover:cursor-pointer hover:text-second'>Technik</NavLink></li>
            <li><NavLink to="/galerie" className='hover:cursor-pointer hover:text-second'>Galerie</NavLink></li>
          </ul>
        </li>
        <li className="ml-10 group">
          <NavLink to="/blog" className='hover:text-second hover:scale-125 hover:cursor-pointer font-avenirHeavy tracking-wider '>BLOG</NavLink>
        </li>
      </ul>
      <a href="" className="text-white text-lg rounded-3xl bg-[#45bf41] py-3 px-7 mr-[10%] hidden ml-auto lg:block hover:cursor-pointer hover:bg-[#4b8c48]">Spenden</a>
    </nav>
  )
}

export default Navbar
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
      <Link to="/" className="hover:cursor-pointer hidden lg:block"><img src={logo} className="w-32"/></Link>
      <ul className="hidden lg:flex ml-10 text-lg">
        <li className="ml-10 group">
          <Link to="/about" className='hover:text-second hover:scale-125 hover:cursor-pointer font-avenirHeavy tracking-wider '>ÜBER UNS</Link>
          <ul className='absolute pt-2 hidden group-hover:block'>
            <li><a className='hover:cursor-pointer hover:text-second'>Unsere Motivation</a></li>
            <li><a className='hover:cursor-pointer hover:text-second'>Unser Verein</a></li>
            <li><NavLink to="/about/work" className='hover:cursor-pointer hover:text-second'>Unsere Arbeit</NavLink></li>
          </ul>
        </li>
        <li className="ml-10 group">
          <a className='hover:text-second hover:scale-125 hover:cursor-pointer font-avenirHeavy tracking-wider '>LEISTUNGEN</a>
          <ul className='absolute pt-2 hidden group-hover:block'>
            <li><a className='hover:cursor-pointer hover:text-second'>Verfahren</a></li>
            <li><a className='hover:cursor-pointer hover:text-second'>Rechtliches</a></li>
            <li><a className='hover:cursor-pointer hover:text-second'>Kosten</a></li>
          </ul>
        </li>
        <li className="ml-10 group">
          <a className='hover:text-second hover:scale-125 hover:cursor-pointer font-avenirHeavy tracking-wider '>WISSENSWERTES</a>
          <ul className='absolute pt-2 hidden group-hover:block'>
            <li><a className='hover:cursor-pointer hover:text-second'>Biologie</a></li>
            <li><a className='hover:cursor-pointer hover:text-second'>Technik</a></li>
            <li><a className='hover:cursor-pointer hover:text-second'>Galerie</a></li>
          </ul>
        </li>
        <li className="ml-10 group">
          <a className='hover:text-second hover:scale-125 hover:cursor-pointer font-avenirHeavy tracking-wider '>BLOG</a>
        </li>
      </ul>
      <a href="" className="text-white text-lg rounded-3xl bg-[#45bf41] py-3 px-7 mr-[10%] hidden ml-auto lg:block hover:cursor-pointer hover:bg-[#4b8c48]">Spenden</a>
    </nav>
  )
}

export default Navbar
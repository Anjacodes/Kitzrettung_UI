import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MobileMenu from './MobileMenu';
import logo from '../../assets/Rehkitz_negativ.png'

function Navbar({menuVisible, setMenuVisible}) {

  return (
    <nav className="absolute top-0 text-white w-screen mt-10 flex items-center">
      <MobileMenu visible={menuVisible} setMenuVisible={setMenuVisible}/>
      <button className="z-20 pl-[10%]" onClick={() => setMenuVisible(!menuVisible)}>
        { menuVisible ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars lg:hidden" ></i>)
        }
      </button>
      <Link to="/" className="hover:cursor-pointer hidden lg:block hover:scale-125"><img src={logo} className="w-36"/></Link>
      <ul className="hidden lg:flex ml-4 mr-4 text-lg">
        <li className="ml-10 group">
          <h3 className='text-white hover:cursor-pointer font-avenirHeavy tracking-wider '>ÜBER UNS</h3>
          <ul className='absolute pt-2 hidden group-hover:block'>
            <li><NavLink to="/motivation" className='hover:cursor-pointer hover:text-second '>Unsere Motivation</NavLink></li>
            <li><NavLink to="/verein" className='hover:cursor-pointer hover:text-second'>Unser Verein</NavLink></li>
            <li><NavLink to="/arbeit" className='hover:cursor-pointer hover:text-second'>Unsere Arbeit</NavLink></li>
          </ul>
        </li>
        <li className="ml-10 group">
          <h3 className='text-white hover:cursor-pointer font-avenirHeavy tracking-wider '>LEISTUNGEN</h3>
          <ul className='absolute pt-2 hidden group-hover:block'>
            <li><NavLink to="/verfahren" className='hover:cursor-pointer hover:text-second'>Verfahren</NavLink></li>
            <li><NavLink to="/rechtliches" className='hover:cursor-pointer hover:text-second'>Rechtliches</NavLink></li>
            <li><NavLink to="/kosten" className='hover:cursor-pointer hover:text-second'>Kosten</NavLink></li>
          </ul>
        </li>
        <li className="ml-10 group">
          <a className='text-white hover:cursor-pointer font-avenirHeavy tracking-wider '>WISSENSWERTES</a>
          <ul className='absolute pt-2 hidden group-hover:block'>
            <li><NavLink to="/biologie" className='hover:cursor-pointer hover:text-second'>Biologie</NavLink></li>
            <li><NavLink to="/technik" className='hover:cursor-pointer hover:text-second'>Technik</NavLink></li>
            <li><NavLink to="/galerie" className='hover:cursor-pointer hover:text-second'>Galerie</NavLink></li>
          </ul>
        </li>
        <li className="ml-10 group">
          <a className='text-white hover:cursor-pointer font-avenirHeavy tracking-wider '>KONTAKT</a>
          <ul className='absolute pt-2 hidden group-hover:block'>
            <li><NavLink to="/kontakt" className='hover:cursor-pointer hover:text-second'>Schreib uns</NavLink></li>
            <li><a href="https://order.webaro.cloud/?portal=rehkitzrettung-euskirchen.webaro.cloud" className='hover:cursor-pointer hover:text-second' rel="noopener noreferrer" target="_blank">Buch uns</a></li>
          </ul>
        </li>
        <li className="ml-10 group">
          <NavLink to="/blog" className='hover:text-second hover:scale-125 hover:cursor-pointer font-avenirHeavy tracking-wider'>BLOG</NavLink>
        </li>
      </ul>
      <NavLink to="/spenden" className="text-white text-lg text-center rounded-3xl bg-second py-3 w-28 hidden ml-auto lg:block hover:cursor-pointer hover:bg-white hover:text-second">Spenden</NavLink>
      <a href="https://order.webaro.cloud/?portal=rehkitzrettung-euskirchen.webaro.cloud" target="_blank" className="text-second text-lg text-center rounded-3xl bg-white py-3 w-28 mr-[10%] hidden ml-auto lg:block hover:cursor-pointer hover:bg-second hover:text-white">Buchen</a>
    </nav>
  )
}

export default Navbar
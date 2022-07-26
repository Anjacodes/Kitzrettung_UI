import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Rehkitz_negativ.png'

function Footer() {
  return (
    <footer className="h-[50vh] bg-[#4b8c48] text-white">
      <div className="mx-[5vw] pt-6 flex flex-col h-full justify-between lg:grid lg:grid-cols-2 lg:gap-20">
        <div className="flex">
          <div className="text-sm mr-6 lg:mr-12 flex flex-col group">
            <Link to="/about" className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">ÜBER UNS</Link>
            <ul className='hidden group-hover:block lg:block'>
              <li><a className="hover:text-first hover:cursor-pointer">Motivation</a></li>
              <li><a className="hover:text-first hover:cursor-pointer">Verein</a></li>
              <li><a className="hover:text-first hover:cursor-pointer">Arbeit</a></li>
            </ul>
          </div>
          <div className="text-sm mr-6 lg:mr-12 flex flex-col group">
            <a className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">LEISTUNGEN</a>
            <ul className='hidden group-hover:block lg:block'>
              <li><a className="hover:text-first hover:cursor-pointer">Verfahren</a></li>
              <li><a className="hover:text-first hover:cursor-pointer">Rechtliches</a></li>
              <li><a className="hover:text-first hover:cursor-pointer">Kosten</a></li>
            </ul>
          </div>
          <div className="text-sm mr-6 lg:mr-12 flex flex-col group">
            <a className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">WISSENSWERTES</a>
           <ul className='hidden group-hover:block lg:block'>
              <li><a className="hover:text-first hover:cursor-pointer">Biologie</a></li>
              <li><a className="hover:text-first hover:cursor-pointer">Technik</a></li>
              <li><a className="hover:text-first hover:cursor-pointer">Galerie</a></li>
           </ul>
          </div>
          <div className="text-sm mr-12">
            <a className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">SPENDEN</a>
          </div>
        </div>
        <div className='flex justify-between mt-auto lg:mt-0'>
          <div>
            <h3 className='text-white'>FOLLOW US</h3>
            <div>
              <i className="fa-brands fa-facebook mr-3"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className='w-1/2'>
            <h3 className='mb-1 text-white'>WERDE MITGLIED</h3>
            <p className='text-sm mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center">
            <input type="email" placeholder="Email" className="text-base py-2 px-2 rounded-l-lg"></input>
            <button className="rounded-r-lg bg-second py-2 px-4 text-white text-base hover:bg-third"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          </div>
        </div>
        <div className="flex items-center">
          <Link to="/" className="hover:cursor-pointer mr-4"><img src={logo} className="w-20 lg:w-40"/></Link>
          <div>
            <p className="text-sm hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="mt-4 text-sm">2022 Kreis Euskirchen Rehkitzrettung eV</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
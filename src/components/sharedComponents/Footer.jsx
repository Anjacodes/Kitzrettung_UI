import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Rehkitz_negativ.png'
import Form from './Form';

function Footer() {
  self.displayName = "Footer";

  return (
    <footer className="h-[50vh] bg-[#4b8c48] text-white">
      <div className="mx-[5vw] pt-6 flex flex-col h-full justify-between lg:grid lg:grid-cols-2 lg:gap-20 relative">
        <div className="flex">
          <div className="text-sm mr-6 lg:mr-12 flex flex-col group">
            <a className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">ÜBER UNS</a>
            <ul className='hidden group-hover:block lg:block'>
              <li><NavLink to="/motivation" className="hover:text-first hover:cursor-pointer">Motivation</NavLink></li>
              <li><NavLink to="/verein" className="hover:text-first hover:cursor-pointer">Verein</NavLink></li>
              <li><NavLink to="/arbeit" className="hover:text-first hover:cursor-pointer">Arbeit</NavLink></li>
            </ul>
          </div>
          <div className="text-sm mr-6 lg:mr-12 flex flex-col group">
            <a className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">LEISTUNGEN</a>
            <ul className='hidden group-hover:block lg:block'>
              <li><NavLink to="/verfahren" className="hover:text-first hover:cursor-pointer">Verfahren</NavLink></li>
              <li><NavLink to="/rechtliches" className="hover:text-first hover:cursor-pointer">Rechtliches</NavLink></li>
              <li><NavLink to="/kosten" className="hover:text-first hover:cursor-pointer">Kosten</NavLink></li>
            </ul>
          </div>
          <div className="text-sm mr-6 lg:mr-12 flex flex-col group">
            <a className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">WISSENSWERTES</a>
           <ul className='hidden group-hover:block lg:block'>
              <li><NavLink to="/biologie" className="hover:text-first hover:cursor-pointer">Biologie</NavLink></li>
              <li><NavLink to="/technik" className="hover:text-first hover:cursor-pointer">Technik</NavLink></li>
              <li><NavLink to="/galerie" className="hover:text-first hover:cursor-pointer">Galerie</NavLink></li>
              <li><NavLink to="/" className=" hover:text-first hover:cursor-pointer">Spenden</NavLink></li>
           </ul>
          </div>
        </div>
        <div className='flex justify-between mt-0 lg:mt-0'>
          <div>
            <h3 className='text-white'>FOLLOW US</h3>
            <div>
              <i className="fa-brands fa-facebook mr-3"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className='w-1/2'>
            <h3 className='mb-1 text-white'>WERDE MITGLIED</h3>
            <p className='text-sm mb-1'>Fordere Informationen zur Mitgliedschaft und deinen Antrag per Email an.</p>
            <Form displayName={displayName}/>
           
          </div>
        </div>
        <div className="flex items-center absolute top-80 lg:top-48">
          <Link to="/" className="hover:cursor-pointer mr-4"><img src={logo} className="w-20 lg:w-36"/></Link>
          <div>
            <p className="text-sm hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="hidden lg:block mt-4 lg:mt-0 text-sm">2022 Kreis Euskirchen Rehkitzrettung eV</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
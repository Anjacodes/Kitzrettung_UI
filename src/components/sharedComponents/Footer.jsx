import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Rehkitz_negativ.png'
import Form from './Form';

function Footer() {

  return (
    <footer className="h-[50vh] bg-[#4b8c48] text-white relative">
        <a href="https://wa.me/4915174254953"
        className="whatsapp_float absolute right-[15%] lg:right-[7%] -top-14 lg:-top-20"
        target="_blank"
        rel="noopener noreferrer"
      ><i className="text-second hover:text-third scale-[4.0] lg:scale-[6.0] fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <div className="mx-[5vw] pt-6 pb-4 flex flex-col h-full justify-between lg:grid lg:grid-cols-2 lg:gap-20 relative">
        <div className="flex justify-between">
          <div className="text-sm mr-4 lg:mr-12 flex flex-col group">
            <a className="mb-2 lg:mb-4 text-sm lg:text-base font-avenirHeavy hover:cursor-pointer">ÜBER UNS</a>
            <ul className='hidden group-hover:block lg:block'>
              <li><NavLink to="/motivation" className="hover:text-first hover:cursor-pointer">Motivation</NavLink></li>
              <li><NavLink to="/verein" className="hover:text-first hover:cursor-pointer">Verein</NavLink></li>
              <li><NavLink to="/arbeit" className="hover:text-first hover:cursor-pointer">Arbeit</NavLink></li>
              <li><NavLink to="/impressum" className="hover:text-first hover:cursor-pointer">Impressum</NavLink></li>
            </ul>
          </div>
          <div className="text-sm mr-4 lg:mr-12 flex flex-col group">
            <a className="mb-2 lg:mb-4 text-sm lg:text-base font-avenirHeavy hover:cursor-pointer">LEISTUNGEN</a>
            <ul className='hidden group-hover:block lg:block'>
              <li><NavLink to="/verfahren" className="hover:text-first hover:cursor-pointer">Verfahren</NavLink></li>
              <li><NavLink to="/rechtliches" className="hover:text-first hover:cursor-pointer">Rechtliches</NavLink></li>
              <li><NavLink to="/kosten" className="hover:text-first hover:cursor-pointer">Kosten</NavLink></li>
              <li><a href="https://order.webaro.cloud/?portal=rehkitzrettung-euskirchen.webaro.cloud" rel="noopener noreferrer" target="_blank"className="hover:text-first hover:cursor-pointer">Buch uns</a></li>
            </ul>
          </div>
          <div className="text-sm lg:mr-12 flex flex-col group">
            <a className="mb-2 lg:mb-4 text-sm lg:text-base font-avenirHeavy hover:cursor-pointer">WISSENSWERTES</a>
           <ul className='hidden group-hover:block lg:block'>
              <li><NavLink to="/biologie" className="hover:text-first hover:cursor-pointer">Biologie</NavLink></li>
              <li><NavLink to="/technik" className="hover:text-first hover:cursor-pointer">Technik</NavLink></li>
              <li><NavLink to="/galerie" className="hover:text-first hover:cursor-pointer">Galerie</NavLink></li>
              <li><NavLink to="/spenden" className="hover:text-first hover:cursor-pointer">Spenden</NavLink></li>
              <li><NavLink to="/datenschutz" className="hover:text-first hover:cursor-pointer">Datenschutz</NavLink></li>
           </ul>
          </div>
        </div>
        <div className='flex justify-between mt-0 lg:mt-0'>
          <div>
            <h3 className='text-white'>FOLLOW US</h3>
            <div className='mb-6'>
              <i className="fa-brands fa-facebook mr-3"></i>
              <a href="https://instagram.com/rehkitzrettung_euskirchen?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener" className='hover:cursor-pointer'><i className="fa-brands fa-instagram"></i></a>
            </div>
            <NavLink to="/" className=' text-white text-sm lg:hidden hover:cursor-pointer hover:text-first'>Rehkitzrettung Kreis Euskirchen e.V.</NavLink>
          </div>
          <div className='w-1/2 mb-6'>
            <h3 className='mb-1 text-white'>WERDE MITGLIED</h3>
            <p className='hidden lg:block text-sm mb-1'>Fordere Informationen zur Mitgliedschaft und deinen Antrag per Email an.</p>
            <Form />
          </div>
        </div>
        <div className="hidden lg:flex items-center absolute top-[15rem] lg:top-48">
          <Link to="/" className="hover:cursor-pointer mr-4"><img src={logo} className="w-20 lg:w-36"/></Link>
          <div>
            <p className="text-sm hidden lg:block">Zur Rettung von Wildtieren vor Verletzungen oder Tötung durch Landmaschinen.</p>
            <p className="hidden lg:block mt-4 lg:mt-0 text-sm">2022 Rehkitzrettung Kreis Euskirchen e.V.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Rehkitz_negativ.png'

function Footer() {
  return (
    <footer className="h-[50vh] bg-[#4b8c48] text-white">
      <div className="mx-[5vw] pt-12 grid grid-cols-2 gap-20">
        <div className="flex">
          <div className="text-sm mr-12 flex flex-col">
            <a className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">ÜBER UNS</a>
            <a className="hover:text-first hover:cursor-pointer">Unsere Arbeit</a>
            <a className="hover:text-first hover:cursor-pointer">Unsere Erfolge</a>
            <a className="hover:text-first hover:cursor-pointer">Wirkungsgebiete</a>
            <a className="hover:text-first hover:cursor-pointer">Unsere Experten</a>
          </div>
          <div className="text-sm mr-12 flex flex-col">
            <a className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">ARBEIT</a>
            <a className="hover:text-first hover:cursor-pointer">Aktuelle Projekte</a>
            <a className="hover:text-first hover:cursor-pointer">Mitmachen</a>
          </div>
          <div className="text-sm mr-12">
            <a className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">NEUIGKEITEN</a>
          </div>
          <div className="text-sm mr-12">
            <a className="mb-4 text-base font-avenirHeavy hover:text-first hover:cursor-pointer">SPENDEN</a>
          </div>
        </div>
        <div>Hello</div>
        <div className="flex items-center">
          <Link to="/" className="hover:cursor-pointer mr-6"><img src={logo} className="w-40"/></Link>
          <div>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="mt-4 text-sm">2022 Kreis Euskirchen Rehkitzrettung eV</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
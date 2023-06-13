import React from 'react'
import { NavLink } from 'react-router-dom';
import Credo from '../../assets/BeiSonnenaufgang.jpg';
import Drohnenflug from '/assets/images/Drohne_Flug.jpg';
import Satzung from '../../assets/Vereinssatzung-Rehkitz.pdf'

function Work() {
  return (
    <section className="mt-48">
      <h2 className="mb-6 text-2xl tracking-wide">UNSERE ARBEIT</h2>
      <div className="flex items-center mt-32 w-full justify-between relative">
        <div className="lg:w-[50%] lg:mr-28 z-1">
            <h3>CREDO</h3>
            <p className="text-base lg:text-justify text-slate-600 my-4">Unser eingetragener Verein hat es sich gemäß seiner Satzung zur Aufgabe gemacht das Tierleid, das durch den Einsatz landwirtschaftlicher Maschinen entsteht, möglichst zu verhindern (siehe <a href={Satzung} target="_blank" rel="noreferrer" className='text-second hover:underline'>Satzung</a>). Wir setzen dabei auf den Einsatz von Drohnen mit hochauflösender Wärmebildtechnik (siehe <NavLink to="/technik" className='text-second hover:underline'>Technik</NavLink>)</p>
            <NavLink to="/arbeit" className="bg-first py-2 px-6 rounded-xl text-base text-white hover:bg-third">Mehr erfahren</NavLink>
        </div>
        <img src={Credo} className="hidden lg:block lg:w-[50%]"/>
      </div>

      <div className="flex items-center mt-32 w-full justify-between relative">
        <img src={Drohnenflug} className="hidden lg:block lg:w-[50%]"/>
        <div className="lg:w-[50%] lg:ml-28 z-10">
            <h3>TECHNIK</h3>
            <p className="text-base lg:text-justify text-slate-600 my-4">Unser Verein nutzt Drohnen der Firmen DJI und Yuneec. Diese Drohnen verfügen über eine Echtbildkamera mit großem Zoom in Verbindung mit einer Wärmebildkamera. Die Wärmebildkameras besitzen Auflösungen von 320x160 Pixeln oder 640x320 Pixeln. </p>
            <NavLink to="/technik" className="bg-first py-2 px-6 rounded-xl text-base text-white hover:bg-third">Mehr erfahren</NavLink>
        </div>
      </div>

      <NavLink to="/arbeit"><p className="text-center mt-20 lg:mt-24 text-sm text-[#45BF41] hover:cursor-pointer hover:text-third">SIEH DIR MEHR ÜBER UNSERE ARBEIT AN  <i className="fa-solid fa-arrow-right-long"></i></p></NavLink>
    </section>
  )
}

export default Work;

import React from 'react'
import { NavLink } from 'react-router-dom';
import workExamples from './workExamples';
import Credo from '../../assets/BeiSonnenaufgang.jpg';
import Drohne from '../../assets/Drohnenflug.jpg';

function Work() {
  return (
    <section className="mt-48">
      <h2 className="mb-6 text-2xl tracking-wide">UNSERE ARBEIT</h2>
      <div className="flex items-center mt-32 w-full justify-between relative">
        <div className="lg:w-[90%] lg:mr-28 z-10">
            <h3>CREDO</h3>
            <p className="text-base text-justify text-slate-600 my-4">Unser eingetragener Verein hat es sich gemäß seiner Satzung zur Aufgabe gemacht das Tierleid, das durch den Einsatz landwirtschaftlicher Maschinen entsteht, möglichst zu verhindern (siehe Satzung). Wir setzen dabei auf den Einsatz von Drohnen mit hochauflösender Wärmebildtechnik (siehe <a href="/technik" className='text-blue-600 hover:underline'>Technik</a>)</p>
            <NavLink to="/arbeit" className="bg-first py-2 px-6 rounded-xl text-base text-white hover:bg-third">Learn More</NavLink>
        </div>
        <div className="bg-first opacity-25 absolute w-[25%] h-[100%] left-80 hidden lg:block"></div>
        <img src={Credo} className="hidden lg:block lg:w-[50%]"/>
      </div>

      <div className="flex items-center mt-32 w-full justify-between relative">
        <img src={Drohne} className="hidden lg:block lg:w-[50%]"/>
        <div className="lg:w-[90%] lg:ml-28 z-10">
            <h3>TECHNIK</h3>
            <p className="text-base text-justify text-slate-600 my-4">{workExamples[0].text}</p>
            <NavLink to="/technik" className="bg-first py-2 px-6 rounded-xl text-base text-white hover:bg-third">Learn More</NavLink>
        </div>
        <div className="bg-first opacity-25 absolute hidden h-[100%] right-80 w-[25%] lg:block"></div>
      </div>

      <NavLink to="/arbeit"><p className="text-center mt-20 lg:mt-24 text-sm text-[#45BF41] hover:cursor-pointer hover:text-third">SIEH DIR MEHR ÜBER UNSERE ARBEIT AN  <i className="fa-solid fa-arrow-right-long"></i></p></NavLink>
    </section>
  )
}

export default Work;

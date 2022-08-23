import React from 'react'
import { NavLink } from 'react-router-dom'
import wirken from '../../assets/Rehkitz-Schaubild.png'

function Mission() {
  return (
    <section id="mission" className="flex w-full">
      <div className="lg:mr-28 lg:w-[70%]">
        <h2 className="mb-6 text-2xl text-slate-700 tracking-wide">UNSER VEREIN</h2>
        <p className="text-base text-justify text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <NavLink to="/verein"><p className="text-right mt-20 lg:mt-48 text-sm text-[#45BF41] hover:cursor-pointer hover:text-third">SIEH DIR UNSEREN VEREIN AN  <i className="fa-solid fa-arrow-right-long"></i></p></NavLink>
      </div>
      <img src={wirken} className="hidden lg:block lg:object-cover lg:w-[30%]"/>
    </section>
  )
}

export default Mission
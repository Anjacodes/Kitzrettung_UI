import React from 'react'
import { NavLink } from 'react-router-dom'
import wirken from '../../assets/Rehkitz-Schaubild.png'

function Mission() {
  return (
    <section id="mission" className="flex w-full">
      <div className="lg:mr-28 lg:w-[70%]">
        <h2 className="mb-6 text-2xl text-slate-700 tracking-wide">UNSER VEREIN</h2>
        <p className="text-base text-justify text-slate-600">Seit 2020 wurde die Rehkitzrettung durch privates Engagement verschiedener Mitglieder des jetzigen Vereins im Raum Bad Münstereifel und Euskirchen durchgeführt. Dabei wurden für die Beschaffung und den Betrieb einer Wärmebilddrohne nur private finanzielle Mittel genutzt und in 15 Missionen über 25 Rehkitze gerettet. 2022 wurde der Verein beim Amtsgericht Bonn im Vereinsregister eingetragen und durch das Finanzamt Euskirchen als gemeinnützig anerkannt. Für Spenden stellen wir daher auf Wunsch auch entsprechende Quittungen aus.</p>
        <NavLink to="/verein"><p className="text-right mt-20 lg:mt-48 text-sm text-[#45BF41] hover:cursor-pointer hover:text-third">SIEH DIR UNSEREN VEREIN AN  <i className="fa-solid fa-arrow-right-long"></i></p></NavLink>
      </div>
      <img src={wirken} className="hidden lg:block lg:object-cover lg:w-[30%]"/>
    </section>
  )
}

export default Mission
import React from 'react'
import CountUp from 'react-countup';

function Stats({menuVisible}) {
  if (!menuVisible) {
    return (
      <div className="absolute bottom-0 mb-6 text-white w-[85vw] flex justify-center z-0">
          <div className="flex flex-col justify-between items-center mr-auto">
            <i className="fa-brands fa-instagram text-white hover:cursor-pointer"></i>
            <i className="fa-brands fa-facebook text-white hover:cursor-pointer"></i>
          </div>
          <ul className="justify-between w-[60%] hidden lg:flex">
            <li><h3 className="text-4xl text-white"><CountUp end={15} /></h3><p className="text-lg lg:text-2xl">Missionen geflogen</p></li>
            <li><h3 className="text-4xl text-white"><CountUp end={25} /></h3><p className="text-lg lg:text-2xl">Rehkitze gerettet</p></li>
            <li><h3 className="text-4xl text-white"><CountUp end={20} /></h3><p className="text-lg lg:text-2xl">Flächen gesichert</p></li>
          </ul>
          <p className="rotate-90 text-lg mb-6 ml-auto">Mehr erfahren     <i className="fa-solid fa-arrow-down -rotate-90"></i></p>
      </div>
  )}
}

export default Stats
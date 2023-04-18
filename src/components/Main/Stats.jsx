import React from 'react'
import CountUp from 'react-countup';
import zahlen from '../sharedComponents/zahlen';

function Stats({menuVisible }) {

  const scrollOnClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  if (!menuVisible) {
    return (
      <div className="absolute bottom-0 mb-6 text-white w-[85vw] flex justify-center z-0">
          <div className="flex flex-col justify-between items-center mr-auto">
            <a href='https://instagram.com/rehkitzrettung_euskirchen?igshid=ZDdkNTZiNTM=' target="_blank" rel="noopener"><i className="fa-brands fa-instagram text-white hover:cursor-pointer mb-2"></i></a>
            <i className="fa-brands fa-facebook text-white hover:cursor-pointer"></i>
          </div>
          <ul className="justify-between w-[60%] hidden lg:flex">
            <li><h3 className="text-4xl text-white"><CountUp end={zahlen.missionen} /></h3><p className="text-lg lg:text-2xl">Missionen geflogen</p></li>
            <li><h3 className="text-4xl text-white"><CountUp end={zahlen.gerettet} /></h3><p className="text-lg lg:text-2xl">Rehkitze gerettet</p></li>
            <li><h3 className="text-4xl text-white"><CountUp end={zahlen.flächen} /></h3><p className="text-lg lg:text-2xl">Flächen gesichert</p></li>
          </ul>
          <p className="rotate-90 text-lg mb-6 ml-auto hover:cursor-pointer" onClick={scrollOnClick}>Mehr erfahren     <i className="fa-solid fa-arrow-down -rotate-90"></i></p>
      </div>
  )}
}

export default Stats
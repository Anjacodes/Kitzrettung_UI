import React from 'react';
import Schaubild from '../../assets/Rehkitz-Schaubild.png';


function Motivation() {
  return (
    <section className='mt-32 flex flex-col items-center'>
    <h3 className='mb-12 text-2xl'>UNSERE MOTIVATION</h3>
    <p className='text-base mb-12 text-center'>Pro Jahr sterben rund 1500 Rehkitze durch Vermähung. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className='lg:flex lg:w-full lg:justify-between'>
      <img className="mb-6 lg:mb-0 lg:w-1/4" src={Schaubild}/>
      <img className="hidden mb-6 lg:block lg:mb-0 lg:w-1/4" src={Schaubild}/>
      <img className="hidden lg:block lg:w-1/4" src={Schaubild}/>
    </div>
    <p className="text-center mt-20 lg:mt-24 text-sm text-[#45BF41] hover:cursor-pointer hover:text-third">ERFAHRE MEHR ÜBER UNSERE MOTIVATION  <i className="fa-solid fa-arrow-right-long"></i></p>
  </section>
  )
}

export default Motivation
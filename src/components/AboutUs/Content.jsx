import React from 'react';
import Schaubild from '../../assets/Rehkitz-Schaubild.png'

function Content() {
  return (
    <section className="mx-20 my-48 lg:mx-52 flex flex-col items-center">
      <div className='bg-white text-justify lg:absolute lg:top-[35%] lg:px-24 lg:py-12 lg:w-[65%]'>
        <h2 className='text-2xl mb-12'>Unser eingetragener Verein hat es sich gemäß seiner Satzung zur Aufgabe gemacht das Tierleid, das durch den Einsatz landwirtschaftlicher Maschinen entsteht möglichst zu verhindern.</h2>
        <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <section className='mt-80 flex flex-col items-center'>
        <h3 className='mb-12 text-2xl'>UNSERE MOTIVATION</h3>
        <p className='text-base mb-12'>Pro Jahr sterben rund 1500 Rehkitze durch Vermähung. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='lg:flex lg:w-full lg:justify-evenly'>
          <img className="mb-6 lg:mb-0 lg:w-1/4" src={Schaubild}/>
          <img className="mb-6 lg:mb-0 lg:w-1/4" src={Schaubild}/>
          <img className="lg:w-1/4" src={Schaubild}/>
        </div>
        <button className="bg-first py-2 px-6 rounded-xl text-base text-white mt-20 hover:bg-third">Erfahre Mehr</button>
      </section>
    </section>
  )
}

export default Content
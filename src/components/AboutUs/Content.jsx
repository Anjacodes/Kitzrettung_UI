import React from 'react';
import Motivation from './Motivation';
import Work from './Work';

function Content() {
  return (
    <section className="mx-20 lg:mx-52 flex flex-col items-center">
      <div className='bg-white text-justify py-20 px-28'>
        <h2 className='text-2xl mb-12'>Unser eingetragener Verein hat es sich gemäß seiner Satzung zur Aufgabe gemacht das Tierleid, das durch den Einsatz landwirtschaftlicher Maschinen entsteht möglichst zu verhindern.</h2>
        <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <Motivation />
      <Work />
    </section>
  )
}

export default Content
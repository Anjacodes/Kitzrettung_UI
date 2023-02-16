import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GeneralCover from '../../sharedComponents/GeneralCover'


function GalerieMain() {

  const scrollOnClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <GeneralCover />
        <div className='mx-[10vw] my-[20vh] flex flex-col items-center'>
          <h2 className='mb-16'>GALERIE</h2>
          <p className='text-base text-justify mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <i className="fa-solid fa-arrow-down hover:cursor-pointer" onClick={scrollOnClick}></i>
          <Carousel infiniteLoop autoPlay className='mt-12 lg:w-[60vw]'>
            <div className=''>
              <img src="../../../../src/assets/BeiSonnenaufgang.jpg" alt="Vorbereitung zum Flug"/>
            </div>
            <div className=''>
              <img src="../../../../src/assets/Drohne_Flug.jpg" alt="Drohne hebt ab"/>
            </div>
          </Carousel>
        </div>
    </>
  )
}

export default GalerieMain
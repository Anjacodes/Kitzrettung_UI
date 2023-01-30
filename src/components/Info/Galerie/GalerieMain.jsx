import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GeneralCover from '../../sharedComponents/GeneralCover'


function GalerieMain() {
  return (
    <div className='text-center'>
      <GeneralCover />
        <Carousel infiniteLoop autoPlay className='mt-12 w-[55vw]'>
          <div className=''>
            <img src="../../../../src/assets/BeiSonnenaufgang.jpg" alt="Vorbereitung zum Flug"/>
          </div>
          <div className=''>
            <img src="../../../../src/assets/Drohne_Flug.jpg" alt="Vorbereitung zum Flug"/>
          </div>
  
        </Carousel>
    </div>
  )
}

export default GalerieMain
// #build a reactive image Carousel
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Drohne from '/assets/images/Drohne_Flug.jpg';
import Sonnenaufgang from '/assets/images/Sonnenaufgang.png';
import Drohne_fliegt from '/assets/images/Drohne_fliegt.jpg';
import Rehkitz_aufheben from '/assets/images/Rehkitz_aufheben.png';
import Rehkitz_tragen from '/assets/images/Rehkitz_tragen.jpg';
import RehkitzII from '/assets/images/Rehkitz_II.jpg';

export default function GalerieContent() {
  return (
    <div className='my-16 flex flex-col items-center -z-50'>
      <div className='lg:w-[70%] w-[90%]'>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={true}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          interval={4000}
        >
          <div>
            <img src={Drohne} alt='Drohne bei Sonnenaufgang' />
          </div>
          <div>
            <img src={Sonnenaufgang} alt='Sonneaufgang über einem Feld' />
          </div>
          <div>
            <img src={Drohne_fliegt} alt='Drohne im Flug' />
          </div>
          <div>
            <img src={Rehkitz_aufheben} alt='Rehkitz aufheben' />
          </div>
          <div>
            <img src={Rehkitz_tragen} alt='Rehkitz tragen' />
          </div>
          <div>
            <img src={RehkitzII} alt='Gerettetes Rehkitz' />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

// #build a reactive image Carousel
import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Drohne from '/src/assets/Drohne_Flug.jpg';
// import Sonnenaufgang from "/src/assets/Sonnenaufgang.jpg";
import Drohne_fliegt from '/src/assets/Drohne_fliegt.jpg';
import Rehkitz_aufheben from '/src/assets/Rehkitz_aufheben.jpg';
import Rehkitz_tragen from '/src/assets/Rehkitz_tragen.jpg';
import RehkitzII from '/src/assets/Rehkitz_II.jpg';


const GalerieContent = () => {
    return (
        <div className='my-16 flex flex-col items-center'>
          <div className='lg:w-[70%]'>
            <Carousel
                autoPlay 
                infiniteLoop 
                showThumbs={true} 
                showArrows={true} 
                showStatus={false} 
                showIndicators={false} 
                interval={4000}>
                <div>
                    <img src={Drohne} alt="galerie" />
                </div>
                {/* <div>
                    <img src={Sonnenaufgang} alt="galerie" />
                </div> */}
                <div>
                    <img src={Drohne_fliegt} alt="galerie" />
                </div>
                <div>
                    <img src={Rehkitz_aufheben} alt="galerie" />
                </div>
                <div>
                    <img src={Rehkitz_tragen} alt="galerie" />
                </div>
                <div>
                    <img src={RehkitzII} alt="galerie" />
                </div>
            </Carousel>
          </div>
        </div>
    )
}

export default GalerieContent;
    

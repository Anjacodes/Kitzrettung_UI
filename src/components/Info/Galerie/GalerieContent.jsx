// #build a reactive image Carousel
import React from 'react';
import { Carousel, CarouselWrapper } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
                    <img src="/src/assets/Drohne_Flug.jpg" alt="galerie" />
                </div>
                <div>
                    <img src="/src/assets/BeiSonnenaufgang.jpg" alt="galerie" />
                </div>
                <div>
                    <img src="/src/assets/Drohne_fliegt.JPG" alt="galerie" />
                </div>
                <div>
                    <img src="/src/assets/Rehkitz_aufheben.jpg" alt="galerie" />
                </div>
                <div>
                    <img src="/src/assets/Rehkitz_tragen.jpg" alt="galerie" />
                </div>
                <div>
                    <img src="/src/assets/Sonnenaufgang.JPG" alt="galerie" />
                </div>
                <div>
                    <img src="/src/assets/Rehkitz_II.JPG" alt="galerie" />
                </div>
            </Carousel>
          </div>
        </div>
    )
}

export default GalerieContent;
    

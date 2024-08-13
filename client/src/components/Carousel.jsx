import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../assets/banner.png';  
import banner3 from '../assets/scrollimage3.jpg';  
import banner2 from '../assets/scrollimage2.jpg';    

const ImageCarousel = () => (
    <div className="carousel-container">
        <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            interval={3000}
            transitionTime={600}
            emulateTouch
            showArrows={false}
        >
            <div className="carousel-card">
                <img src={banner1} alt="Banner 1" className="carousel-image" />
            </div>
            <div className="carousel-card">
                <img src={banner2} alt="Banner 2" className="carousel-image" />
            </div>
            <div className="carousel-card">
                <img src={banner3} alt="Banner 3" className="carousel-image" />
            </div>
        </Carousel>
    </div>
);

export default ImageCarousel;

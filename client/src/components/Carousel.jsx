import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../assets/imgs/banner_med.webp';  
import banner3 from '../assets/imgs/pharm.webp';  
import banner2 from '../assets/imgs/STEPS.webp';    

const ImageCarousel = () => (
    <div
        className="carousel-container"
        style={{ height: '500px' }} // Set height directly
    >
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
                <img
                    src={banner1}
                    alt="Banner 1"
                    className="carousel-image"
                    style={{ height: '500px' }} // Set height directly
                />
            </div>
            <div className="carousel-card">
                <img
                    src={banner2}
                    alt="Banner 2"
                    className="carousel-image"
                    style={{ height: '500px' }} // Set height directly
                />
            </div>
            <div className="carousel-card">
                <img
                    src={banner3}
                    alt="Banner 3"
                    className="carousel-image"
                    style={{ height: '500px' }} // Set height directly
                />
            </div>
        </Carousel>
    </div>
);

export default ImageCarousel;
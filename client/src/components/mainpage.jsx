import Pharmacy from "../assets/pharmacy-icon.png";
import notepad from "../assets/notepad.png";
import hospital from "../assets/hospital.png";
import video from "../assets/video.png";
import labtests from "../assets/labtests.png";
import ImageCarousel from './Carousel.jsx';
import vitamin from "../assets/vitaminb12.jpg";
import dolo from "../assets/dolo.png";
import syrup from "../assets/coughsyrup.png";
import thiamin from "../assets/Thiamin.png";
import collagen from "../assets/collagen.png";
import "./MainPage.css"; 

function MainPage() {
    return (
        <div className="mainpage-container">
            <div className="button-container">
                <a href="#" className="button button-1">
                    <img className="pharm" src={Pharmacy} alt="pharmacy"></img>
                    <div>Pharmacy Near Me</div>
                    <div>FIND STORE</div>
                </a>
                <a href="#" className="button button-2">
                    <img className="notepad" src={notepad} alt="notepad"></img>
                    <div>Get 15% off on Medicines</div>
                    <div>UPLOAD NOW</div>
                </a>
                <a href="#" className="button button-3">
                    <img className="hospital" src={hospital} alt="hospital"></img>
                    <div>Hospital Visit</div>
                    <div>PRE-BOOK</div>
                </a>
                <a href="#" className="button button-4">
                    <img className="video" src={video} alt="video"></img>
                    <div>Video Consult</div>
                    <div>IN 15 MIN</div>
                </a>
                <a href="#" className="button button-5">
                    <img className="labtests" src={labtests} alt="labtests"></img>
                    <div>Lab Tests</div>
                    <div>AT HOME</div>
                </a>
            </div>

            {/* Carousel */}
            <ImageCarousel />

            {/* Pharmacy Section Title */}
            <div className="title">
                <h2>PHARMACY</h2>
            </div>

            {/* Product Container */}
            <div className="product-container">
                {/* Product Cards */}
                <div className="product-card">
                    <img src={vitamin} alt="Vitamin b12" />
                    <div className="product-name">Vitamin B12</div>
                    <div className="product-price">Rs. 1000</div>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-card">
                    <img src={dolo} alt="dolo" />
                    <div className="product-name">Dolo-650 - Strip of 15 Tablets</div>
                    <div className="product-price">Rs. 28</div>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-card">
                    <img src={syrup} alt="cough syrup" />
                    <div className="product-name">Charak Pharma Cough Syrup</div>
                    <div className="product-price">Rs. 210</div>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-card">
                    <img src={thiamin} alt="Thiamin" />
                    <div className="product-name">Thiamin</div>
                    <div className="product-price">Rs. 300</div>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-card">
                    <img src={collagen} alt="Collagen" />
                    <div className="product-name">Super Collagen</div>
                    <div className="product-price">Rs. 1950</div>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-card">
                    <img src={syrup} alt="Cough Syrup" />
                    <div className="product-name">Cough Syrup</div>
                    <div className="product-price">Rs. 210</div>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;

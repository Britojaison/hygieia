import { Link } from "react-router-dom";
import Pharmacy from "../assets/pharmacy-icon.png";
import notepad from "../assets/notepad.png";
import hospital from "../assets/hospital.png";
import video from "../assets/video.png";
import labtests from "../assets/labtests.png";
import vitamin from "../assets/vitaminb12.jpg";
import dolo from "../assets/dolo.png";
import syrup from "../assets/coughsyrup.png";
import thiamin from "../assets/Thiamin.png";
import collagen from "../assets/collagen.png";
import ImageCarousel from './Carousel.jsx';
import "../assets/styles/MainPage.css";

// Array of buttons with their corresponding data
const buttonsData = [
    {
        id: 1,
        link: "/pharm",
        imgSrc: Pharmacy,
        imgAlt: "pharmacy",
        textTop: "Pharmacy Near Me",
        textBottom: "FIND STORE",
        isLink: true,
    },
    {
        id: 2,
        href: "#",
        imgSrc: notepad,
        imgAlt: "notepad",
        textTop: "Get 15% off on Medicines",
        textBottom: "UPLOAD NOW",
    },
    {
        id: 3,
        href: "#",
        imgSrc: hospital,
        imgAlt: "hospital",
        textTop: "Hospital Visit",
        textBottom: "PRE-BOOK",
    },
    {
        id: 4,
        href: "#",
        imgSrc: video,
        imgAlt: "video",
        textTop: "Video Consult",
        textBottom: "IN 15 MIN",
    },
    {
        id: 5,
        href: "#",
        imgSrc: labtests,
        imgAlt: "labtests",
        textTop: "Lab Tests",
        textBottom: "AT HOME",
    },
];

// Array of products with their corresponding data
const productsData = [
    {
        id: 1,
        imgSrc: vitamin,
        imgAlt: "Vitamin B12",
        name: "Vitamin B12",
        price: "Rs. 1000",
    },
    {
        id: 2,
        imgSrc: dolo,
        imgAlt: "Dolo-650",
        name: "Dolo-650 - Strip of 15 Tablets",
        price: "Rs. 28",
    },
    {
        id: 3,
        imgSrc: syrup,
        imgAlt: "Cough Syrup",
        name: "Charak Pharma Cough Syrup",
        price: "Rs. 210",
    },
    {
        id: 4,
        imgSrc: thiamin,
        imgAlt: "Thiamin",
        name: "Thiamin",
        price: "Rs. 300",
    },
    {
        id: 5,
        imgSrc: collagen,
        imgAlt: "Collagen",
        name: "Super Collagen",
        price: "Rs. 1950",
    },
    {
        id: 6,
        imgSrc: syrup,
        imgAlt: "Cough Syrup",
        name: "Cough Syrup",
        price: "Rs. 210",
    },
];

function MainPage() {
    return (
        <div className="mainpage-container">
            <div className="button-container">
                {buttonsData.map(button => (
                    button.isLink ? (
                        <Link to={button.link} className={`button button-${button.id}`} key={button.id}>
                            <img className={button.imgAlt} src={button.imgSrc} alt={button.imgAlt}></img>
                            <div className={`${button.imgAlt}_text`}>
                                <div>{button.textTop}</div>
                                <div>{button.textBottom}</div>
                            </div>
                        </Link>
                    ) : (
                        <a href={button.href} className={`button button-${button.id}`} key={button.id}>
                            <img className={button.imgAlt} src={button.imgSrc} alt={button.imgAlt}></img>
                            <div>{button.textTop}</div>
                            <div>{button.textBottom}</div>
                        </a>
                    )
                ))}
            </div>

            {/* Carousel */}
            <ImageCarousel />

            {/* Pharmacy Section Title */}
            <div className="title">
                <h2>PHARMACY</h2>
            </div>

            {/* Product Container */}
            <div className="product-container">
                {productsData.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.imgSrc} alt={product.imgAlt} />
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">{product.price}</div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;

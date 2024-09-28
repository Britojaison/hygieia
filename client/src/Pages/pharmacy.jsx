import React from 'react';
import '../assets/styles/Pharmacy.css'; 
import Header from '../components/HEADER';
import Footer from '../components/footer';
import Pills from '../assets/imgs/pills.png';
import Thiamin from "../assets/imgs/Thiamin.png";
import vitamin from "../assets/imgs/vitaminb12.jpg";
import syrup from "../assets/imgs/coughsyrup.png";
import collagen from "../assets/imgs/collagen.png";

function Pharmacy() {
    const productsData = [
        { id: 1, imgSrc: vitamin, imgAlt: "Vitamin B12", name: 'Vitamin B12', price: 1000 },
        { id: 2, imgSrc: Thiamin, imgAlt: "Thiamin", name: 'Thiamin', price: 210 },
        { id: 3, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950 },
        { id: 4, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950 },
        { id: 5, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240 },
        { id: 6, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240 },
        { id: 7, imgSrc: vitamin, imgAlt: "Vitamin B12", name: 'Vitamin B12', price: 1000 },
        { id: 8, imgSrc: Thiamin, imgAlt: "Thiamin", name: 'Thiamin', price: 210 },
        { id: 9, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950 },
        { id: 10, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950 },
        { id: 11, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240 },
        { id: 12, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240 },
        { id: 13, imgSrc: vitamin, imgAlt: "Vitamin B12", name: 'Vitamin B12', price: 1000 },
        { id: 14, imgSrc: Thiamin, imgAlt: "Thiamin", name: 'Thiamin', price: 210 },
        { id: 15, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950 },
        { id: 16, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950 },
        { id: 17, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240 },
        { id: 18, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240 },
        
    ];

    return (
        <div className="pharmacy-container">
            <Header />  

            <section className="pharmacy-banner">
                <h2 className="title_pharm">Pharmacy</h2>
                <img src={Pills} alt="pills" />
            </section>

            <section className="product-list">
                {productsData.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imgSrc} alt={product.imgAlt} />
                        <p>{product.name}</p>
                        <p>Price: {product.price}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </section>

            <Footer /> 
        </div>
    );
}

export default Pharmacy;

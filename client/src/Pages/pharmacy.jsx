import React, { useState } from 'react';
import '../components/Pharmacy.css'; // Make sure this path matches your project structure
import Header from '../components/HEADER';
import Footer from '../components/footer';
import Pills from '../assets/pills.png';
import Thiamin from "../assets/Thiamin.png";
import vitamin from "../assets/vitaminb12.jpg";
import syrup from "../assets/coughsyrup.png";
import collagen from "../assets/collagen.png";

function Pharmacy() {
    // State to manage selected category
    const [selectedCategory, setSelectedCategory] = useState('cardiology');
    

    // Data for the different categories
    const categoryData = {
        cardiology: [
            { id: 1, imgSrc: vitamin, imgAlt: "Vitamin B12", name: 'Vitamin B12', price: 1000 },
            { id: 2, imgSrc: Thiamin, imgAlt: "Thiamin", name: 'Thiamin', price: 210 },
            { id: 1, imgSrc: vitamin, imgAlt: "Vitamin B12", name: 'Vitamin B12', price: 1000 },
            { id: 2, imgSrc: Thiamin, imgAlt: "Thiamin", name: 'Thiamin', price: 210 }

        ],
        dermatology: [
            { id: 1, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950 },
            { id: 1, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950 },
            { id: 1, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950 }
        ],
        neurology: [
            { id: 1, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240 },
            { id: 1, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240 },
            { id: 1, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240 }
        ],
    };

    // Function to handle category change
    const handleCategoryClick = (categoryData) => {
        setSelectedCategory(categoryData);
    };
    
    return (
        <div className="pharmacy-container">
            <Header />  

            <section className="pharmacy-banner">
                <h2 className="title_pharm">Pharmacy</h2>
                <img src={Pills} alt="pills" />
            </section>

            {/* Category buttons */}
            <nav className="categories">
    {Object.keys(categoryData).map((category) => (
        <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'selected' : ''}
        >
            {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
    ))}
</nav>


<section className="product-list">
    {categoryData[selectedCategory] ? categoryData[selectedCategory].map(product => (
        <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.imgAlt} />
            <p>{product.name}</p>
            <button className="add-to-cart">Add to Cart</button>
            <p className="price">Rs. {product.price}</p>
        </div>
    )) : <p>No products available</p>}
</section>

            <Footer /> 
        </div>
    );
}

export default Pharmacy;

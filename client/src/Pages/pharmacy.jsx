// Pharmacy.jsx
import React, { useState, useContext } from 'react';
import '../assets/styles/Pharmacy.css';
import Header from '../components/HEADER';
import Footer from '../components/footer';
import { CartContext } from "./CartContext.jsx";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Pills from '../assets/imgs/pills.png';
import Thiamin from "../assets/imgs/Thiamin.png";
import vitamin from "../assets/imgs/vitaminb12.jpg";
import syrup from "../assets/imgs/coughsyrup.png";
import collagen from "../assets/imgs/collagen.png";

function Pharmacy() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { cartItems, addToCart, increaseQuantity, decreaseQuantity, calculateTotalItems, calculateTotalPrice } = useContext(CartContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const productsData = [
        { id: 1, imgSrc: vitamin, imgAlt: "Vitamin B12", name: 'Vitamin B12', price: 1000, description: "Vitamin B12 helps maintain nerve cells and aids in the production of DNA and red blood cells." },
        { id: 2, imgSrc: Thiamin, imgAlt: "Thiamin", name: 'Thiamin', price: 210, description: "Thiamin, also known as Vitamin B1, plays an important role in converting nutrients into energy." },
        { id: 3, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950, description: "Collagen supports skin elasticity, hydration, and helps reduce joint pain." },
        { id: 4, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240, description: "This cough syrup provides relief from dry cough and soothes the throat." },
        { id: 5, imgSrc: vitamin, imgAlt: "Vitamin B12", name: 'Vitamin B12', price: 1000, description: "Vitamin B12 helps maintain nerve cells and aids in the production of DNA and red blood cells." },
        { id: 6, imgSrc: Thiamin, imgAlt: "Thiamin", name: 'Thiamin', price: 210, description: "Thiamin, also known as Vitamin B1, plays an important role in converting nutrients into energy." },
        { id: 7, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950, description: "Collagen supports skin elasticity, hydration, and helps reduce joint pain." },
        { id: 8, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240, description: "This cough syrup provides relief from dry cough and soothes the throat." },
        { id: 9, imgSrc: vitamin, imgAlt: "Vitamin B12", name: 'Vitamin B12', price: 1000, description: "Vitamin B12 helps maintain nerve cells and aids in the production of DNA and red blood cells." },
        { id: 10, imgSrc: Thiamin, imgAlt: "Thiamin", name: 'Thiamin', price: 210, description: "Thiamin, also known as Vitamin B1, plays an important role in converting nutrients into energy." },
        { id: 12, imgSrc: collagen, imgAlt: "Collagen", name: 'Collagen', price: 1950, description: "Collagen supports skin elasticity, hydration, and helps reduce joint pain." },
        { id: 13, imgSrc: syrup, imgAlt: "Cough Syrup", name: 'Cough Syrup', price: 240, description: "This cough syrup provides relief from dry cough and soothes the throat." }
    ];

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const isProductInCart = (productId) => {
        return cartItems.some(item => item.id === productId);
    };

    const getProductQuantity = (productId) => {
        const product = cartItems.find(item => item.id === productId);
        return product ? product.quantity : 0;
    };

    const handleCheckout = () => {
        navigate('/cart'); // Navigate to the cart page
    };

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
                        <img src={product.imgSrc} alt={product.imgAlt} onClick={() => openModal(product)} />
                        <p>{product.name}</p>
                        <p>Price: ₹{product.price}</p>
                        {isProductInCart(product.id) ? (
                            <div className="quantity-controls">
                                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                <span>{getProductQuantity(product.id)}</span>
                                <button onClick={() => increaseQuantity(product.id)}>+</button>
                            </div>
                        ) : (
                            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                        )}
                    </div>
                ))}
            </section>

            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img src={selectedProduct.imgSrc} alt={selectedProduct.imgAlt} className="modal-image" />
                        <h2>{selectedProduct.name}</h2>
                        <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
                        <p><strong>Description:</strong> {selectedProduct.description}</p>
                        {isProductInCart(selectedProduct.id) ? (
                            <div className="quantity-controls">
                                <button onClick={() => decreaseQuantity(selectedProduct.id)}>-</button>
                                <span>{getProductQuantity(selectedProduct.id)}</span>
                                <button onClick={() => increaseQuantity(selectedProduct.id)}>+</button>
                            </div>
                        ) : (
                            <button className="add-to-cart" onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
                        )}
                    </div>
                </div>
            )}

            {cartItems.length > 0 && (
                <div className="bottom-cart-bar">
                    <div className="cart-summary">
                        <span>Total Items: {calculateTotalItems()}</span>
                        <span>Total Price: ₹{calculateTotalPrice()}</span>
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>Checkout</button> {/* Checkout button navigates to cart */}
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Pharmacy;

// Cart.jsx
import React, { useContext } from 'react';
import '../assets/styles/cart.css';
import { CartContext } from "../Pages/CartContext";
import Header from '../components/HEADER';
import Footer from '../components/footer';

function Cart() {
    const { cartItems, increaseQuantity, decreaseQuantity, calculateTotalPrice } = useContext(CartContext);

    return (
        <div className="cart-container">
            <Header />
            <div className="cart">
                <h2>Shopping Cart</h2>
                {cartItems.length > 0 ? (
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="item-details">
                                    <span>{item.name}</span>
                                    <span>₹{item.price}</span>
                                </div>
                                <div className="item-quantity">
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty</p>
                )}
                <div className="cart-total">
                    <strong>Total:</strong> ₹{calculateTotalPrice()}
                </div>
                {cartItems.length > 0 && (
                    <button className="checkout-btn">Checkout</button>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Cart;

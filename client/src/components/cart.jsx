import React, { useState } from 'react';
import '../assets/styles/cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Apple', price: 1.5, quantity: 1 },
    { id: 2, name: 'Banana', price: 1.0, quantity: 2 },
    { id: 3, name: 'Orange', price: 1.2, quantity: 3 }
  ]);

  const handleIncreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
              <div className="item-quantity">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="remove-item">Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className="cart-total">
        <strong>Total:</strong> ${calculateTotal()}
      </div>
    </div>
  );
}

export default Cart;

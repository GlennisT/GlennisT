import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
    const { cartItems } = useCart();

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.JewelryName} - ${item.Price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;

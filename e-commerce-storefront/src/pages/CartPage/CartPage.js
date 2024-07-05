import './CartPage.css';

import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

    const handleQuantityChange = (id, quantity) => {
        if (quantity >= 1) {
            updateQuantity(id, quantity);
        }
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item._id}>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>${item.price}</p>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                                    min="1"
                                />
                                <button onClick={() => removeFromCart(item._id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;

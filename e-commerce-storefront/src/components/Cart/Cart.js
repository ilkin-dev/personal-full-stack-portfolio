import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item._id}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item._id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
        </div>
    );
};

export default Cart
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/add-product">Add Product</Link>
            </nav>
        </header>
    )
}

export default Header
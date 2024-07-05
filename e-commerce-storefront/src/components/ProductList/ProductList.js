import React from 'react'
import { Link } from 'react-router-dom';

import './ProductList.css';

const products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description of Product 3' },
];

const ProductList = () => {
    return (
        <div className="product-list">
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList
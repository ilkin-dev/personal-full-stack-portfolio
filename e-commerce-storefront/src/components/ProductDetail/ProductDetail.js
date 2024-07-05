import React, { useContext } from 'react'
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description of Product 3' },
];

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const product = products.find((p) => p.id === parseInt(id));

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductDetail
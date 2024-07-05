import React, { useContext } from 'react'
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ProductContext } from '../../context/ProductContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const product = products.find((p) => p._id === id);

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail
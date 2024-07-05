import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

import './ProductList.css';

const ProductList = () => {
    const { products } = useContext(ProductContext);

    return (
        <div className="product-list">
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList
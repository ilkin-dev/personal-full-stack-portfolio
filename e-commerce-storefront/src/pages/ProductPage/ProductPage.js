import React from 'react';
import './ProductPage.css';
import ProductList from '../../components/ProductList/ProductList';

const ProductPage = () => {
    return (
        <div className="product-page">
            <h1>Product Page</h1>
            <ProductList />
        </div>
    );
};

export default ProductPage;
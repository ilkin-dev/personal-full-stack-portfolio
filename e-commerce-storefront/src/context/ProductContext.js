// src/context/ProductContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    const addProduct = (product) => {
        axios.post('http://localhost:5000/products', product)
            .then(response => setProducts([...products, response.data]))
            .catch(error => console.error(error));
    };

    const updateProduct = (id, updatedProduct) => {
        axios.put(`http://localhost:5000/products/${id}`, updatedProduct)
            .then(response => {
                setProducts(products.map(product => (product._id === id ? response.data : product)));
            })
            .catch(error => console.error(error));
    };

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:5000/products/${id}`)
            .then(() => {
                setProducts(products.filter(product => product._id !== id));
            })
            .catch(error => console.error(error));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

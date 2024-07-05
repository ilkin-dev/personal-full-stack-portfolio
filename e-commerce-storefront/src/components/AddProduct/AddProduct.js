import './AddProduct.css';

import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const { addProduct } = useContext(ProductContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { name, description, price: parseFloat(price) };
        addProduct(newProduct);
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <div className="add-product">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
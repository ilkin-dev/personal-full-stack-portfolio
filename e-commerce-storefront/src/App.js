import './App.css';

import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

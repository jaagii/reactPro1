import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InventoryList from './components/InventoryList';
import ProductDetail from './components/ProductDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<InventoryList />} />
          <Route path="/product/:sku" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

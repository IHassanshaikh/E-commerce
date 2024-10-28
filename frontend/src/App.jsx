import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import About from './components/aboutus/aboutus';
import Contact from './components/contactus/contact';
import Singleproduct from './components/allproduct/singleproduct';
import AppContext from './utilities/context';
import ProductCategory from './components/category/productcategory/ProductCategory';
import Cart from './components/cart/cart';

function App() {
  return (
    <AppContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Singleproduct />} />
        <Route path="/category/:id" element={<ProductCategory />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </AppContext>
  );
}

export default App;

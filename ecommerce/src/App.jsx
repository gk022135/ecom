import { useState } from 'react';
import Counter from './components/Counter';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';
import ProductPage from './components/Pages/ProductPage';
import NavBar from './components/NavBar';
import './App.css';
import { ToastContainer } from 'react-toastify';
import HomePage from './components/Home';

function App() {
  return (
    <div className='min-h-screen bg-slate-100'>
      {/* Navbar */}
      <NavBar />

      {/* Routes */}
      <div className="p-6">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

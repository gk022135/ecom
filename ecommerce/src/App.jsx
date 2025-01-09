import { useState } from 'react';
import Counter from './components/Counter';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';
import ProductPage from './components/Pages/ProductPage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className='min-h-screen bg-slate-100'>
      {/* Navbar */}
      <NavBar />
      
      {/* Title */}
      <h1 className='text-2xl font-semibold text-center py-4 bg-slate-500 text-white'>
        Hello
      </h1>
      
      {/* Routes */}
      <div className="p-6">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart/:cart' element={<Cart />} />
          <Route path='/products/:data/:productId' element={<ProductPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

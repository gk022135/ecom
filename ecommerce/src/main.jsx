import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './Redux/Store.jsx';
import {BrowserRouter} from 'react-router-dom'
import './index.css'; // or './tailwind.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>

  </BrowserRouter>

);

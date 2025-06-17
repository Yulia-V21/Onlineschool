// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './App/Routes';
import { BrowserRouter } from 'react-router-dom';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
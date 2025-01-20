import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App'
import './index.css'
import { ProductsPage } from './pages/ProductsPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="products" element={<ProductsPage />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { ProductList } from "./components/index.js";
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="products" element={<ProductList />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
);

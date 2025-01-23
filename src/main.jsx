import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App'
import './index.css'
import { ProductsPage, MenuPage } from './pages';

createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <BrowserRouter>
//           <Routes>
//               <Route path="/" element={<App />} />
//               <Route path="products" element={<ProductsPage />} >
//                     <Route path=":productId" element={<ProductsPage />} />
//               </Route>
//               <Route path="menus" element={<MenuPage />} >
//                     <Route path=":menuId/products" element={<ProductsPage />} />
//               </Route>
//           </Routes>
//       </BrowserRouter>
//   </StrictMode>,

<StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="menus" element={<MenuPage />} />
        <Route path="menus/:menuId/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
</StrictMode>,

);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import { Header, Top } from './components'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="relative h-screen">
          <Top/>
          <div className="absolute top-0 right-0 bg-transparent w-full">
              <Header />
              <Home />
          </div>
      </div>
  </StrictMode>,
);

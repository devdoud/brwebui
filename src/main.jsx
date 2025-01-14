import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Accueil from './Accueil.jsx'
import { Header } from './components/Header.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div className="bg-cover bg-center h-screen">
      <Header />
      <Accueil />
    </div> */}
    <Header />
    <Accueil />
  </StrictMode>,
)

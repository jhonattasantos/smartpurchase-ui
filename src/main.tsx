import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import CompanyRegistration from './pages/Company/Register';
import { makeServer } from './mirage';
import './index.css'

if (import.meta.env.MODE === 'development') {
  makeServer()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/company/register" element={<CompanyRegistration />} />
        {/* Adicione outras rotas aqui conforme necessário */}
        <Route path="/" element={<App />} /> {/* Rota padrão para o componente App, se houver um layout */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import CompanyRegistration from './pages/Company/Register';
import CompanyListPage from './pages/Company/List';
import { makeServer } from './mirage';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

if (import.meta.env.MODE === 'development') {
  makeServer()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/company/register" element={<CompanyRegistration />} />
          <Route path="/companies" element={<CompanyListPage />} />
          {/* Adicione outras rotas aqui conforme necessário */}
          <Route path="/" element={<App />} /> {/* Rota padrão para o componente App, se houver um layout */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)

import { useNavigate } from 'react-router-dom';
import './App.css'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Bem-vindo ao SmartPurchase</h1>
      <Input placeholder="Pesquisar..." />
      <nav>
        <Button onClick={() => navigate("/company/register")}>Cadastrar Empresa</Button>
      </nav>
    </div>
  )
}

export default App

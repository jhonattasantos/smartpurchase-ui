import { Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Bem-vindo ao SmartPurchase</h1>
      <nav>
        <Link to="/company/register">Cadastrar Empresa</Link>
      </nav>
    </div>
  )
}

export default App

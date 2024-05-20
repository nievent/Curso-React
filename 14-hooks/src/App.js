import './App.css';
import { Componente } from './components/Componente';
import { Formulario } from './components/Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Componente/>
        <Formulario/>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {

  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>El estado en React - Hook useState</h1>
        
        <MiPrimerEstado />

        <EjercicioComponent 
          year={year}
        />
        </header>
    </div>
  );
}

export default App;

import './App.css';
import { Tareas } from './components/Tareas';
// import { Gestion } from './components/Gestion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tareas />
        {/* <Gestion /> */}
      </header>
    </div>
  );
}

export default App;

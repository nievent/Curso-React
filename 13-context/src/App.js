import './App.css';
import { AppRouter } from './routes/AppRouter';
import { Prueba } from './context/Prueba';
import { useState, useEffect } from'react';

function App() {

  const [usuario, setUsuario] = useState({})

  useEffect(() => {

    let localUser = JSON.parse(localStorage.getItem("usuario"))
    if (localUser) {
      setUsuario(localUser)
    }
  }, [])
  

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario))
  }, [usuario])
  



  return (
    <div className="App">
      <Prueba.Provider value={{
        usuario: usuario,
        setUsuario: setUsuario,
      }}>
        <AppRouter />
      </Prueba.Provider>
    </div>
  );
}

export default App;

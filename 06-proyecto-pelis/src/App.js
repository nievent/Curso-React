import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

  const [listado, setListado] = useState([])

  return (
    <div className="layout">
    {/* <!-- cabecera --> */}
    <header className="header">
        <div className="logo">
            <div className="play">
            </div>
        </div>
        <h1>FORLOPD</h1>
    </header>
    {/* <!-- barra de navegacion --> */}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Películas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/* <!-- contenido principal --> */}
    <section className="content">
      <Listado 
        listado={listado}
        setListado={setListado}
      />
    </section>

    <aside className="lateral">
       <Buscador 
        listado = {listado}
        setListado = {setListado}
      />

        <Crear 
          setListado={setListado}
        />
    </aside>

    {/* <!-- pie de pagina --> */}
    <footer className="footer">
        &copy; Master en javascript y react 
        <a href="/#"> www.mispelis.es</a>
    </footer>

</div>
  );
}

export default App;

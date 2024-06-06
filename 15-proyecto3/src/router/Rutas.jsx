import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Inicio } from "../components/pages/Inicio";
import { Articulos } from "../components/pages/Articulos";
import { Articulo } from "../components/pages/Articulo";
import { Editar } from "../components/pages/Editar";
import { Crear } from "../components/pages/Crear";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";
import { Busqueda } from "../components/pages/Busqueda";

export const Rutas = () => {
  return (
    <BrowserRouter>
    {/* LAYOUT */}
    <Header />
    <Nav />
    {/* contenido central y rutas */}
        <section id="content" className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/crear-articulo" element={<Crear />} />
            <Route path="/buscar/:busqueda" element={<Busqueda />} />
            <Route path="/buscar/:busqueda" element={<Busqueda />} />
            <Route path="/articulo/:id" element={<Articulo />} />
            <Route path="/editar/:id" element={<Editar />} />
            <Route path="*" element={
              <div>404 not found</div>
            } />
          </Routes>
        </section>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  )
}

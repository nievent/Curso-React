import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Persona } from '../components/Persona'
import { PanelControl } from '../components/PanelControl'
import { InicioPanel } from '../components/panel/Inicio'
import { Crear } from '../components/panel/Crear'
import { Gestion } from '../components/panel/Gestion'
import { Acerca } from '../components/panel/Acerca'

export const RouterMain = () => {
  return (
    <BrowserRouter>
    <h1>Cabecera</h1>
    <hr />
    <nav>
        <ul>
            <li>
                <NavLink 
                    to="/inicio"
                >Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/articulos">Articulos</NavLink>
            </li>
            <li>
                <NavLink to="/contacto">Contacto</NavLink>
            </li>
            <li>
                <NavLink to="/panel">Panel de control</NavLink>
            </li>
        </ul>
    </nav>
    <hr />

    <section className='contenido-principal'>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/persona/:nombre/:apellido" element={<Persona />} />
            <Route path="/persona/:nombre/" element={<Persona />} />
            <Route path="/persona/" element={<Persona />} />
            <Route path="/panel/*" element={<PanelControl />}> 
                <Route index element={ <InicioPanel/> } />
                <Route path='inicio' element={ <InicioPanel/> } />
                <Route path='crear-articulos' element={ <Crear/> } />
                <Route path='gestion-usuarios' element={ <Gestion/> } />
                <Route path='acerca-de' element={ <Acerca/> } />
            </Route>
            <Route path="/redirigir" element={ <Navigate to="/persona/Nieves/Ventura" />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </section>
<hr />
<footer>
    Footer sahdiash
</footer>
    
    </BrowserRouter>
  )
}

import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <p>Elige una de las opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to="/panel/inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/crear-articulos">Crear Articulos</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/gestion-usuarios">Gestión usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/acerca-de">Acerca de</NavLink>
                </li>
            </ul>
        </nav>

        <div>
            <Outlet/>
        </div>
    </div>
  )
}

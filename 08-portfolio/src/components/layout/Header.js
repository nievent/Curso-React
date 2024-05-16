import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>NV</span>
            <h3>Nieves Ventura Portafolio</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio"> Inicio </NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio"> Portafolio </NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum"> Curriculum </NavLink>
                </li>
                <li>
                    <NavLink to="/contacto"> Contacto </NavLink>
                </li>
            </ul>
        </nav>

    </header>
  )
}

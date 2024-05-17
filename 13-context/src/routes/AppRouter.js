import React, {useContext} from 'react'
import { Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Acerca } from '../components/Acerca';
import { Login } from '../components/Login';
import { Prueba } from '../context/Prueba';


export const AppRouter = () => {
  
  const {usuario, setUsuario} = useContext(Prueba)
  
  return (
    <BrowserRouter>
    <header className='header'>
      <nav>
        <div className='logo'>
          <h2>React CTX</h2>
        </div>
        <ul>
          <li>
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/contacto'>Contacto</NavLink>
          </li>
          <li>
            <NavLink to='/articulos'>Articulos</NavLink>
          </li>
          <li>
            <NavLink to='/acerca-de'>Acerca de</NavLink>
          </li>
            {
              !usuario.user ? (
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
              )
              :
              (
              <>
              <li>
                <NavLink to='/login'>{usuario.user}</NavLink>
              </li>
              <li>
                <a href="/" onClick={
                  e => {
                    e.preventDefault()
                    setUsuario({})
                  }
                }>Logout</a>
              </li>
              </>
              )
            }


        </ul>
      </nav>
    </header>

<section className='content'>
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/acerca-de' element={<Acerca />} />
        <Route path='/login' element={<Login />} />
        
        <Route path='*' element={
            <h1>404 Not Found</h1>
        } />

    </Routes>
</section>

    </BrowserRouter>
  )
}

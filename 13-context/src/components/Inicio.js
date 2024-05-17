import {React, useContext} from 'react'
import { Prueba } from '../context/Prueba'

export const Inicio = () => {

  const {usuario, setUsuario} = useContext(Prueba)
  return (
    <div>
      <h1>Inicio</h1>
      <p>Página de inicio</p>
      <p>Nombre {usuario.nombre}</p>
      
    </div>
  )
}

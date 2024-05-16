import React, { useState } from 'react';
import { Empleados } from './Empleados';

export const Gestion = () => {
  const [nombre, setNombre] = useState('');
  const [pagina, setPagina] = useState(1);

  const asignarGestor = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div>
      <h1>Nombre del gestor: {nombre}</h1>
      <input type="text" placeholder='Introduce el nombre' onChange={asignarGestor}/>

      <h2>Listado de empleados:</h2>
      <p>Los usuarios son gestionados por { nombre } y vienen de reqres.in...</p>
      <button onClick={() => {setPagina(1)}}>Página 1</button>
      <button onClick={() => {setPagina(2)}}>Página 2</button>

      <Empleados pagina={pagina}/>
    </div>
  );
};

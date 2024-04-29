import React, { useEffect, useState} from 'react'
import { Editar } from './Editar';

export const Listado = ({listado, setListado}) => {

  const [editar, setEditar] = useState (0)
  
  const getPelis = () => {
    let pelis = JSON.parse(localStorage.getItem(("pelis")));
    setListado(pelis);
  }

  useEffect(() => {
    getPelis();
  },[])

  const deletePeli = (id) => {
    let pelis = JSON.parse(localStorage.getItem(("pelis")));
    pelis = pelis.filter(peli => peli.id!== id);
    setListado(pelis);
    localStorage.setItem("pelis", JSON.stringify(pelis));
  }

  return (
    <>
    {listado!= null ?
        listado.map(peli => {
          return (

            <article className="peli-item" key={peli.id}>
                <h3 className="title">{peli.title}</h3>
                <p className="description">{peli.description}</p>
                <button className="edit" onClick={ () => {
                  setEditar(peli.id)
                }}>Editar</button>
                <button className="delete" onClick={() => deletePeli(peli.id)}>Borrar</button>

                {editar === peli.id && (
                  <Editar 
                    peli = {peli}
                    getPelis = {getPelis}
                    setListado = {setListado}
                    setEditar = {setEditar}
                  />
                )}
            </article>
        
          )
    }) :
      <h2>No hay películas</h2>
    }
    </>
  )
}

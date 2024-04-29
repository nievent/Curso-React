import React, { useState } from 'react'

export const Buscador = ({listado, setListado}) => {

  const [search, setSearch] = useState('');

  const buscarPeli = (e) => {
    setSearch(e.target.value);

    let pelis_encontradas = listado.filter(peli => {
      return peli.title.toLowerCase().includes(search.toLowerCase());
    })

    if(search.length<=1 ) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
    }
    setListado(pelis_encontradas);
  }


  return (
    <div className="search">
        <h3 className="title">Buscador: {search}</h3>
        <form>
            <input 
              type="text" 
              id='search_field' 
              name='busqueda'
              autoComplete='off'
              value= {search}
              onChange={buscarPeli}
            />
            <button>Buscar</button>
        </form>
    </div>
  )
}

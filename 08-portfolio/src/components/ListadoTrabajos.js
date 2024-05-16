import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'

export const ListadoTrabajos = ({limite}) => {
  return (
      <section className='trabajos'>
      {
        trabajos.slice(0,limite).map((trabajo) => {
          return (
            <article className='trabajo' key={trabajo.id}>
              <div className='mask'>
              <img src={'/images/' +trabajo.id + ".png"} alt={trabajo.nombre} />
              </div>
              <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
              <p>{trabajo.descripcion}</p>
              <p className='tech'>{trabajo.tecnologias}</p>
            </article>
          )
        })
      }
      </section>
  )
}
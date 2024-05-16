import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

  const [proyecto, setProyecto] = useState({});
  const params = useParams(); 

  useEffect(() => {
    let proyecto = trabajos.filter(trabajo => trabajo.id === params.id) 
    console.log(proyecto)
    setProyecto(proyecto[0])
  },[])

  return (
    <div className='page'>
        <h1 className='heading'>{ proyecto.nombre }</h1>
        <p>{ proyecto.tecnologias }</p>
        <p>{ proyecto.descripcion }</p>
        <img className='proyectImg' src={'/images/' + proyecto.id + ".png"} alt={proyecto.nombre} />
    </div>
  )
}

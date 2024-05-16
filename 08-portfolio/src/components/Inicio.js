import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Nieves Ventura</strong> , desarrolladora web en Valencia. Ofrezco mis servicios de <strong>programación y desarrollo</strong>  en todo tipo de proyectos web.
      </h1>
      <h2 className='btn'>
        Siempre he intentado ser una persona
        que llame la atención allá donde va por
        su gran capacidad, su voluntad y su
        esfuerzo. Mi objetivo profesional a día de
        hoy no es otro que convertirme en una
        gran desarrolladora de software y poder
        vivir haciendo lo que más me gusta:
        programar. 
        <br />
        <br />
        <Link to='/contacto'> Contacta conmigo </Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos:</h2>
        <div className='works'><ListadoTrabajos limite="2" /></div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenido a mi blog</h1>
      <p>
        Blog desarrollado con el MERN Stack (Mongo, Express, React y NodeJS).
      </p>
      <Link to='/articulos' className='btn'>
        Ver Articulos
      </Link>
    </div>
  )
}

import React, {useEffect, useState} from 'react'
import { Aviso } from './Aviso';

export const PruebasComponent = () => {

  const [usuario, setUsuario] = useState("Nieves Ventura")
  const [fecha, setFecha] = useState("30-04-1998");
  const [contador, setContador] = useState(0)

  const modUsuario = (e) => {
    setUsuario(e.target.value)
  }
  const modFecha = (e) => {
    setFecha(Date.now())
  }

  // useEffect(() => {
  //   console.log("Se ejecuto el efecto global")
  // })

  useEffect(() => {
    console.log("Se ejecuto el efecto de inicio")
  }, [])

  useEffect(() => {
    setContador(contador+1)
    console.log("Se ejecuto el efecto de cambio de usuario " + contador)
  }, [usuario])


  return (
    <div>
        <h2>El efecto - Hook useEffect</h2>
        <strong className={ contador>= 10 ? 'label label-green' : 'label'}>{ usuario }</strong>
        <strong>{ fecha }</strong>
        <p>
            <input 
                type="text" 
                onChange={ modUsuario }
                placeholder='Cambia el nombre'
            />
            <button onClick={ modFecha }>
              Cambiar fecha
            </button>
        </p>

        { usuario === "NIEVES" && <Aviso />}
    </div>
  )
}

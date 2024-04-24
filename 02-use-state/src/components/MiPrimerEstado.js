import React, {useState} from 'react'

export const MiPrimerEstado = () => {
    // let nombre = "Nieves Ventura"

    // const cambiarNombre = e => {
    //     nombre = "Yoel Orts"
    // }

    const [nombre, setNombre] = useState("Nieves Ventura")
    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo)
    }
  return (
    <div>
        <h3>Componente: Mi primer estado</h3>
        <strong className='label'>{nombre}</strong>
        <br />
        <button onClick={e => cambiarNombre(e, "Yoel") }> Cambiar nombre por Yoel </button>
        <input type="text" onChange={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre' />
    </div>
  )
}

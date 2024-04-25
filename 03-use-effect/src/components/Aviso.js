import React, { useEffect } from 'react'

export const Aviso = () => {

    useEffect(() => {
        alert('Componente montado')
        return () => {
            alert('Componente desmontado')
        }
    }, [])
  return (
    <div>
        <h1>HOLA CARACOLA</h1>
        <button onClick={e => {
            alert('HOLA CARACOLA')
        }}>Mostrar Alerta</button>
    </div>
  )
}

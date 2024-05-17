import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const Component = () => {

    const [mostrar, setMostrar] = useState(false);

    const caja = useRef()
    const boton = useRef()

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    }, []);

    useEffect(() => {
        console.log('useEffect')
        if(caja.current == null) return;

        const {bottom} = boton.current.getBoundingClientRect();
        console.log(bottom)
        caja.current.style.marginTop = `${bottom + 15}px`
        caja.current.style.marginLeft = `${bottom + 15}px`
        

    }, [mostrar])

  return (
    <div>
        <h1>Ejemplos useEffect y useLayoutEffect</h1>
        <button ref={boton} onClick={() => setMostrar(prev => !prev)}>Muestra </button>
        {mostrar && (
            <div id='caja' ref={caja}>
                holo cocacolo
            </div>
        )}
    </div>
  )
}

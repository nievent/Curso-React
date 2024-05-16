import React, { useRef } from 'react'

export const Formulario = () => {

    const nombre = useRef()
    const apellido = useRef()
    const mail = useRef()
    const miCaja = useRef()

    const mostrar = e => {
        e.preventDefault() 
        console.log(nombre.current.value)
        console.log(apellido.current.value)
        console.log(mail.current.value)

        //mi caja

        let {current: caja} = miCaja
        caja.classList.add("verde")
        caja.innerHTML = "formulario enviado!"
    }
  return (
    <div>
        <div className='miCaja' ref={miCaja} >
            <h2>Pruebas con useRef</h2>
        </div>
        <h1>Formulario</h1>
        <form onSubmit={mostrar}>
            <input type="text" placeholder='Nombre' ref={nombre}/> <br />
            <input type="text" placeholder='Apellidos' ref={apellido} /> <br />
            <input type="email" placeholder='Email' ref={mail}/> <br />
            <input type="submit" value='Enviar' /> 
        </form>
    </div>
  )
}

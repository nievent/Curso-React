import React, { useState } from 'react'

export const Formulario = () => {

    const [usuario, setUsuario] = useState({});
    const getData = (e) => {
        e.preventDefault()
        let data = e.target
        let usuario = {
            nombre: data.nombre.value,
            apellido: data.apellido.value,
            genero: data.genero.value,
            bio: data.bio.value
        }

        console.log(usuario)
        setUsuario(usuario)
    }

    const changeData = (e) => {
        setUsuario({
           ...usuario,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
        <h1>Formularios con React</h1>

    { usuario.bio && usuario.bio.length >= 1 && 
        (
            <div className='info_usuario label'> 
                {usuario.nombre} {usuario.apellido} es {usuario.genero} y esta es su biografia:
                <p>{usuario.bio}</p>
            </div>
        )
    }

        <form onSubmit={getData}>
            <input 
                type="text" 
                placeholder='Nombre'
                name='nombre' 
                onChange={changeData}
            />
            <input 
                type="text" 
                placeholder='Apellido'
                name='apellido'
                onChange={changeData}
             />
            <select name='genero' onChange={changeData} >
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea 
                onChange={changeData} 
                name='bio' 
                placeholder='Biografia'>
            </textarea>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

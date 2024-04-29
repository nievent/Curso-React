import React, { useState } from 'react'
import { SaveOnStorage } from '../helpers/SaveOnStorage'

export const Crear = ({setListado}) => {
    const titleComp = "Añadir Película"
    const [peli, setPeli] = useState({
        title: "",
        description: ""
    })

    const { title, description } = peli
    
    const getData = (e) => {
        e.preventDefault()
        let data = e.target
        let pelicula = {
            id: new Date().getTime(),
            title: data.title.value,
            description: data.description.value
        }
        setPeli(pelicula)

        setListado(items => {
            return [...items, pelicula]
        })
        SaveOnStorage("pelis", pelicula)
        
    }
    


  return (
    <div className="add">
        <h3 className="title">{ titleComp }</h3>

        {(title && description) && "Has añadido la peli " + title}
        <form onSubmit={getData}>
            <input 
                type="text" 
                name='title'
                id='title'
                placeholder="Título" 
            />
            <textarea 
                placeholder="Descripción"
                name='description'
                id='description'
            ></textarea>
            <input 
                type="submit" 
                value="Guardar"
            />
        </form>

    </div>
  )
}

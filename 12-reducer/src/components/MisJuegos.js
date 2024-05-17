import React, { useReducer, useEffect } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem("juegos")) || [];
}

export const MisJuegos = () => {

    const [juegos, dispatch] = useReducer(JuegoReducer, [], init)

    useEffect(() => {
      localStorage.setItem("juegos", JSON.stringify(juegos))
    }, [juegos])
    
    const deleteGame = (id) => {
        const action = {
            type: "ELIMINAR_JUEGO",
            payload: id
        };
        dispatch(action);
    }

    const editGame = (e, id) => {
        let juego = {
            id,
            titulo: e.target.value,
            descripcion: e.target.value,
        };

        const action = {
            type: "EDITAR_JUEGO",
            payload: juego
        };
        dispatch(action);
    }
    
    const getData = (e) => {
        e.preventDefault();
        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value,
        };

        console.log(juego);

        const action = {
            type: "AGREGAR_JUEGO",
            payload: juego
        };

        dispatch(action);
        
        console.log(juegos); 
        e.target.titulo.value = '';
        e.target.descripcion.value = '';
    }


  return (
    <div>
        <h1>Mis videojuegos: </h1>
        <p>Número de videojuegos: {juegos.length}</p>

        <ul>
            {
                juegos.map(juego => (
                    <li key={juego.id}>
                        {juego.titulo}  
                        &nbsp;
                        <button onClick={e => deleteGame(juego.id)}>X</button>
                        &nbsp; 
                        <input type="text" onBlur={e => editGame(e, juego.id)} />
                    </li>
                ))
            }
        </ul>

        <h3>Agregar juego</h3>
        <form onSubmit={getData}>
            <input type="text" placeholder='Título' name='titulo'/>
            <textarea name="descripcion" placeholder='Descripción'></textarea>
            <input type="submit" value='Guardar' />
        </form>
    </div>
  )
}

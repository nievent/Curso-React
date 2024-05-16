import React, { useMemo, useState } from 'react';

export const Tareas = () => {
    const [tareas, setTareas] = useState([]);
    const [contador, setContador] = useState(1000);

    const saveTareas = e => {
        e.preventDefault();
        setTareas([...tareas, e.target.titulo.value]);
        e.target.titulo.value = '';
    };

    const deleteTarea = indice => {
        setTareas(tareas.filter((tarea, index) => index!== indice));
    };

    const sumar = () => {
        setContador(contador + 1)
    }

    const contadoresPasados = (acumulacion) => {
        for(let i=0; i<=acumulacion; i++) {
            console.log("ejecutando...");
        }
        return `Contador manual de tareas: ${acumulacion}`
    }

    const memoContadores = useMemo(() => {contadoresPasados(contador)}, [contador])

    return (
        <div className='tareas'>
            <h1>Mis tareas</h1>
            <form onSubmit={saveTareas}>
                <input type='text' name='titulo' placeholder='Tarea' />
                <input type='submit' value='Añadir' />
            </form>
            <h3>{memoContadores}</h3>
            <h3>Contador manual de tareas: {contador} <button onClick={sumar}>Sumar</button></h3>
            <h3>Lista de tareas:</h3>
            <ul>
                {tareas.map((tarea, indice) => {
                    return (
                        <li key={indice}>
                            {tarea}
                            <button onClick={() => deleteTarea(indice)}>X</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

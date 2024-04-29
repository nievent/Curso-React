import React from 'react'

export const Editar = ({peli, getPelis, setListado, setEditar}) => {
    const title_comp = "Editar Película"
    const saveEdition = (e, id) => {
        e.preventDefault()
        let pelis_almacenadas = JSON.parse(localStorage.getItem(("pelis")));
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        let peli = {
            id,
            title: e.target.title.value,
            description: e.target.description.value
        }
        pelis_almacenadas[indice] = peli

        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));
        setListado(pelis_almacenadas)
        setEditar(0)
        

    }
    return (
        <div className='edit_form'>
            <h3 className='title'>{title_comp}</h3>
            <form onSubmit={e => saveEdition(e, peli.id)}> 
                <input 
                    type="text" 
                    name='title'
                    className='titulo_editado'
                    defaultValue= {peli.title}
                />

                <textarea 
                    name="description" 
                    defaultValue={peli.description}
                    className='descripcion_editada'
                ></textarea>

                <input type="submit" className='editar' value="Actualizar" />

            </form>
        </div>
    )
}

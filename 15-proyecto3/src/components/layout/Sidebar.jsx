import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {

    const [buscar, setBuscar] = useState("")
    const navegar = useNavigate();
    const hacerBusqueda = (e) => {
        e.preventDefault();
        let mi_busqueda = e.target.search_field.value;
        navegar("/buscar/" + mi_busqueda);
    }
    return (
    <aside className="lateral">
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form onSubmit={hacerBusqueda}>
                <input type="text" name='search_field' />
                <button id='search'>Buscar</button>
            </form>
        </div>

        {/* <div className="add">
            <h3 className="title">Añadir Película</h3>
            <input type="text" placeholder="Título" />
            <textarea placeholder="Descripción"></textarea>
            <input type="submit" value="Guardar" />
        </div> */}
    </aside>
    )
}

import React, { useEffect, useState } from 'react'


export const Ajax = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true)

    // const getUsuariosEstaticos = () => {
    //     setUsuarios([
    //         {
    //             "id": 1,
    //             "email": "michael.lawson@reqres.in",
    //             "first_name": "Michael",
    //             "last_name": "Lawson",
    //         },
    //         {
    //             "id": 2,
    //             "email": "lindsay.ferguson@reqres.in",
    //             "first_name": "Lindsay",
    //             "last_name": "Ferguson",
    //         },
    //         {
    //             "id": 3,
    //             "email": "tobias.funke@reqres.in",
    //             "first_name": "Tobias",
    //             "last_name": "Funke",
    //         },
    //     ])
    // }

    // const getUsuariosAjaxPms = () => {
    //     fetch('https://reqres.in/api/users?page=1')
    //        .then(respuesta => respuesta.json())
    //        .then(respuesta => {
    //             setUsuarios(respuesta.data);
    //         },
    //         error => {
    //             console.log(error);
    //         })
    // }

    const getUsuariosAjaxAW = () => {
        
        setTimeout(async() => {
            try {
                const peticion = await fetch('https://reqres.in/api/users?page=1')
                const {data} = await peticion.json();
                console.log(data);
                setUsuarios(data);
                setCargando(false);
            } catch(error) {
                console.log(error);
            }
        }, 2000)

    }

    useEffect(() => {
        getUsuariosAjaxAW();
    }, [])

    if(cargando) {
        return(
            <div className='cargando'>
                Cargando datos...
            </div>
        )
    } 

    return (
        <div>
            <h2>Listado de usuarios via Ajax</h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario => {
                        return <li key={usuario.id}>
                            <img src={ usuario.avatar } width="20" alt='' />
                            &nbsp;
                            {usuario.first_name} {usuario.last_name}
                            </li>
                    })
                }
            </ol>
        </div>
    )
}

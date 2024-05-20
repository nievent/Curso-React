import React, {useId} from 'react'
import { useMayus } from '../hooks/useMayus';

export const Componente = () => {

    const id = useId();
    const {estado, mayusculas, minusculas, capitalizar} = useMayus("nieves");

    return (
        <div>
            <h1>Hook UseID</h1>
            <input type="text" id={id} name='nombre' placeholder='nombre' />

            <h1>Custom hooks</h1>
            <h2>{estado}</h2>

            <button onClick={mayusculas}>Poner en mayusculas</button>
            <button onClick={minusculas}>Poner en minusculas</button>
            <button onClick={capitalizar}>Capitalizar</button>
        </div>
    )
}

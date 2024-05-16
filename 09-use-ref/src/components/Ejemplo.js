import React, { useState } from 'react'

export const Ejemplo = () => {

    const [numSaludos, setNumSaludos] = useState(0);
    const saludos = React.useRef(numSaludos);

    
    React.useEffect(() => {
        setTimeout(() => {
            saludos.current = numSaludos;
            console.log("Saludos en cola: " + saludos.current)
        }, 2000);
    }, [numSaludos]);

    
    const enviarSaludo = () => {
        setNumSaludos(numSaludos + 1);
    }
  return (
    <div>
        <h1>Ejemplo con useRef</h1>
        <h2>Saludos enviados: {numSaludos} </h2>
        <button onClick={enviarSaludo}>Enviar Saludo!!</button>
    </div>
  )
}

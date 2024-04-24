import React, {useState} from 'react'
import PropTypes from "prop-types"

export const EjercicioComponent = ({year}) => {

    const [yearNow, setYear] = useState(year)

    const handleNextYear = () => {
        setYear(yearNow + 1)
    }

    const handlePreviousYear = () => {
        setYear(yearNow - 1)
    }

  return (
    <div>
        <h2>Ejercicio con eventos y useState</h2>
        <strong className='label'>
            {yearNow}
        </strong>
        <p>
            <button onClick={handlePreviousYear}>Anterior</button>
            &nbsp;
            <button onClick={handleNextYear}>Siguiente</button> 
        </p>
        <p>Cambiar año:</p>
        <input 
            type="number" 
            value={yearNow} 
            onChange={(e) => setYear(Number(e.target.value))}
            placeholder='Cambia el año' 
        />
    </div>
  )
}

EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired
}
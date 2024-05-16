import React, { useEffect, useState } from 'react';

export const Empleados = React.memo(({ pagina = 1 }) => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    getEmpleados(pagina);
  }, [pagina]);

  const getEmpleados = async (page) => {
    const respuesta = await fetch('https://reqres.in/api/users?page=' + page);
    const { data: empleados } = await respuesta.json();
    setEmpleados(empleados);
  };

  console.log("se ha renderizado empleados");

  return (
    <div>
      <ul className='empleados'>
        {empleados.length >= 1 &&
          empleados.map((empleado) => (
            <li key={empleado.id}>
              {empleado.first_name} {empleado.last_name}
            </li>
          ))}
      </ul>
    </div>
  );
});

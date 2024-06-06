import { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async() =>{
    const url = Global.url + "articulos";
    const {datos} = await Peticion(url, "GET")

      if(datos.status === 'success') {
        setArticulos(datos.articulos);
      }
      setCargando(false);
  }
console.log(articulos)
  return (
    <>
      {cargando ? "Cargando..." : 
          articulos.length > 0 ? 
           <Listado articulos={articulos} setArticulos={setArticulos} />
            :<p>No hay artículos</p>
      }
    </>
  );
}


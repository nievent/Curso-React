import { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';

export const Busqueda = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    console.log(params);
    conseguirArticulos();
  }, []);

  useEffect(() => {
    console.log(params);
    conseguirArticulos();
  }, [params]);
  const conseguirArticulos = async() =>{
    const {datos, cargando} = await Peticion(Global.url + "buscar/" + params.busqueda, "GET");

      if(datos.status === 'success') {
        setArticulos(datos.articulos);
      } else {
        setArticulos([]);
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


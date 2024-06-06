import { useEffect, useState } from 'react';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { useParams } from 'react-router-dom';

export const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async() =>{
    const url = Global.url + "articulo/" + params.id;
    const {datos} = await Peticion(url, "GET")

      if(datos.status === 'success') {
        setArticulo(datos.articulo);
      }
      setCargando(false);
  }
console.log(articulo)
  return (
    <div className='jumbo'>
      {cargando ? "Cargando..." : 
           (
            <>
            <div className='mascara'>
                {articulo.imagen == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="logo-js" />}
                {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} alt="foto" />}
            </div>
            <h1>{articulo.titulo}</h1>
            <span>{articulo.fecha}</span>
            <p>{articulo.contenido}</p>
            </>
           )
      }
    </div>
  );
}


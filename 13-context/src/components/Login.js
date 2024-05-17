import React, {useContext} from 'react'
import { Prueba } from '../context/Prueba'


export const Login = () => {

  const {usuario, setUsuario} = useContext(Prueba)

  const saveData = (e) => {
    e.preventDefault();
    let usuario = {
      user: e.target.user.value,
      pwd: e.target.pwd.value,
    }

    setUsuario(usuario)
    console.log(usuario);
    e.target.user.value = '';
    e.target.pwd.value = '';

  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <p>Página de Login</p>

      <form onSubmit={saveData}>
        <input type="text" name='user' placeholder="Usuario" />
        <input type="password" name='pwd' placeholder="Contraseña" />
        <input type="submit" value="Enviar" />
      </form>

    </div>
  )
}

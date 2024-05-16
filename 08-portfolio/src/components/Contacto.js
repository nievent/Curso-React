import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
      <div className='contact'>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 625 23 96 72
            </li>
            <li>
             <FontAwesomeIcon icon={faEnvelope} /> nieves.venturav@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Almácera. 46132, Valencia
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} /> <a href='https://www.linkedin.com/in/nieves-ventura-v%C3%A1zquez-49aa201b1/' target='_blank' rel='noreferrer'>Linkedin</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} /> <a href='https://github.com/nievent' target='_blank' rel='noreferrer'>Github</a>
            </li>
          </ul>
        <form className='contact' action='mailto:nieves.venturav@gmail.com'>
          <input type="text" name="nombre" id="nombre" placeholder='Nombre' />
          <input type="text" name="apellidos" id="apellidos" placeholder='Apellidos' />
          <input type="email" name="email" id="email" placeholder='Email' />
          <textarea name="motivo" id="motivo" placeholder='Motivo de contacto'></textarea>
          <input type="submit" value='Enviar' />
        </form>
      </div>
    </div>
  )
}

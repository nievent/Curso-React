import React from 'react';
import CV from './CV_Nieves_Ventura_Vazquez.pdf';

export const Curriculum = () => {
  return (
    <div className='curriculum page'>
      <h1 className='heading'>Currículum</h1>
      
      <details className='section' open>
        <summary>Formación</summary>
        <ul>
          <li>
            <p><strong>Técnico superior en desarrollo de aplicaciones Web</strong></p>
            <p>IES Consellería. 2022-2024</p>
          </li>
          <li>
            <p><strong>Grado en Psicología</strong></p>
            <p>Universidad de Valencia. 2016-2020</p>
          </li>
        </ul>
      </details>
      <details className='section cursos'>
        <summary>Formación complementaria</summary>
        <ul>
          <li>Curso Python orientado a Inteligencia Artificial. UPV</li>
          <li>Curso Figma. Open Webinar.</li>
          <li>Curso Git Y Github. Open Webinar</li>
          <li>Curso de maquetación web con CSS. Open Webinar</li>
          <li>Curso de HTML5 y CSS3. Open Webinar</li>
          <li>Curso en Wordpress, construcción de sitios web. Open Webinar</li>
          <li>Curso 100-days-of-code 2024 de HTML, CSS, JS y nodeJS. Udemy</li>
          <li>Curso JavaScript - The complete guide 2024. Udemy </li>
          <li>Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+. Curso Udemy (en curso)</li>
        </ul>
      </details>
      <details className='section'>
        <summary>Herramientas</summary>
        <ul className="tools-grid">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>JQuery</li>
          <li>Java</li>
          <li>React.js</li>
          <li>Bootstrap</li>
          <li>MVC</li>
        </ul>
      </details>
      <details className='section'>
        <summary>Idiomas</summary>
        <ul>
          <li>Castellano</li>
          <li>Inglés</li>
          <li>Valenciano</li>
        </ul>
      </details>
      <details className='section'>
        <summary>Experiencia</summary>
        <ul>
          <li>
            <p>2023-Actualidad - <strong>Forlopd:</strong> Desarrolladora Web.</p>
            <p>Creación y mantenimiento de software de gestión de empresas, creación de aplicaciones CRM y demás aplicaciones web para el funcionamiento interno de la empresa, así como de páginas web y cursos de carácter público.</p>
          </li>
          <li>
            <p>2022 - <strong>Librerías París-Valencia: </strong> Dependienta.</p>
            <p>Atención al cliente, reposición de libros, control de caja, mantenimiento y limpieza del establecimiento, creación de inventario y albaranes.</p>
          </li>
          <li>
            <p>2021 - <strong>Mapfre: </strong> Gestora.</p>
            <p>Atención al cliente, venta de seguros, fidelización del cliente, control de programas de gestión.</p>
          </li>
          <li>
            <p>2019-2020 - <strong>Fundación ANAR: </strong> Psicóloga.</p>
            <p>Realización y creación de talleres a niños y adolescentes entre 8 y 16 años sobre acoso escolar, ciberacoso, violencia de género, responsabilidad, autonomía, gestión emocional y resolución de conflictos.</p>
          </li>
        </ul>
      </details>
      <br />
<a href={CV} download className='btn-descargar'>Descargar Currículum</a>
    </div>
  );
};

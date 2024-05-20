import React, { useState } from 'react'

export const Formulario = () => {

    const [form, setForm] = useState({})

    const serializarForm = (form) => {
        let datos = new FormData(form);
        let objeto = {};
        datos.forEach((value, key) => {
            objeto[key] = value;
        });
        return objeto;
    }

    const enviado = (e) => {
        e.preventDefault();
        
        // let curso = {
        //     titulo: e.target.titulo.value,
        //     anyo: e.target.anyo.value,
        //     descripcion: e.target.descripcion.value,
        //     autor: e.target.autor.value,
        //     email: e.target.email.value,
        // }
        let curso = serializarForm(e.target);
        console.log(serializarForm(e.target));
        setForm(curso)
        console.log(curso);
    }



  return (
    <div className='formulario'>
        <h1>Formulario</h1>
        <p>Formulario para guardar datos de un curso</p>
        <p>Curso guardado: </p>
        <form onSubmit={enviado}>
            <input type="text" name='titulo' placeholder="Nombre del curso:" />
            <input type="number" name='anyo' placeholder="Año de publicación:" />
            <textarea name="descripcion" placeholder='Descripción'></textarea>
            <input type="text" name='autor' placeholder='Autor' />
            <input type="email" name='email' placeholder='Correo de contacto'/>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

import { useState } from "react";

export const useMayus = (texto) => {

    const [text, setText] = useState(texto)

    const mayusculas = () => {
        setText(texto.toUpperCase());
    }
    const minusculas = () => {
        setText(texto.toLowerCase());
    }
    const capitalizar = () => {
        setText(texto.charAt(0).toUpperCase() + texto.slice(1));
    }

    return {
        estado: text,
        mayusculas,
        minusculas,
        capitalizar
    };
}
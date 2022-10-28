import React, { useEffect, useReducer } from 'react'
import {Reducer} from '../reducers/JuegoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem("Juegos")) || [];
};

export const MisJuegos = () => {
    const [juegos, dispatch] = useReducer(Reducer, [], init);

    useEffect(() => {
        localStorage.setItem("juegos", JSON.stringify(juegos));
    }, [juegos])
    const conseguirDatos = e => {
        e.preventDefault();

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        };
    }

  return (
    <div>
        <h1>Estos son mis videojuegos</h1>
        <p>Numero de videojuegos: 15</p>
        <ul>
            <li>Gta</li>
            <li>Halo</li>
            <li>Gow</li>
        </ul>
        <h3>Agregar Juego</h3>
        <form onSubmit={conseguirDatos}>
            <input type = "text" name = "titulo" placeholder='titulo'/>
            <textarea name = "descripcion" placeholder='Descripcion'/>
            <input type = "submit" value = "Guardar"/>
        </form>
    </div>
  )
}

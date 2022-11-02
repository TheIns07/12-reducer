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

        const action = {
            type: "crear",
            payload: juego
        };

        dispatch(action);

        console.log(juegos)
    }

    const borrar = id => {
        const action = {
            type: "borrar",
            payload: id
        };

        dispatch(action);
    }

    const editar = (e, id) => {
        console.log(e.target.value + " Editar "+ id)

        let juego = {
            id,
            titulo: e.target.value,
            descripcion: e.target.value
        };

        const action = {
            type: "editar",
            payload: juego
        };

        dispatch(action);

        console.log(juegos)
    }

  return (
    <div>
        <h1>Estos son mis videojuegos</h1>
        <p>Numero de videojuegos: {juegos.length}</p>
        <ul>
            {juegos.map(juego => (
                <li key = {juego.id}>{juego.titulo}
                <button onClick={e => borrar(juego.id)}>X</button>
                <input type = "text" onBlur = {e => editar(e, juego.id)}
                                    onKeyPress = {e => {if (e.key === "Enter") editar(e, juego.id)}}/>
                </li>
               
            ))}
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

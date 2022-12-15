import React from "react";
import { useEffect } from "react";

const Eventos = () => {
    const hacerClick = (event) => {
        console.log(event.nativeEventj);
    }

    const eventoInput = (event) => {
        event.preventDefault();
        console.log("Evento Input");
    }

    const onClick = (event) => {
        event.stopPropagation();
        console.log("Stop Propagation");
    }

    const entradaAlBoton = () => {
        console.log("Entraste al Botón!");
    }

     const salidaDelBoton = () => {
        console.log("Saliste del Botón!");
    }

    const onResize = () => {
        console.log("Hiciste un resize!");
    }

    window.addEventListener("resize", onResize);

    useEffect(() => {
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    return (
        <div className="container">
            <h1>Eventos</h1>
            <button className="btn btn-primary" onClick={(e) => {hacerClick(e)}}>Click</button><br /><input type="text" onKeyDown={eventoInput} /><br /><button className="btn btn-primary" onClick={onClick}>Click 2</button>
        </div>
    )
}

export default Eventos;
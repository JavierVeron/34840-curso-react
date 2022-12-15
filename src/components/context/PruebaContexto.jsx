import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const PruebaContexto = () => {
    const {esMiercoles, saludar} = useContext(CartContext);

    return (
        <div className="m-5">
            <h1>Prueba Contexto</h1>
            <p>Es Miércoles? {esMiercoles}</p>
            <p><button className="btn btn-secondary" onClick={saludar}>Saludar a Todos!</button></p>
        </div>
    )
}

export default PruebaContexto;
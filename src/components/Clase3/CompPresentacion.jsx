import React from "react";

const Titulo = ({valor}) => {
    return (
        <h2>{valor}</h2>
    )
}

const Item = ({valor}) => {
    return (
        <li>{valor}</li>
    )
}

const Input = ({valor}) => {
    return (
        <input type="text" placeholder={valor} />
    )
}

const CompPresentacion = () => {
    const infusiones = ["Té", "Café", "Mate", "Capuccino"];

    return (
        <div>
            <h1>Componente de Representación</h1>
            <Titulo valor="Un título cualquiera..." />
            <Input valor="Ingrese su Nombre" />
            <ul>
                {infusiones.map(item => <Item valor={item} />)}
            </ul>
        </div>
    )
}

export default CompPresentacion;
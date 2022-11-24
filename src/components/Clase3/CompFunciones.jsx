import React from "react";

/* const CompFunciones = (pepe) => { //Recibir las Props como Objeto
    console.log(pepe.notas);
    
    return (
        <div>
            <h1>Componente basado en Función</h1>
            <p>Tu nombre es: <b>{pepe.nombre} {pepe.apellido}</b></p>
        </div>
    )
} */

const CompFunciones = ({nombre, apellido}) => { //Desestructurando Props en los parámetros
    return (
        <div>
            <h1>Componente basado en Función</h1>
            <p>Tu nombre es: <b>{`${nombre} ${apellido}`}</b></p> 
        </div>
    )
}

export default CompFunciones;
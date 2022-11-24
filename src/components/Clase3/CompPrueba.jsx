import React from "react";

/* const CompPrueba = ({institucion, children}) => { //Componente recibiendo un componente children
    return (
        <div>
            <h1>{institucion}</h1>
            {children}
        </div>
    )
} */

const CompPrueba = ({institucion, compHijo}) => { //Componente recibiendo un componente children
    return (
        <div>
            <h1>{institucion}</h1>
            {compHijo}
        </div>
    )
}

export default CompPrueba;
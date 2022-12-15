import React, { useState, createContext, useContext } from "react";

// Creo un Contexto
const ThemeContext = createContext();

// Comp. con Prop
/* const Componente1 = ({isDarkMode}) => {
    return (
        <Componente2 isDarkMode={isDarkMode} />
    )
}

// Comp. con Prop
const Componente2 = ({isDarkMode}) => {
    return (
        <div>
            <p>Valor de isDarkMode: <b>{isDarkMode}</b></p>
        </div>
    )
} */

// Comp. con Context
const Componente1 = () => {
    return (
        <Componente2 />
    )
}

// Comp. con Context
const Componente2 = () => {
    // Uso un Contexto
    const {isDarkMode, esMiercoles, saludar, productos} = useContext(ThemeContext);

    return (
        <div>
            <p>Valor de isDarkMode: <b>{isDarkMode}</b></p>
            <p>Es Miércoles?: <b>{esMiercoles}</b></p>
            <p><button className="btn btn-primary" onClick={saludar}>Saludar</button></p>
            <h3>Bebidas:</h3>
            <ul>
                {productos.map(item => <li key={item.id}>{item.nombre} ${item.precio}</li>)}
            </ul>
        </div>
    )
}

// Ejemplo Consumer
/* const Componente2 = () => {
    return (
        <ThemeContext.Consumer>
            {({esMiercoles}) => <p>¿Es Miércoles? <b>{esMiercoles}</b></p>}
        </ThemeContext.Consumer>
    )
} */

// Componente sin Contexto
/* const Contexto = () => {
    const [isDarkMode, setDarkMode] = useState("true");

    return (
        <div className="m-5">
            <Componente1 isDarkMode={isDarkMode} />
        </div>
    )
} */

// Componente con Contexto
const Contexto = () => {
    const [isDarkMode, setDarkMode] = useState("true");
    const [esMiercoles, setEsMiercoles] = useState("No");
    const saludar = () => {
        console.log("Hola Coders!");
    }
    const productos = [
        {id:1, nombre:"Coca Cola", precio:400},
        {id:2, nombre:"Pepsi", precio:350}
    ]

    return (
        <div className="m-5">
            <ThemeContext.Provider value={{isDarkMode, esMiercoles, saludar, productos}}>
                <Componente1 />
            </ThemeContext.Provider>
        </div>
    )
}

export default Contexto;
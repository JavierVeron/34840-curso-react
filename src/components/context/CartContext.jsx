import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [esMiercoles, setMiercoles] = useState("No");
    const saludar = () => {
        console.log("Hola Chicozzz!!!");
    }

    return (
        <CartContext.Provider value={{esMiercoles, saludar}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
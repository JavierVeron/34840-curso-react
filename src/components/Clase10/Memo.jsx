import React, {memo} from "react";

// Componente común y corriente
/* const Memo = ({item}) => {
    console.log("Item Renderizado!");

    return (
        <h3 className="text-center">{item.nombre}</h3>
    )
} */

// Componente con React Memo
const Memo = memo(({item}) => {
    console.log("Item Renderizado!");

    return (
        <h3 className="text-center">{item.nombre}</h3>
    )
}, (oldProps, newProps) => oldProps.item.modifyDate === newProps.item.modifyDate);

export default Memo;
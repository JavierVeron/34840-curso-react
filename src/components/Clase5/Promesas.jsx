import React, { useEffect, useState } from "react";

const Promesas = () => {
    const [producto, setProducto] = useState({id:1, nombre:"Coca Cola"});

    const promesa = new Promise ((resolve, reject) => {
        reject(producto.nombre);
    });

    useEffect(() => {
        promesa.then((valor) => {
            setProducto({id:2, nombre:"Pepsi"});
            console.log(valor);
        }/* , (error) => {
            console.log("Error c/parámetro: " + error);
        } */)
        .catch((error) => {
            console.log("Error c/método catch: " + error);
        })
        .then(() => {
            console.log("Estoy aca!");
        })
        .finally(() => {
            console.log("Fin de la ejecución!");
        })
    }, []);

    return (
        <h1>Promesas</h1>
    )
}

export default Promesas;
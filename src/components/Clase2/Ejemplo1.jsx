import React from "react";
import "core-js";

const Ejemplo1 = () => {
    //const condition = false;
    // JS tradicional
    /*let result = null;

    if (condition) {
        result = "Correcto";
    } else {
        result = "Incorrecto";
    }

    console.log(`Esto es ${result}`); */
    
    // Utilizando Sugar Sintax
    //console.log(`Esto es ${(condition) ? "Correcto" : "Incorrecto"}`);


    // Operador Spread
    /* const array1 = [1, 2, 3];
    console.log(array1);
    const array2 = [...array1, 4, 5, 6];
    console.log(array2); */


    // Polyfills
    /* let datos = new Set([1, 2, 3]);
    console.log(Array.from(datos));
    let datos2 = [1, [2, 3], [4, [5]]];
    console.log(datos2.flat(2)); */


    // Promesas tiene 3 estados => 1º Pending (Pendiente) luego puede 2º Resolve (Resuelva) o 3º Reject (Rechazo)
    /* let contento = prompt("Estas contento? (si/no)");
    let promesa = new Promise((resolve, reject) => {
        if (contento === "si") {
            resolve("Sí, estoy contento!");
        } else {
            reject("No, no estoy contento!");
        }
    });

    promesa.then((data) => {
        console.log("Promesa Resuelta:" + data);
    })
    .catch((data) => {
        console.log("Promesa Rechazada: " + data);
    })
    .finally(() => {
        console.log("Fin de la promesa!");
    }) */


    // Ejercicio en Clase - Método Find
    const productos = [
        {id:1, nombre:"Coca Cola", precio: 350},
        {id:2, nombre:"Pepsi", precio: 320},
        {id:3, nombre:"Cunnington Cola", precio: 280},
    ];

    let valor_buscado = 320;
    console.log(productos.find(item => item.precio === valor_buscado));

    for (let i=0; i<productos.length; i++) {
        if (productos[i].precio === valor_buscado) {
            console.log(productos[i]);
            break;
        }
    }

    productos.forEach(item => {
        if (item.precio === valor_buscado) {
            console.log(item);
        }
    });




    return (
        <h1>Ejemplo de Sugar Syntax</h1>
    )
}

export default Ejemplo1;
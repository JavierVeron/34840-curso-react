import React, { useEffect, useState } from "react";

const Effect = ({ubicacion}) => {
    const [lugar, setLugar] = useState("Coderhouse");
    const [curso, setCurso] = useState("");

    useEffect(() => {
        console.log("2a- Actualización del Componente");
        setCurso("Backend");

        return () => {
            console.log("3a- Desmontaje del Componente");
        }
    }, []);

    useEffect(() => {
        console.log("2b- Actualización del Componente");
        setLugar(ubicacion);
        
        return () => {
            console.log("3b- Desmontaje del Componente");
        }
    }, [ubicacion]);
    
    console.log("1- Montaje del Componente");

    return (
        <div onClick={() => {setCurso("React JS")}}>
            <h1>Efecto / Use Effect</h1>
            <p>Lugar: {lugar}</p>
            <p>Curso: {curso}</p>
        </div>
    )
}

export default Effect;
import React, { useState, useEffect } from "react";

const Encabezado = () => {
    console.log("Componente Montado!");

    useEffect(() => {
        return () => {
            console.log("Componente Desmontado!");
        }
    })

    return (
        <h1>Cargando...</h1>
    )
}

const Rendering = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    }, []);

    const cambiarEncabezado = () => {
        setLoading(false);
    }

    /* if (loading === true) {
        return <Encabezado />
    }

    return (
        <h3>Loaded!</h3>
    ) */

    return (
        <div className="m-5">
            {loading ? <Encabezado /> : <h3>Loaded!</h3>}
            <button className="btn btn-primary" onClick={cambiarEncabezado}>Cambiar Encabezado</button>
        </div>
    )
}

export default Rendering;
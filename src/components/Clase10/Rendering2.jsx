import React from "react";

const Rendering2 = ({condition, condition2}) => {
    const options = condition ? {
        className:"text-warning",
        title:"Este es el Título de este Encabezado!"
    } : {};

    return (
        <div className="m-5">
            {/* <h1 style={{color:condition ? "red" : "green"}}>Técnicas de Rendering</h1> */}
            {/* <h1 className={`${condition ? "text-danger" : "text-success"} ${condition2 && "fw-lighter"}`}>Técnicas de Rendering</h1> */}
            <h1 {...options}>Título de Prueba!</h1>
        </div>
    )
}

export default Rendering2;
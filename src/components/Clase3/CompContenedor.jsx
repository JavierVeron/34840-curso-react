import React from "react";
import CompPrueba from "./CompPrueba";

const Aviso = ({curso}) => {
    return (
      <h3>Bienvenidos al Curso de {curso}!</h3>
    )
}

const CompContenedor = () => {
    return (
        <CompPrueba institucion={"Coderhouse"} compHijo={<Aviso curso="JavaScript" />} />
    )
}

export default CompContenedor;
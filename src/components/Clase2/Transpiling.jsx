import React from "react";
import "../../App.css";

const Transpiling = () => {
    let modo = "dark";

    let estilo1 = {
        color:"black",
        backgroundColor:"white",
        padding:"25px",
        fontSize:"32px"
    }

    let estilo2 = {
        color:"white",
        backgroundColor:"black",
        padding:"25px",
        fontSize:"32px"
    }

    const saludar = () => {
        alert("Hola Coders!");
    }

    return (
        <div style={modo === "white" ? estilo1 : estilo2}>
            <h1 style={{textTransform:"uppercase", letterSpacing:"3px", wordSpacing:"6px"}}>Curso de React JS</h1>
            <p className="modo_dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut sed repellat voluptas eveniet repellendus quo, at incidunt voluptatem eaque sunt iusto vel, cupiditate obcaecati enim laborum. Maiores, doloremque saepe?</p>
            <img src={"images/kqX3vl0y.png"} alt={"Hamburguesa"} width={180} />
            <button onClick={() => {saludar()}}>Saludar</button>
        </div>
    )
}

export default Transpiling;
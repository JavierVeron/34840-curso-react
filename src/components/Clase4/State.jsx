import React, { useState } from "react";

const State = () => {
    const [curso, setCurso] = useState("Desarrollo Web");
   
    const modificarCurso = () => {
        setCurso("React JS");
    }

    return (
        <div>
            <h1 onClick={modificarCurso}>Estados/States</h1>
            <p>Curso: <b>{curso}</b></p>
        </div>
    )
}

export default State;
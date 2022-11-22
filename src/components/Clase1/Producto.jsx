import React from "react";

const Producto = () => {
    let imagen = "images/kqX3vl0y.png";
    let titulo = "Big Mac";
    let calorias = "505 kcal";
    let descripcion = "Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.";

    return (
        <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img src={imagen} alt={"BigMac"} width={240} />
            </div>
            <div className="col-md-6">
                <h1>{titulo}</h1>
                <p>{calorias}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Producto;
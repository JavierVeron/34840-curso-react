import React from "react";

const Mapeo = () => {
    /* const user = [
        {id:1, nombre:"Coder"},
        {id:2, nombre:"House"},
        {id:3, nombre:"2022"}
    ];

    console.log(user.map(item => item.nombre));
    console.log(user.map(item => item.nombre).join(" - ")); */

    const productos = [
        {id:1, nombre:"Coca Cola", precio:400, imagen:"https://e1.pngegg.com/pngimages/76/638/png-clipart-recursos-coca-cola-plastic-bottle-thumbnail.png"},
        {id:2, nombre:"Pepsi", precio:380, imagen:"https://e7.pngegg.com/pngimages/125/571/png-clipart-pepsi-pepsi-thumbnail.png"},
        {id:3, nombre:"Cunnington Cola", precio:360, imagen:"https://jumboargentina.vtexassets.com/arquivos/ids/568030-1200-auto?v=637146548117600000&width=1200&height=auto&aspect=true"},
        {id:4, nombre:"Manaos", precio:340, imagen:"https://latinafy.com/images/thumbnails/590/590/detailed/24/1330277599.jpg"},
        {id:5, nombre:"Coca Cola", precio:400, imagen:"https://e1.pngegg.com/pngimages/76/638/png-clipart-recursos-coca-cola-plastic-bottle-thumbnail.png"},
        {id:6, nombre:"Pepsi", precio:380, imagen:"https://e7.pngegg.com/pngimages/125/571/png-clipart-pepsi-pepsi-thumbnail.png"},
        {id:7, nombre:"Cunnington Cola", precio:360, imagen:"https://jumboargentina.vtexassets.com/arquivos/ids/568030-1200-auto?v=637146548117600000&width=1200&height=auto&aspect=true"},
        {id:8, nombre:"Manaos", precio:340, imagen:"https://latinafy.com/images/thumbnails/590/590/detailed/24/1330277599.jpg"},
    ];

    return (
        <div className="row">
            <h1>Map</h1>
                {productos.map(item =>
                    <div className="col-md-3 mb-3" key={item.id}>
                        <div className="card text-center">
                            <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text"><b>${item.precio}</b></p>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Mapeo;
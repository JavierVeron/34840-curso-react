import React, { useState, useEffect } from "react";

const FetchApi = ({buscar, limite}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + buscar + "&limit=" + limite).then((respuesta) => respuesta.json()).then((data) => {
            setItems(data.results);
        })
    }, [buscar, limite]);

    return (
        <div className="row">
            <h1>API de Mercado Libre</h1>
            {
                items.map(item => 
                    <div className="col-md-2 mb-3" key={item.id}>
                        <div className="card text-center">
                            <a href={item.permalink} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                                <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                                <div className="card-body">
                                    <p className="card-text">{item.title}</p>
                                    <p className="card-text"><b>${item.price}</b></p>
                                </div>
                            </a>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default FetchApi;
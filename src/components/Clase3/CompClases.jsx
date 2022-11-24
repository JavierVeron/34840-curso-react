const { Component } = require("react");

class CompClases extends Component {
    render() {
        return (
            <div>
                <h1>Componente basado en Clase</h1>
                <p>Tu nombre es: <b>{this.props.nombre + " " + this.props.apellido}</b></p>    
            </div>
        )
    }
}

export default CompClases;
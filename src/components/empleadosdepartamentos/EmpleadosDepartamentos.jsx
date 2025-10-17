import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class EmpleadosDepartamentos extends Component {
    requestEmpleadoDepartamento = "api/empleados/empleadosdepartamento/";
    cajaDepartamento = React.createRef();
    state = {
        empleados: [],
    };

    buscarEmpleados = event => {
        event.preventDefault();
        let url = Global.urlEmpleados + this.requestEmpleadoDepartamento + this.cajaDepartamento.current.value;
        axios.get(url).then(response => {
            this.setState({
                empleados: response.data,
            });
        });
    };

    render() {
        return (
            <div>
                <h1 style={{ color: "seagreen" }}>Empleados Departamentos API</h1>
                <form onSubmit={this.buscarEmpleados}>
                    <label>Introduzca el ID departamento: </label>
                    <input type="number" ref={this.cajaDepartamento} />
                    <button>Buscar</button>
                </form>
                {this.state.empleados &&
                    this.state.empleados.map((empleado, index) => {
                        return (
                            <ul  key={index}>
                                <li>{empleado.apellido}</li>
                            </ul>
                        );
                    })}
            </div>
        );
    }
}

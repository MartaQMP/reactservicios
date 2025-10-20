import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";

export default class Empleados extends Component {
    state = {
        empleados: [],
        texto: "",
    };

    componentDidUpdate = oldProps => {
        //DIBUJAMOS LAS NUEVAS Y LAS ANTIGUAS
        //console.log("Current: " + this.props.iddepartamento);
        //console.log("Antiguas: " + oldProps.iddepartamento);
        //SOLAMENTE ACTUALIZAMOS STATE SI PROPS HA CAMBIADO
        if (oldProps.iddepartamento !== this.props.iddepartamento) {
            this.cargarEmpleados();
        }
    };

    cargarEmpleados = () => {
        let idDepartamento = this.props.iddepartamento;
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento;
        axios.get(Global.urlEmpleados + request).then(response => {
            this.setState({
                empleados: response.data,
            });
        });
    };

    componentDidMount = () => {
        console.log("Cargandi");
        this.cargarEmpleados();
    };

    render() {
        return (
            <div>
                <h1>Empleados {this.props.iddepartamento}</h1>
                <ul>
                    {this.state.empleados.map((empleado, index) => {
                        return (
                            <li key={index}>
                                {empleado.apellido} - {empleado.oficio}
                            </li>
                        );
                    })}
                </ul>
                <h2>{this.state.texto}</h2>
            </div>
        );
    }
}

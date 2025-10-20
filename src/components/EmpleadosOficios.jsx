import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class EmpleadosOficios extends Component {
    requestEmpleadosOficios = "api/empleados/empleadosoficio/";
    requestEmpleado = "api/empleados";
    cajaOficio = React.createRef();

    state = {
        oficios: [],
        empleados: [],
    };

    buscarEmpleados = event => {
        event.preventDefault();
        let url = Global.urlEmpleados + this.requestEmpleadosOficios + this.cajaOficio.current.value;
        axios.get(url).then(response => {
            this.setState({
                empleados: response.data,
            });
        });
    };

    buscarOficios = () => {
        let aux = [];
        let url = Global.urlEmpleados + this.requestEmpleado;
        axios.get(url).then(response => {
            for (let empleados of response.data) {
                if (!aux.includes(empleados.oficio)) {
                    aux.push(empleados.oficio);
                }
            }
            this.setState({
                oficios: aux,
            });
        });
    };

    componentDidMount = () => {
        this.buscarOficios();
    };

    render() {
        return (
            <div>
                <h1>Empleados Oficios API</h1>
                <form onSubmit={this.buscarEmpleados} style={{marginLeft:"20%"}}>
                    <label>Selecciona el oficio</label>
                    <select ref={this.cajaOficio}>
                        {this.state.oficios.map((oficio, index) => {
                            return <option key={index}>{oficio}</option>;
                        })}
                    </select>
                    <button>Buscar empleado</button>
                </form>
                <hr/>
                {this.state.empleados && (
                    <table style={{ border: "2px solid black", borderCollapse: "collapse", textAlign: "center", width: "40%", margin: "auto" }}>
                        <thead>
                            <tr style={{ backgroundColor: "lightgrey",border: "1px solid black", borderCollapse: "collapse" }}>
                                <th>Apellido</th>
                                <th>Oficio</th>
                                <th>Salario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.empleados.map((empleado, index) => {
                                return (
                                    <tr style={{ border: "1px solid black", borderCollapse: "collapse" }} key={index}>
                                        <td>{empleado.apellido}</td>
                                        <td>{empleado.oficio}</td>
                                        <td>{empleado.salario}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

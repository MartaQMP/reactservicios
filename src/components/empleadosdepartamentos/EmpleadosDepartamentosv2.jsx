import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class EmpleadosDepartamentosv2 extends Component {
    requestEmpleadoDepartamento = "api/empleados/empleadosdepartamento/";
    requestdepartamentos = "webresources/departamentos";
    selectDepartamento = React.createRef();
    state = {
        empleados: [],
        departamentos: [],
    };

    buscarEmpleados = event => {
        event.preventDefault();
        let urlbuscar = Global.urlEmpleados + this.requestEmpleadoDepartamento + this.selectDepartamento.current.value;
        axios.get(urlbuscar).then(response => {
            this.setState({
                empleados: response.data,
            });
        });
    };

    cargarDepartamentos = () => {
        let urlDep = Global.urlDepartamentos + this.requestdepartamentos;
        axios.get(urlDep).then(response => {
            this.setState({
                departamentos: response.data,
            });
        });
    };

    componentDidMount = () => {
        this.cargarDepartamentos();
    };

    render() {
        return (
            <div>
                <h1 style={{ color: "seagreen" }}>Empleados Departamentos API</h1>
                <form  onSubmit={this.buscarEmpleados}>
                    <label>Seleccione departamento: </label>
                    <select ref={this.selectDepartamento}>
                        {this.state.departamentos.map((dep, index) => {
                            return <option key={index} value={dep.numero}>{dep.nombre}</option>;
                        })}
                    </select>
                    <button>Buscar Empleado</button>
                </form>
                {this.state.empleados &&
                    this.state.empleados.map((empleado, index) => {
                        return (
                            <ul key={index}>
                                <li>{empleado.apellido}</li>
                            </ul>
                        );
                    })}
            </div>
        );
    }
}

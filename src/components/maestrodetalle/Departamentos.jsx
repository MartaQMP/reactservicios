import React, { Component } from "react";
import Empleados from "./Empleados";
import axios from "axios";
import Global from "../../Global";

export default class Departamentos extends Component {
    selectDepartamentos = React.createRef();

    state = {
        departamentos: [],
        idDepartamento: 0,
    };

    cargarDepartamentos = () => {
        let request = "webresources/departamentos";
        axios.get(Global.urlDepartamentos + request).then(response => {
            this.setState({
                departamentos: response.data,
            });
        });
    };

    componentDidMount = () => {
        this.cargarDepartamentos();
    };

    buscarEmpleados = event => {
        event.preventDefault();
        let iddepartamento = this.selectDepartamentos.current.value;
        this.setState({
            idDepartamento: iddepartamento,
        });
    };

    render() {
        return (
            <div>
                <h1 style={{ color: "cyan" }}>Departamentos</h1>
                <form onSubmit={this.buscarEmpleados}>
                    <select ref={this.selectDepartamentos}>
                        {this.state.departamentos.map((dep, index) => {
                            return (
                                <option key={index} value={dep.numero}>
                                    {dep.nombre}
                                </option>
                            );
                        })}
                    </select>
                    <button>Buscar empleados</button>
                </form>
                {this.state.idDepartamento !== 0 && <Empleados iddepartamento={this.state.idDepartamento} />}
            </div>
        );
    }
}

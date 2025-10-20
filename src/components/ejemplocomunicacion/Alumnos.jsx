import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";

export default class Alumnos extends Component {
    state = {
        alumnos: [],
    };

    buscarAlumnos = () => {
        let curso = this.props.curso;
        let request = "api/alumnos/filtrarcurso/" + curso;
        axios.get(Global.urlAlumnos + request).then(response => {
            this.setState({
                alumnos: response.data,
            });
        });
    };

    componentDidMount = () => {
        this.buscarAlumnos();
    };

    componentDidUpdate = oldProps => {
        if (oldProps.curso !== this.props.curso) {
            this.buscarAlumnos();
        }
    };

    render() {
        return (
            <div>
                <h2>Alumnos {this.props.curso}</h2>
                <ul>
                    {this.state.alumnos.map((alumno, index) => {
                        return (
                            <li key={index} value={alumno.idAlumno}>
                                {alumno.nombre} {alumno.apellidos}
                                <button
                                    onClick={() => {
                                        this.props.mostrarDetalles(alumno.idAlumno);
                                    }}>
                                    Detalles
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

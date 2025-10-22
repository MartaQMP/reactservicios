import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import Alumnos from "./Alumnos";

export default class Cursos extends Component {
    selectCurso = React.createRef();
    state = {
        cursos: [],
        curso: 0,
        alumno: null,
    };

    cargarAlumnos = event => {
        event.preventDefault();
        let cursoElegido = this.selectCurso.current.value;
        this.setState({
            curso: cursoElegido,
        });
    };

    cargarCursos = () => {
        let request = "api/alumnos/cursos";
        axios.get(Global.urlEjemplos + request).then(response => {
            this.setState({
                cursos: response.data,
            });
        });
    };

    buscarDetallesALumno = idAlumno => {
        console.log(idAlumno)
        let request = "api/alumnos/findalumno/"+idAlumno;
        axios.get(Global.urlEjemplos + request).then(response => {
            this.setState({
                alumno: response.data,
            });
        });
    };

    componentDidMount = () => {
        this.cargarCursos();
    };
    render() {
        return (
            <div>
                <h1>Cursos</h1>
                <form onSubmit={this.cargarAlumnos}>
                    <select ref={this.selectCurso}>
                        {this.state.cursos.map((curso, index) => {
                            return (
                                <option key={index} value={curso}>
                                    {curso}
                                </option>
                            );
                        })}
                    </select>
                    <button>Buscar Alumnos</button>
                </form>
                {this.state.alumno && (
                    <div>
                        <h3>Id: {this.state.alumno.idAlumno}</h3>
                        <h3>
                            Nombre: {this.state.alumno.nombre} {this.state.alumno.apellidos}
                        </h3>
                        <img src={this.state.alumno.imagen} alt="Imagen alumno" style={{ width: "300px" }} />
                    </div>
                )}
                {this.state.curso !== 0 && <Alumnos curso={this.state.curso} mostrarDetalles={this.buscarDetallesALumno} />}
            </div>
        );
    }
}

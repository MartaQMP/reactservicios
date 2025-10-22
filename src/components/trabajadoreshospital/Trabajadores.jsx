import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";

export default class Trabajadores extends Component {
    state = {
        peticion: "",
        trabajadores: [],
    };

    cargarTrabajadores = () => {
        //RECUPERAMOS EL ARRAY DE IDS
        let idhospitales = this.props.idhospitales;
        let data = "";
        for (let id of idhospitales) {
            data += "idhospital=" + id + "&";
        }
        //ELIMINAMOS EL ULTIMO CARACTER DEL STRING
        data = data.substring(0, data.length - 1);
        this.setState({
            peticion: data,
        });
        let request = "api/trabajadores/trabajadoreshospitales?" + data;
        axios.get(Global.urlEjemplos + request).then(response => {
            this.setState({
                trabajadores: response.data,
            });
        });
    };

    componentDidMount = () => {
        this.cargarTrabajadores();
    };

    componentDidUpdate = oldProps => {
        if (oldProps.idhospitales !== this.props.idhospitales) {
            this.cargarTrabajadores();
        }
    };

    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Trabajadores</h1>
                <table style={{textAlign:"center", width:"50%", border:"2px solid black", margin:"auto"}}>
                    <thead>
                        <tr style={{border:"2px solid black"}}>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>Id Hospital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trabajadores.length !== 0 &&
                            this.state.trabajadores.map((trabajador, index) => {
                                return (
                                    <tr style={{border:"1px solid gray"}} key={index}>
                                        <td>{trabajador.apellido}</td>
                                        <td>{trabajador.oficio}</td>
                                        <td>{trabajador.salario}</td>
                                        <td>{trabajador.idHospital}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}

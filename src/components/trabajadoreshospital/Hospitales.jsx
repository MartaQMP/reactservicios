import React, { Component } from "react";
import Trabajadores from "./Trabajadores";
import axios from "axios";
import Global from "../../Global";

export default class Hospitales extends Component {
    selectHospital = React.createRef();
    cajaIncremento = React.createRef();
    state = {
        hospitales: [],
        hospitalesSeleccionados: [],
    };

    cargarHospitales = () => {
        let request = "api/hospitales";
        axios.get(Global.urlEjemplos + request).then(response => {
            this.setState({
                hospitales: response.data,
            });
        });
    };

    componentDidMount = () => {
        this.cargarHospitales();
    };

    getHospitalesSeleccionados = event => {
        event.preventDefault();
        let aux = [];
        let options = this.selectHospital.current.options;
        for (var option of options) {
            if (option.selected === true) {
                aux.push(option.value);
            }
        }
        this.setState({
            hospitalesSeleccionados: aux,
        });
    };

    incrementarSalarios = event => {
        event.preventDefault();
        let data = "";
        for (let id of this.state.hospitalesSeleccionados) {
            data += "idhospital=" + id + "&";
        }
        //ELIMINAMOS EL ULTIMO CARACTER DEL STRING
        data = data.substring(0, data.length - 1);
        let incremento = this.cajaIncremento.current.value;
        let request = "api/trabajadores/updatesalariotrabajadoreshospitales?incremento=" + incremento + "&" + data;
        axios.put(Global.urlEjemplos + request).then(response => {
            console.log("Incrementado");
            //ASI FUERZO LA RECARGA DE TRABAJADORES PQ PIENSA
            //Q HE CAMBIADO LOS HOSPITALES SELECCIONADOS
            this.setState({
                hospitalesSeleccionados: [...this.state.hospitalesSeleccionados],
            });
        });
    };

    render() {
        return (
            <div style={{ padding: "2%" }}>
                <h1>Hospitales</h1>
                <hr />
                <form>
                    <label className="form-label">Hospital:</label>
                    <select ref={this.selectHospital} className="form-control" multiple>
                        {this.state.hospitales.map((hospital, index) => {
                            return (
                                <option value={hospital.idHospital} key={index}>
                                    {hospital.nombre}
                                </option>
                            );
                        })}
                    </select>
                    <br />
                    <button onClick={this.getHospitalesSeleccionados} className="btn btn-info">
                        Mostrar trabajadores
                    </button>
                    <br />
                    <label>Incremento: </label>
                    <input ref={this.cajaIncremento} />
                    <button onClick={this.incrementarSalarios} className="btn btn-primary">
                        Incrementar
                    </button>
                </form>
                <hr />
                {this.state.hospitalesSeleccionados.length !== 0 && <Trabajadores idhospitales={this.state.hospitalesSeleccionados} />}
            </div>
        );
    }
}

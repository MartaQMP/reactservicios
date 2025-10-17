import axios from "axios";
import React, { Component } from "react";
import Global from "../Global";

export default class ServiceApiSupliers extends Component {
    cajaId = React.createRef();
    request = "suppliers";
    state = {
        supliers: [],
        suplier: null,
    };

    cargarSupliers = () => {
        axios.get(Global.urlNorhwind + this.request).then(response => {
            this.setState({
                supliers: response.data.value,
            });
        });
    };

    componentDidMount = () => {
        this.cargarSupliers();
    };

    mostrarSuplier = event => {
        event.preventDefault();
        /*OTRA MANERA*/
        //REALIZANDO LA PETICION DE NUEVO
        /*let id = parseInt(this.cajaId.current.value)
        axios.get(Global.urlNorhwind + this.request).then(response => {
            for ( var suplier of response.data.value){
                if(suplier.SupplierID == id){
                    this.setState({
                        suplier: suplier
                    )}
                }
            }
        })*/
        this.setState({
            suplier: this.state.supliers[parseInt(this.cajaId.current.value) - 1],
        });
    };

    render() {
        return (
            <div>
                <h1>Servicio API Supliers</h1>
                <form onSubmit={this.mostrarSuplier}>
                    <label>ID del supplier: </label>
                    <input type="text" ref={this.cajaId} />
                    <button>Mostrar datos</button>
                    <table>
                        <thead>
                            <tr>
                                {/*LO PUEDO PINTAR UNO A UNO*/}
                                {this.state.suplier &&
                                    Object.keys(this.state.suplier).map((key, index) => (
                                        <th key={index} style={{ textAlign: "center" }}>
                                            {key}
                                        </th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.suplier && (
                                <tr>
                                    {Object.values(this.state.suplier).map((value, index) => (
                                        <td key={index} style={{ textAlign: "center" }}>
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </form>
                <ul>
                    {this.state.supliers.map((suplier, index) => {
                        return (
                            <li key={index}>
                                <b>ID:</b> {suplier.SupplierID} --- <b>ContactName:</b> {suplier.ContactName}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

import axios from "axios";
import React, { Component } from "react";

export default class ServiceApiSupliers extends Component {
    cajaId = React.createRef();

    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";
    state = {
        supliers: [],
        suplier: [],
    };

    cargarSupliers = () => {
        axios.get(this.url).then(response => {
            this.setState({
                supliers: response.data.value,
            });
        });
    };

    componentDidMount = () => {
        this.cargarSupliers();
    };

    mostrarSuplier = () => {
        this.state.supliers.map((suplier, index) => {
            if (index + 1 === parseInt(this.cajaId.current.value)) {
                this.state.suplier.push(suplier);
                this.setState({
                    suplier: this.state.suplier,
                });
                console.log(this.state.suplier);
            }
            return (
                <ul>
                    <li>{this.state.suplier}</li>
                </ul>
            );
        });
    };

    render() {
        return (
            <div>
                <h1>Servicio API Supliers</h1>
                <form>
                    <label>ID del supplier: </label>
                    <input type="text" ref={this.cajaId} />
                    <button onClick={this.mostrarSuplier}>Mostrar datos</button>

                    <ul>
                        {this.state.supliers.map((suplier, index) => {
                            return (
                                <li key={index}>
                                    <b>ID:</b> {suplier.SupplierID} --- <b>ContactName:</b> {suplier.ContactName}
                                </li>
                            );
                        })}
                    </ul>
                </form>
            </div>
        );
    }
}

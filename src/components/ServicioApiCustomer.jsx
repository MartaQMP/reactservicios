import React, { Component } from "react";
import axios from "axios";

export default class ServicioApiCustomer extends Component {
    state = {
        customers: [],
    };
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";
    //CREAMOS UN METODO PARA CARGAR LOS CLIENTES
    loadCustomers = () => {
        console.log("Antes");
        axios.get(this.url).then(response => {
            console.log("Leyendo...");
            //LA INFORMACION VIENE EN response.data
            console.log(response.data);
            this.setState({
                customers: response.data.value,
            });
        });
        console.log("Despues");
    };

    componentDidMount = () => {
        console.log("Creando component");
        this.loadCustomers();
    };

    render() {
        return (
            <div>
                <h1>Servicio API Customer</h1>
                <button>Cargar Customers</button>
                {this.state.customers.map((customer, index) => {
                    return (
                        <h3 key={index} style={{ color: "orange" }}>
                            {customer.ContactName}
                        </h3>
                    );
                })}
            </div>
        );
    }
}

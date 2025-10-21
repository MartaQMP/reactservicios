import React, { Component } from "react";

export default class Collatz extends Component {
    state = {
        numeros: [],
    };

    generarCollatz = () => {
        let numero = parseInt(this.props.numero);
        let aux = [];
        while (numero !== 1) {
            if (numero % 2 === 0) {
                numero /= 2;
            } else {
                numero = numero * 3 + 1;
            }
            aux.push(numero);
        }
        this.setState({
            numeros: aux,
        });
    };

    componentDidMount = () => {
        this.generarCollatz();
    };

    componentDidUpdate = (oldProps) => {
        if(oldProps.numero !== this.props.numero){
            this.generarCollatz()
        }
    }

    render() {
        return (
            <div>
                <h1>Collatz</h1>
                <ul>
                    {this.state.numeros.map((numero, index) => {
                        return <li key={index}>{numero}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

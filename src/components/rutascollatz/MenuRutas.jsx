import React, { Component } from "react";

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/collatz/8">Collatz 8</a></li>
                    <li><a href="/collatz/23">Collatz 23</a></li>
                    <li><a href="/collatz/12">Collatz 12</a></li>
                </ul>
            </div>
        );
    }
}

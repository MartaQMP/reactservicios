import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuRutas extends Component {
    render() {
        return (
            <nav style={{backgroundColor:"black", padding:"20px"}}>
                <NavLink style={{padding:"20px", color:"white", textDecoration:"none"}} to="/">Home</NavLink>
                <NavLink style={{padding:"20px", color:"white", textDecoration:"none"}} to="/collatz/8">Collatz 8</NavLink>
                <NavLink style={{padding:"20px", color:"white", textDecoration:"none"}} to="/collatz/23">Collatz 23</NavLink>
                <NavLink style={{padding:"20px", color:"white", textDecoration:"none"}} to="/collatz/12">Collatz 12</NavLink>
            </nav>
        );
    }
}

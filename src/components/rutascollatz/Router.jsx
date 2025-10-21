import React, { Component } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import Collatz from "./Collatz";
import { useParams, } from "react-router-dom";
import MenuRutas from "./MenuRutas";

export default class Router extends Component {
    render() {
        function CollatzElement() {
            let { numero } = useParams();
            return <Collatz numero={numero} />;
        }

        return (
            <BrowserRouter>
                <MenuRutas/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/collatz/:numero" element={<CollatzElement />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

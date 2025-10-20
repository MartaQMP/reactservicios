import React, { Component } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import TablaMultiplicar from "./TablaMultiplicar";
import { useParams } from "react-router-dom";

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement() {
            //ESTA FUNCION NOS SERVIRA PARA CAPTURAR LOS PARAMETROS
            //RECIBIDOS EN UNA RUTA Y ENVIARLOS CON PROPS A NUESTRO COMPONENT
            //VAMOS A ENVIAR UN PARAMETRO LLAMADO minumero
            let { minumero } = useParams();
            //DEVOLVEMOS EL COMPONENT TABLA MULTIPLICAR CON SUS PROPS
            return <TablaMultiplicar numero={minumero}/>
        }

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />} />
                    {/* PARA INCLUIR LAS RUTAS QUE NO EXISTEN CON PAGINA 404 
                    PERSONALIZADA SE USA EL ASTERISCO Y DEBE SER LA ULTIMA RUTA */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import ServicioApiCustomer from "./components/ServicioApiCustomer";
import ServiceApiSupliers from "./components/ServiceApiSupliers";
import EmpleadosDepartamentos from "./components/empleadosdepartamentos/EmpleadosDepartamentos";
import EmpleadosDepartamentosv2 from "./components/empleadosdepartamentos/EmpleadosDepartamentosv2";
import EmpleadosOficios from "./components/EmpleadosOficios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EmpleadosOficios />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

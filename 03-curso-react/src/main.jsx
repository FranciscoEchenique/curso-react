import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import FirstApp from "./FirstApp.jsx";

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title="Hola, soy Vegeta"/>
    </React.StrictMode>
);

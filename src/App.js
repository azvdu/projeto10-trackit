import  { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./Componentes/SignIn/SignIn.js";
import Register from "./Componentes/Register/Register.js"
import Habitos from "./Componentes/Habitos/index.js";

import "./CSS/reset.css"
import "./CSS/styles.css"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/habitos" element={<Habitos />} />
            </Routes>
        </BrowserRouter>
    )
}
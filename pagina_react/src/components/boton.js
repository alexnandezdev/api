import React from "react";
import B from './image/boton.avif'
import './style/boton.css'
import { Link } from "react-router-dom";

export default function Addb(props) {
    return (
        <div className="">
            <Link to="/formulario">
                <img src={B} className="boton" alt=""/>
            </Link>

        </div>

    )
}

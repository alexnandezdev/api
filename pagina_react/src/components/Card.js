import React from "react";
import "./style/Card.css"

class Card extends React.Component {
    render() {
        const { nombre, descripcion, img, color } = this.props
        return (
            <div className="tarjeta">
                <div className="card" style={{ background: `${color}` }}>
                    <img src={img} className="porta" alt="" />
                    <div className="titulo">
                        <h1 className="letraT">{nombre}</h1>
                        <p className="letraP">{descripcion}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
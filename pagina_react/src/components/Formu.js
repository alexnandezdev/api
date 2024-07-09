import React from "react";
import { Link } from "react-router-dom";

export default class Formu extends React.Component{   
 
    render(){
        const {onChange,form,onSubmit}=this.props
        return(

            <div>
                <form
                onSubmit={onSubmit}
                >
                    <div>
                        <input 
                            type="text" 
                            placeholder="nombre" 
                            name="nombre"
                            onChange={onChange}
                            value={form.nombre}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="descripcion" 
                            name="descripcion"
                            onChange={onChange}
                            value={form.descripcion}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="imagen" 
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="color" 
                            name="color"
                            onChange={onChange}
                            value={form.color}
                        />
                    </div>
                    <button 
                        type="submit"                         
                    >
                    Submit                        
                    </button>
                </form>
            </div>
        )
    }

}
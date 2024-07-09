import React from "react";
//import Card from "../Card";
import Hola from "../Saludo";
import Iteracion from "../Itinerante";
import Addb from "../boton";

export default class Maestro extends React.Component{
 state={
            data:[
        ]
        }
        async componentDidMount(){
            await this.carlos()
        }
        carlos=async()=>{
            let res=await fetch('http://localhost:8000/api/info')
            let data=await res.json()            
            this.setState({
                data

            })
            console.log(data)
        }

    
    render(){
        return(
        <div>
            <Hola
                username="Alexander"
            />
            <Iteracion
                chao={this.state.data}
            />
            <Addb/>
        </div>
        )
    }
}
import React from "react";
import Formu from "../Formu";
import Card from "../Card";

export default class Formulario extends React.Component{
    state={
        form:{
            nombre: '',
            descripcion: '',
            img: '',
            color: ''
        }
    }
    handleChange = e =>{
        this.setState(
            {
                
              form: {
                ...this.state.form,
                [e.target.name]:e.target.value}
            }
        )
    }
    handleSumit=async e =>{
        e.preventDefault()
        try{
            let config={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'content-Type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }
            let res=await fetch('http://localhost:8000/api/info',config)
            let json=await res.json()
            console.log(json)
        }
        catch(error){

        }
    }
    render(){
        return(
            <div>
                 <Formu
                onChange={this.handleChange}
                form={this.state.form}
                onSubmit={this.handleSumit}
                />
                <Card
                {...this.state.form}
                />
                </div>
            )
    }
}
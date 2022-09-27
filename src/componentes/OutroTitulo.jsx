import React, {Component} from "react";

class OutroTitutlo extends Component{
    render(){
        let titulo = "Olá, componente com classe!"
        if(this.props.titulo){
            titulo = this.props.titulo;
        }
        return <h1>{titulo}</h1>

        //const titulo = this.props.titulo ?? "Olá, mundo!";
    }
}

export default OutroTitutlo
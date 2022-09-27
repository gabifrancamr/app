// import do react, não necessário se for a versão 17 ou superior do React.
import React from "react";
import { useState, useEffect } from "react";

function TituloPrincipal(props) {
// ?? usar o props.titulo se houver valor, se não usa o "Olá, mundo"
const [título, setTitulo] = useState(props.titulo ?? "Olá, mundo")

useEffect(() => {console.log("O título mudou!")}, [título])

 function clickCallBack(event){
    alert("Obrigado por clicar em mim!")
 }

 function inputChangeCallBack(event){
    setTitulo(event.target.value);
 }

 return(
    <div>
        <h1 onClick={clickCallBack}>{título}</h1>
        <input
            type="text"
            name="name"
            value={título}
            onChange={inputChangeCallBack}
        />
    </div>
 )
  
 }

//Indica a exportação padrão do arquivo
export default TituloPrincipal;
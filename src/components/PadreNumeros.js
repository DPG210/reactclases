import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumeros extends Component{

    
    state={
        numeros:[2,4,6,10]
    }



    generarNumero=()=>{
        
        this.state.numeros.push(Math.floor((Math.random()*100)+1))

        this.setState({
            numeros:this.state.numeros
        })
    }


    mostrarSuma=(suma)=>{
        return suma;
    }

    render(){
        return(<div>
            <h1>Mis suma es {this.suma}</h1>
            <button onClick={this.generarNumero}>Generar Numeros</button>
            {
                this.state.numeros.map((num,index)=>{
                    return <HijoNumero key={index} number={num}
                    mostrarSuma={this.mostrarSuma}/>
                    
                })
            }
        </div>)
    }
}
export default PadreNumeros;
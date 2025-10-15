import { Component } from "react";
import HijoNumeroProfe from "./HijoNumeroProfe";

class PadreNumeroProfe extends Component{

    state={
        numeros:[5,11],
        suma:0
    }

    sumarNumeros=(numero)=>{
        console.log(numero);

        this.setState({
            suma:this.state.suma+numero
        })
        
    }

    generarNumeros=()=>{
        var aleatorio=parseInt(Math.random()*100)+1;

        this.state.numeros.push(aleatorio);

        this.setState({
            numeros:this.state.numeros
        })
    }


    render(){
        return(<div>
            <h1>Padre numeros</h1>
            <h3>La suma es: {this.state.suma}</h3>
            <button onClick={this.generarNumeros}>Generar numero</button>
            {
                this.state.numeros.map((numero,index)=>{
                    return<HijoNumeroProfe numero={numero} key={index}
                    sumarNumeros={this.sumarNumeros}/>
                })
            }
        </div>)
    }
}
export default PadreNumeroProfe;
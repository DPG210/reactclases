import { Component } from "react";

class HijoNumero extends Component{

    

    sumarNumeros=()=>{

        var numero=parseInt(this.props.number);
        
        var total=0;

        total+=numero;
        this.props.mostrarSuma(total);

        console.log(numero+" "+total)

    }


    render(){
        
        return(<div>
           <h3>Numero: {this.props.number}</h3>
           <button onClick={this.sumarNumeros}>Sumar {this.props.number}</button>
        </div>)
    }
}
export default HijoNumero;
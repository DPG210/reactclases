import { Component } from "react";

class HijoNumeroProfe extends Component{

    seleccionarNumero=()=>{
        var numero=parseInt(this.props.numero);
        this.props.sumarNumeros(numero);
    }

    render(){
        return(<div>
            <h2>{this.props.numero}</h2>
            <button onClick={this.seleccionarNumero}>
                Sumar {this.props.numero}
            </button>
        </div>)
    }
}
export default HijoNumeroProfe
    import { Component } from "react";

//PODEMOS DECLARAR METODOS FUERA DE LA CLASE
//DICHOS METODOS NO PUEDE UTILIZAR NADA DEL COMPONENTE
function metodoAbsurdo(){
    console.log("Metodo sin funcionalidad");
}

class Contador extends Component{

    //LA SINTAXIS DEL CODIGO HTML HA CAMBIADO
    //NO SE UTILIZAN PALABRAS COMO VAR,LET O const
    numero=1;

    incrementarNumero=()=>{
        //PARA ACCEDER A LA VARIABLES DE CLASE, DEBEMOS UTILIZAR LA PALABRA CLAVE THIS
        this.numero+=1;
        console.log("Valor "+this.numero);

    //LAS VARIABLES STATE SON DECLARADAS EN EL OBJETO DE LA CLASE
    
    }
    state={
        valor: parseInt(this.props.inicio)
    }

    incrementarValor=()=>{
        //EN SETSTATE SE MODIFICAN OBJETOS CON SU KEY:VALUE
        this.setState({
            valor:this.state.valor +1
        })
    }
    render(){
        return(<div>
            <h1>Ejemplo contador JSX: {this.props.inicio}</h1>
            {/* LA LLAMADA A LOS METODOS SE REALIZA CON this
            Y NO SE UTILIZA NI LAMBDA NI PARENTESIS */}
            <h3 style={{color:"blue"}}>Valor:{this.state.valor}</h3>
            <button onClick={this.incrementarValor}>Incrementar valor</button>
            <button onClick={(this.incrementarNumero)}>Incremetar numero</button>
            {/* TENEMOS MULTIPLES FORMAS DE REALIZAR LLAMADAS */}
            <button onClick={()=>{
                //CODIGO JSX
                metodoAbsurdo();
                this.incrementarNumero();
            }
        }>Otra sintaxis con funcion anonima</button>
        </div>)
    }
}
export default Contador;
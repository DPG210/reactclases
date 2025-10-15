import { Component } from "react";

class HijoDeporte extends Component {

    
    seleccionarFavoritos=()=>{
        //CAPTURAMOS EL DEPORTE DEL PROPIO COMPONENT EN PROPS
        var deporte=this.props.nombre;
        //REALIZAMOS LA PETICION AL PADRE
        console.log(deporte);
        this.props.mostrarFavorito(deporte);
    }
    

    render(){
        return(<div>
            <h3 style={{color:"blue"}}>Deporte: {this.props.nombre}</h3>
            
            <button onClick={this.seleccionarFavoritos}>Mostrar favorito</button>
        </div>)
    }
}
export default HijoDeporte;
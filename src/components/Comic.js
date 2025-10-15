import { Component } from "react";

class Comic extends Component{

    // mandarFavorito=()=>{

    //     var favorito= this.props.comic;

    //     this.props.seleccionarFavorito(favorito);
    // }

    render(){
        return(<div>
            <h3 style={{color:"blue"}}>
                {this.props.comic.titulo}
            </h3>
            <p>{this.props.comic.descripcion}</p>
            <button onClick={()=>
                //LLAMAMOS AL METODO DEL PADRE COMICS
                this.props.seleccionarFavorito(this.props.comic)
            }>
                Seleccionar favorito
            </button>
            <button onClick={()=>
                //LLAMAMOS AL METODO DEL PADRE COMICS
                this.props.seleccionarFavorito(null)
            }>
                Quitar favorito
            </button>
            <button onClick={()=>
                this.props.deleteComic(this.props.index)
            }>
                Eliminar comic
            </button>
            <img src={this.props.comic.imagen} style={{width:"200px", height:"350px"}}></img>
            
        </div>)
    }
}
export default Comic;
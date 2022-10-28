import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

import { NavLink } from 'react-router-dom';


export default class DetallesJugador extends Component {
    state = {
        detallesJugador: {},
        status: false

    }

    loadDetallesJugadores = () => {

        var request = "api/Jugadores/" + this.props.idjugador;
        var url = Global.urlChampions + request;
       
        axios.get(url).then(response => {
            this.setState({
                detallesJugador: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.loadDetallesJugadores();
    }

  render() {
    return (
      <div>
       < h1>{this.state.detallesJugador.nombre}</h1>
        <br/>
        <img style ={{width :"200px"}} src={this.state.detallesJugador.imagen}/>      
        <br/>
        <h1>{this.state.detallesJugador.posicion}</h1>
        <br/>
        <p>{this.state.detallesJugador.fechaNacimiento}</p>
        <br/>
        <p>{this.state.detallesJugador.pais}</p>
        <br/>
        <NavLink to={"/jugadores/jugadoresequipo/"+ this.state.detallesJugador.idEquipo } className="btn btn-success">Jugadores</NavLink>
        
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from "axios";
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class DetallesEquipo extends Component {

    state = {
        equipo: {},
        status: false
    }
    loadEquipo = () =>{
    
        var id = this.props.idequipo;
        console.log(id)
        var request = "api/Equipos/" + id;
        var url = Global.urlChampions + request;
        console.log(url);
        axios.get(url).then(response =>{
            this.setState({
                equipo: response.data,
                status:true
            });
        });
    }

    componentDidUpdate = (oldProps) =>{
        if(oldProps.idequipo != this.props.idequipo)
        {
            this.loadEquipo();
        }
    }

    componentDidMount = () => {
        this.loadEquipo();
    }
  render() {
    return (
      <div>      
        <h1>{this.state.equipo.nombre}</h1>
        <br/>
        <img style ={{width :"200px"}} src={this.state.equipo.imagen}/>
        <br/>
        <h1>{this.state.equipo.chapions}</h1>
        <br/>
        <p>{this.state.equipo.descripcion}</p>
        <br/>
        <NavLink to={"/jugadores/"} className="btn btn-success">Jugadores</NavLink>
        <NavLink to={"/home"} className="btn btn-info">Volver</NavLink>
      </div>
    )
  }
}

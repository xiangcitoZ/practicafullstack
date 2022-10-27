import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Global from '../Global';
import logo from './../assets/images/champion.jpg'


export default class MenuChampions extends Component {
  state = {
    equipos: [],
    status:false
  }

  loadEquipos = () =>{
    var request = "api/Equipos";
    var url = Global.urlChampions + request;
    axios.get(url).then(response => {
      this.setState({
        equipos: response.data,
        status:true
      });
    });
  }

  componentDidMount = () =>{
    this.loadEquipos();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img style ={{width :"50px"}}src={logo}></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/"><h4>Champions</h4></NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/home">Home</NavLink>
                
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link active" to="/apuesta">Apuesta</NavLink>
                
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Equipos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {
                    this.state.status == true &&
                    this.state.equipos.map((equipo,index)=>{
                      return(<li key={equipo.idEquipo}>
                        <NavLink to={"/equipo/" + equipo.idEquipo} className="dropdown-item">
                          {equipo.nombre}
                        </NavLink>
                      </li>)
                    })
                  }
                </ul>
              </li>
              
            </ul>

          </div>
        </div>
      </nav>
      </div>
    )
                }
            }
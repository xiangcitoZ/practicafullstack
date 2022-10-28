import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

import { NavLink } from 'react-router-dom';

export default class Jugadores extends Component {

    state = {
        jugadores: [],
        status: false

    }

    loadJugadores = () => {
        var id = this.props.idequipo;
        var request = "api/Jugadores/JugadoresEquipo/" + id;
        var url = Global.urlChampions + request;
    
        axios.get(url).then(response => {
            this.setState({
                jugadores: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.loadJugadores();
    }

    render() {
        return (
            <div>
                <h1>Jugadores</h1>
                <table className='table table-bordered table-warning'>
                    <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>IMAGEN</th>
                            <th>DETALLES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.jugadores.map((jugadores, index) => {
                                return (<tr key={jugadores.idJugador}>
                                    <td>{jugadores.nombre}</td>
                                    <td><img src={jugadores.imagen}/></td>
                                    <td>
                                        <NavLink to={"/detallesjugador/"+jugadores.idJugador} className="btn btn-success">Detalles</NavLink>
                                    </td>
                                    
                                    
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

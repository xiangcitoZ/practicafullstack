import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {
  state = {
    apuestas: [],
    status: false

}

loadApuestas = () => {
   
    var request = "api/Apuestas/" ;
    var url = Global.urlChampions + request;

    axios.get(url).then(response => {
        this.setState({
          apuestas: response.data,
            status: true
        });
    });
}

componentDidMount = () => {
    this.loadApuestas();
}


  render() {
    return (
      <div>     
                <NavLink to={"/insertarapuesta/"} 
                className="btn btn-success">Realizar Apuesta</NavLink>
                <h1>Apuestas</h1>

                <table className='table table-bordered table-warning'>
                    <thead>
                        <tr>
                            <th>USUARIO</th>
                            <th>RESULTADO</th>
                            <th>FECHA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.apuestas.map((apuestas, index) => {
                                return (<tr key={apuestas.idApuesta}>
                                    <td>{apuestas.usuario}</td>
                                    <td>{apuestas.resultado}</td>
                                    <td>{apuestas.fecha}</td>               
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
    )
  }
}

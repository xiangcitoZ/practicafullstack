import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class InsertarApuesta extends Component {
    cajaUsuarioRef= React.createRef();
    cajaResultadoRef = React.createRef();
    cajaFechaRef= React.createRef();

    state = {
        mensaje:"",
        status: false
    }

    InsertarApuesta = (e) => {
        e.preventDefault();
        var request = "api/Apuestas/";
        var url = Global.urlChampions+request;
        var usu = parseInt(this.cajaUsuarioRef.current.value);
        var res= this.cajaResultadoRef.current.value;
        var fech = this.cajaFechaRef.current.value;
        //REACT YA PERMITE DECLARAR OBJETOS CON FORMATO JSON
        //DECLARAMOS UN OBJETO CON LAS PROPIEDADES DEL API JSON
        var apuesta = {
            usuario: usu,
            resultado: res,
            fecha: fech
        };
        //EN axios EL METODO POST RECIBE DOS PARAMETROS
        // 1) URL DEL API
        // 2) OBJETO JSON PARA EL API
        axios.post(url,apuesta).then(response =>{
            this.setState({
                status:true,
                mensaje:"Apuesta insetado"
            })
        })

    }

  render() {
    return (
      <div>
        <h1>Nueva apuesta</h1>
        <form style={{width: "500px", margin: "0 auto"}}>
            <label>Usuario: </label>
            <input style={{textAlign:"center"}} type="text" className='form-control'
            ref={this.cajaUsuarioRef} required/><br/>
            <label>Resultado: </label>
            <input style={{textAlign:"center"}} type="text" className='form-control'
            ref={this.cajaResultadoRef} required/><br/>
            <label>Fecha: </label>
            <input style={{textAlign:"center"}} type="text" className='form-control'
            ref={this.cajaFechaRef} required/><br/>

            <button className='btn btn-info' onClick={this.InsertarApuesta}>
                Nueva Apuesta
            </button>
        
        </form>
        <h2 style={{color:"blue"}}>
            {this.state.mensaje}
        </h2>
      </div>
    )
  }
}

import React, { Component } from 'react'
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import DetallesEquipo from './Components/DetallesEquipo'
import MenuChampions from './Components/MenuChampions'
import Home from './Components/Home'
import Jugadores from './Components/Jugadores'
import DetallesJugador from './Components/DetallesJugador'
import Apuestas from './Components/Apuestas'
import InsertarApuesta from './Components/InsertarApuesta'

export default class Router extends Component {
  render() {

    function DetallesEquipoElement(){
      var {idequipo} = useParams();
      
      return(
        <DetallesEquipo idequipo={idequipo} />
      );

    }

    function JugadoresElement(){
      var {idequipo} = useParams();

      return(
        <Jugadores idequipo={idequipo} />
      );
    }

    function DetallesJugadorElement(){
      var {idjugador} = useParams();

      return(
        <DetallesJugador idjugador={idjugador}/>
      );
    }


    return (
      <BrowserRouter>
        <MenuChampions/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/apuestas' element={<Apuestas/>}/>
          <Route path='insertarapuesta' element={<InsertarApuesta/>}/>
          <Route path='/equipo/:idequipo' element={<DetallesEquipoElement/>} />
          <Route path='/jugadores/jugadoresequipo/:idequipo' element={<JugadoresElement/>}/>
          <Route path='/detallesjugador/:idjugador' element={<DetallesJugadorElement/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

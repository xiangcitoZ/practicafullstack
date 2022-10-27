import React, { Component } from 'react'
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import DetallesEquipo from './Components/DetallesEquipo'
import MenuChampions from './Components/MenuChampions'
import Home from './Components/Home'
import Jugadores from './Components/Jugadores'

export default class Router extends Component {
  render() {

    function DetallesEquipoElement(){
      var {idequipo} = useParams();
      console.log(idequipo);
      return(
        <DetallesEquipo idequipo={idequipo} />
      );

    }

    return (
      <BrowserRouter>
        <MenuChampions/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/equipo/:idequipo' element={<DetallesEquipoElement/>} />
          <Route path='/jugadores/' element={<Jugadores/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

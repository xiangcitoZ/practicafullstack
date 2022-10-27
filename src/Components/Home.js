import React, { Component } from 'react'
import foto from './../assets/images/foto.jpg'
export default class Home extends Component {
  render() {
    return (
        <div>
            <img src={foto}/>
        </div>
    )
  }
}

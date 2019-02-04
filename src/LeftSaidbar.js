import React, { Component } from 'react';
import './LeftSaidbar.css';

class LeftSaidbar extends Component {
  render() {
    return (
        <div id="leftSaidbar">
            <p id="leftSaidbar" ><a class="Saidbar" href="https://www.momondo.ua/">Momondo</a></p>
            <p id="leftSaidbar"><a class = "Saidbar" href="http://air.kg/">AIR KYRGYZSTAN</a></p>
            <p id="leftSaidbar"><a class = "Saidbar" href="http://nskaero.ru/kirgizskie-avialinii">Nskaero</a></p>
            <p id="leftSaidbar"><a class = "Saidbar" href="https://airmanas.com/ru/">Airmanas</a></p>
        </div>
    );
  }
}

export  {LeftSaidbar};
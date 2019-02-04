import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div id="header" >
          <a className="menu" href="https://www.pass.rzd.ru/"><p id="header">Ж/Д билеты</p></a>
          <a className ="menu" href="https://www.aviasales.ru/"><p id="header" >Авиа билеты</p></a>
          <a className="menu" href="https://www.booking.com/Hotels/"><p id="header">Отели</p></a>
          <a className="menu" href="https://www.google.com/"><p id="header">О нас</p></a>
          <a className="menu"  href="https://www.google.com/"><p id="header">Главное</p></a>
        </div>
    );
  }
}

export {Header};



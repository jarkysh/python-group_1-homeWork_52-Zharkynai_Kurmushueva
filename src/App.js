import React, {Component} from 'react';
import './App.css';
import './Content.css';
import './Header.css';
import './LeftSaidbar.css';
import './Footer.css';
import {Header} from './Header';
import {Content} from './Content';
import {LeftSaidbar} from './LeftSaidbar';
import {Footer} from './Footer';


class App extends Component {
    render() {
        return (

            <div className="App">
                <div id="header">
                    <Header/>
                </div>
                <div className="cont">
                        <div id="leftsaidbar">
                            <LeftSaidbar/>
                        </div>
                        <div id="content">
                        <Content from="Москва" to="Бишкек" number="45751233" cost="70$" date="02/12/2019"/>
                        <Content from="Стамбул" to="Бишкек" number="84157221" cost="200$" date="05/06/2019"/>
                        <Content from="Астана" to="Бишкек" number="43268108" cost="70$" date="03/10/2019"/>
                        <Content from="Бишкек" to="Ош" number="8332555233" cost="50$" date="15/05/2019"/>
                        </div>
                 </div>
                 <div id="footer"><Footer/>
                    </div>

            </div>
        );
    }
}

export default App;



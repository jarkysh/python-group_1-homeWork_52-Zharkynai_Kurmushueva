import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Content.css';

class Content extends Component {
    render() {
        return React.createElement('article', {},
            React.createElement('h2', {className: 'article'}, `Откуда: ${this.props.from}`),
            React.createElement('h2', {className: 'article'}, `Куда: ${this.props.to}`),
            React.createElement('p', {className: 'article'}, `Номер рейса: ${this.props.number}`),
            React.createElement('p', {className: 'article'}, `Цена: ${this.props.cost}`),
            React.createElement('p', {className: 'article'}, `Дата: ${this.props.date}`),
            React.createElement('button', {className: 'article'}, `Купить билет`),
        );
    }

}

export {Content}
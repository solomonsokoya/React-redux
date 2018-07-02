import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = () =>{
  ReactDOM.render(
    <App
    value = {store.getState()}
    onIncrement = {()=> store.dispatch({type:'INCREMENT'})}
    onDecrement = {()=> store.dispatch({type:'DECREMENT'})}


  />, document.getElementById('root'));
  registerServiceWorker();
};

store.subscribe(render);
render();

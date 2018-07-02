import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = () =>{
  ReactDOM.render(<App value = {store.getState()}/>, document.getElementById('root'));
  registerServiceWorker();
};

store.subscribe(render);
render();

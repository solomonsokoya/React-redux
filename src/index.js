import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const View = (
  <Provider store = {store}>
      <App
        // value = {store.getState()}
        // onIncrement = {()=> store.dispatch({type:'INCREMENT'})}
        // onDecrement = {()=> store.dispatch({type:'DECREMENT'})}
      />
</Provider>
)


  ReactDOM.render( View, document.getElementById('root'));
  registerServiceWorker();

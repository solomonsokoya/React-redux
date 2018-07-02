import React, { Component } from 'react';
import {createStore} from 'redux';
import counter from './reducers';

const store = createStore(counter);
console.log(store.getState())

store.dispatch({type: 'INCREMENT'});
console.log(store.getState())

class App extends Component {
  render() {
    return (
      <div>hi</div>
    );
  }
}

export default App;

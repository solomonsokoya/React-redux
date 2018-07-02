import React, { Component } from 'react';
import store from './store';

console.log(store.getState())

store.dispatch({type: 'INCREMENT'});
console.log(store.getState())

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onClick = {this.props.onIncrement}>+</button>
        <button onClick = {this.props.onDecrement}>-</button>
      </div>
    );
  }
}

export default App;

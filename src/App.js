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
      <div>{this.props.value}</div>
    );
  }
}

export default App;

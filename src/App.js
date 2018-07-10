import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Increment, Decrement} from './reducers'


const mapStateToProps = state => {
  return{state}
}
const mapDispatchToProps = dispatch =>({
  handleIncrement: ()=> dispatch(Increment()),
  handleDecrement: ()=> dispatch(Decrement())
})

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.state}</h1>
        <button onClick = {this.props.handleIncrement}>+</button>
        <button onClick = {this.props.handleDecrement}>-</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

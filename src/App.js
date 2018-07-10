import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return{state}
}
const mapDispatchToProps = dispatch =>({
  handleIncrement: ()=> dispatch({type: 'INCREMENT'}),
  handleDecrement: ()=> dispatch({type:'DECREMENT'})
})

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props)
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

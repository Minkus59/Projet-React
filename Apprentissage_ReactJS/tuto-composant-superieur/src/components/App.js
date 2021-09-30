import React, { Component } from 'react';
import Vegeta from './Vegeta';
import Goku from './Goku';
import Frieza from './Frieza';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      vegeta: 100,
      goku: 100,
      frieza: 100
    }
  }

  reduceLife = (param, param2) => {
    if(param === 'Goku') {
      this.setState({
        frieza: this.state.frieza  -param2
      })
    }
    else if(param === 'Vegeta') {
      this.setState({
        frieza: this.state.frieza  -param2
      })
    }
    else {
      this.setState({
        goku: this.state.goku  -param2,
        vegeta: this.state.vegeta  -param2
      })
    }
  }

  render() {
    return (
      <div className="container text-center">
          <h1>Vegeta VS Goku VS Frieza</h1>
          <hr />

          <div className="row">
            <Vegeta name={() => {return "Vegeta"}} life={this.state.vegeta} reduceHandler={this.reduceLife} />
            <Goku name={() => {return "Goku"}} life={this.state.goku} reduceHandler={this.reduceLife} />  
            <Frieza name={() => {return "Frieza"}} life={this.state.frieza} reduceHandler={this.reduceLife} />  
        </div>      
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Vegeta from './Vegeta';
import Goku from './Goku';
import Frieza from './Frieza';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div className="container text-center">
          <h1>Vegeta VS Goku VS Frieza</h1>
          <hr />

          <div className="row">  
          <ErrorBoundary>           
              <Vegeta name="Vegeta" />  
          </ErrorBoundary> 
          <ErrorBoundary>  
              <Goku name="Goku" />    
          </ErrorBoundary>
          <ErrorBoundary>  
              <Frieza name="Frieza" />  
          </ErrorBoundary>
        </div>      
      </div>
    );
  }
}

export default App;

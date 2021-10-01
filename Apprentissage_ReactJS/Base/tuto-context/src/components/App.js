import React, { Component } from 'react';
import Profile from './Profile';

class App extends Component {

  state = {
    user: {
      name: 'Lisa',
      age: 8
    }
  }

  render() {
    return (
      <Profile/>
    );
  }
}

export default App;

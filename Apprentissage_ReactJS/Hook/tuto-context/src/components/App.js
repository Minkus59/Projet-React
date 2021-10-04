import React, { Component } from 'react';
import Profile from './Profile';
import { UserContext, ColorContext } from './MyContext';

class App extends Component {

  state = {
    user: {
      name: 'Lisa',
      age: 9
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
          <ColorContext.Provider value={"red"}>
              <Profile/>
          </ColorContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
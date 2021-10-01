import '../styles/App.css'
import React, {Component} from 'react'
import MyCars from './MyCars'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <MyCars/>
      </div>
    )
  }
}

export default App
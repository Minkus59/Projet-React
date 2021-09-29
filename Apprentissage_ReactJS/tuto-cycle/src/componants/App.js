import { Component } from 'react';
import '../componants/App';
import LifeCycle from './LifeCycle';

class App extends Component {

  state= {
    display: true
  }

  effacerAfficher = () => {
      this.setState({
        display: !this.state.display 
      })
  }

  render() {
    const showComponent = this.state.display ? (<div><LifeCycle name="Toto2" /></div>) : (<div></div>)

    return (
      
      <div className="App">
        
        {showComponent}

        <button onClick={this.effacerAfficher}>Cliquez ici</button>
      </div>
    );
  }
}

export default App;

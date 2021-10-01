import '../styles/App.css';
import Menu from './Menu';
import Docs from './Docs';
import Community from './Community';
import Tutorials from './Tutorials';
import Profile from './Profile';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ErrorPage from './ErrorPage';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      underConst: {
        Docs: false,
        Tutorials: true,
        Community: false
      }
    }
  }
  render() {
    return (
      <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/" component={Docs} />
            <Route path="/Tutorials" component={Tutorials} />
            <Route path="/Community" component={Community} />
            <Route path="/users/:profileId" component={Profile} />
            <Route component={ErrorPage} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

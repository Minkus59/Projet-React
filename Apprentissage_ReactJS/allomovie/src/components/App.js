import React from 'react';
import '../styles/App.css';
import Menu from './Menu';
import { routes } from './Route';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
    return (
      <BrowserRouter>
          <Menu />
          <Switch>
            {routes.map((route) => (
            <Route key={route.id} exact={route.exact} path={route.path} render={props => <route.component {...props} component={route.component} title={route.title} />}/>
          ))}
          </Switch>
      </BrowserRouter>
    );
}

export default App;

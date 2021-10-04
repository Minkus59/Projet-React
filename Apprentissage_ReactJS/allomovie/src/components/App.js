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
            // map fonksiyonu kullanırken her bir eleman için unique bir key verilmeli
            <Route exact={route.exact} path={route.path}>
            </Route>
          ))}
          </Switch>
      </BrowserRouter>
    );
}

export default App;

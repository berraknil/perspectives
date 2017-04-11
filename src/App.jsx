import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Perspective from './components/Perspective';
import Main from './components/Main';
import About from './components/About';
import './App.css';

const routes = [
  {
    path: '/',
    main: () => <Main />,
    exact: true
  },
  {
    path: '/one',
    main: () => <Perspective type="One Point" />
  },
  {
    path: '/two',
    main: () => <Perspective type="Two Point" />
  },
  {
    path: '/three',
    main: () => <Perspective type="Three Point" />
  },  
  {
    path: '/four',
    main: () => <Perspective type="Four Point" />
  },
  {
    path: '/zero',
    main: () => <Perspective type="Zero Point" />
  },
  {
    path: '/foreshortening',
    main: () => <Perspective type="Foreshortening" />
  },
  {
    path: '/about',
    main: () => <About />
  }
];

const App = () => (
  <Router>
    <div>
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
      <div>
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/">Main</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/one">One</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/two">Two</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/three">Three</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/four">Four</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/zero">Zero</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/foreshortening">
              Foreshortening
            </NavLink>
          </li>
        </ul>
      </div>

    </div>
  </Router>
);

export default App;

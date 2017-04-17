import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import OnePoint from './components/OnePoint';
import TwoPoint from './components/TwoPoint';
import ThreePoint from './components/OnePoint';
import FourPoint from './components/OnePoint';
import ZeroPoint from './components/OnePoint';
import Main from './components/Main';
import About from './components/About';
import './App.css';

const App = () => (
  <Router>
    <main className="main">
      <div className="page">
        <Route exact path="/" component={Main} />
        <Route path="/one" component={OnePoint} />
        <Route path="/two" component={TwoPoint} />
        <Route path="/three" component={ThreePoint} />
        <Route path="/four" component={FourPoint} />
        <Route path="/zero" component={ZeroPoint} />
        <Route path="/about" component={About} />
      </div>
      <div className="navigation">
        <ul>
          <li><NavLink activeClassName="active" exact to="/">Main</NavLink></li>
          <li><NavLink activeClassName="active" to="/one">One Point Perspective</NavLink></li>
          <li><NavLink activeClassName="active" to="/two">Two Point Perspective</NavLink></li>
          <li><NavLink activeClassName="active" to="/three">Three Point Perspective</NavLink></li>
          <li><NavLink activeClassName="active" to="/four">Four Point Perspective</NavLink></li>
          <li><NavLink activeClassName="active" to="/zero">Zero Point Perspective</NavLink></li>
          <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        </ul>
      </div>
      
      <div className="navigation--mobile">
        <ul>
          <li><NavLink activeClassName="active" exact to="/">Main</NavLink></li>
          <li><NavLink activeClassName="active" to="/one">One</NavLink></li>
          <li><NavLink activeClassName="active" to="/two">Two</NavLink></li>
          <li><NavLink activeClassName="active" to="/three">Three</NavLink></li>
          <li><NavLink activeClassName="active" to="/four">Four</NavLink></li>
          <li><NavLink activeClassName="active" to="/zero">Zero</NavLink></li>
          <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        </ul>
      </div>
    </main>
  </Router>
);

export default App;

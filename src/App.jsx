import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import OnePoint from './components/OnePoint';
import TwoPoint from './components/TwoPoint';
import ThreePoint from './components/OnePoint';
import FourPoint from './components/OnePoint';
import ZeroPoint from './components/OnePoint';
import Home from './components/Home';
import About from './components/About';
import './App.css';

const App = () => (
  <Router>
    <main className="main">  
    <nav className="navigation">
        <ul className="navigation__list">
          <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/one">1</NavLink></li>
          <li><NavLink activeClassName="active" to="/two">2</NavLink></li>
          <li><NavLink activeClassName="active" to="/three">3</NavLink></li>
          <li><NavLink activeClassName="active" to="/four">4</NavLink></li>
          <li><NavLink activeClassName="active" to="/zero">0</NavLink></li>
          <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        </ul>
      </nav>
      <div className="page">
        <Route exact path="/" component={Home} />
        <Route path="/one" component={OnePoint} />
        <Route path="/two" component={TwoPoint} />
        <Route path="/three" component={ThreePoint} />
        <Route path="/four" component={FourPoint} />
        <Route path="/zero" component={ZeroPoint} />
        <Route path="/about" component={About} />
      </div>
    
    </main>
  </Router>
);

export default App;

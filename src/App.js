import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Resources from './components/Resources'
import Perspectives from './components/Perspectives'
import './App.css';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/resources">Resources</NavLink></li>
        <li><NavLink activeClassName="active" to="/perspectives">Perspectives</NavLink></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/resources" component={Resources}/>
      <Route path="/perspectives" component={Perspectives}/>
    </div>
  </Router>
)

export default BasicExample
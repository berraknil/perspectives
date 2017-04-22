import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import OnePoint from './components/OnePoint/OnePoint'
import TwoPoint from './components/TwoPoint/TwoPoint'
import ThreePoint from './components/ThreePoint/ThreePoint'
import Home from './components/Home/Home'
import About from './components/About/About'
import './App.css'

const App = () => (
  <Router>
    <main className="main">
      <nav className="navigation">
        <ul className="navigation__list">
          <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/one">One</NavLink></li>
          <li><NavLink activeClassName="active" to="/two">Two</NavLink></li>
          <li><NavLink activeClassName="active" to="/three">Three</NavLink></li>
          <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        </ul>
      </nav>
      <div className="page">
        <Route exact path="/" component={Home} />
        <Route path="/one" component={OnePoint} />
        <Route path="/two" component={TwoPoint} />
        <Route path="/three" component={ThreePoint} />
        <Route path="/about" component={About} />
      </div>

    </main>
  </Router>
)

export default App

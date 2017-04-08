import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Resources from './components/Resources'
import Perspectives from './components/Perspectives'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/perspectives">Perspectives</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Perspectives}/>
      <Route path="/about" component={About}/>
      <Route path="/resources" component={Resources}/>
      <Route path="/perspectives" component={Perspectives}/>
    </div>
  </Router>
)

export default BasicExample
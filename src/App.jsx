import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import OnePoint from './components/OnePoint/OnePoint'
import TwoPoint from './components/TwoPoint/TwoPoint'
import ThreePoint from './components/ThreePoint/ThreePoint'
import Home from './components/Home/Home'
import About from './components/About/About'
import './App.css'

const App = () => (
  <Router>
    <main className="main">
      <Navigation />
      <section className="page">
        <Route exact path="/" component={Home} />
        <Route path="/one" component={OnePoint} />
        <Route path="/two" component={TwoPoint} />
        <Route path="/three" component={ThreePoint} />
        <Route path="/about" component={About} />
      </section>

    </main>
  </Router>
)

export default App

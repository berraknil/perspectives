import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Page from './components/Page/Page'
import './App.css'

const App = () => (
  <Router>
    <main className="app">
      <Navigation />
      <Page />
    </main>
  </Router>
)

export default App

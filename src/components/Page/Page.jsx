import React from 'react'
import { Route } from 'react-router-dom'
import OnePoint from '../OnePoint/OnePoint'
import TwoPoint from '../TwoPoint/TwoPoint'
import ThreePoint from '../ThreePoint/ThreePoint'
import Home from '../Home/Home'
import About from '../About/About'
import './Page.css'

const Page = () => (
  <section className="page">
    <Route exact path="/" component={Home} />
    <Route path="/one" component={OnePoint} />
    <Route path="/two" component={TwoPoint} />
    <Route path="/three" component={ThreePoint} />
    <Route path="/about" component={About} />
  </section>
)

export default Page

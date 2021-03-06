import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list--mobile">
      <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/one">One</NavLink></li>
      <li><NavLink activeClassName="active" to="/two">Two</NavLink></li>
      <li><NavLink activeClassName="active" to="/three">Three</NavLink></li>
      <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
    </ul>
    <ul className="navigation__list">
      <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
      <li>
        <NavLink activeClassName="active" to="/one">
          One-Point Perspective
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/two">
          Two-Point Perspective
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/three">
          Three-Point Perspective
        </NavLink>
      </li>
      <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
    </ul>
  </nav>
)

export default Navigation

import React from 'react'
import './About.css'

const About = () => (
  <div className="about">
    <div className="about__text">
      <h1>About</h1>
      <h4>
        Built with:
        {' '}
        <a
          href="https://facebook.github.io/react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React v15.5
        </a>
        ,
        {' '}
        <a
          href="https://reacttraining.com/react-router/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-Router v4
        </a>
      </h4>
      <h4>
        Text Source:
        {' '}
        <a
          href="https://en.wikipedia.org/wiki/Perspective_(graphical)#Types_of_perspective"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>
      </h4>
      <h4>
        Source Code:
        {' '}
        <a
          href="https://github.com/berraknil/perspectives"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </h4>
      <h4>
        <a
          href="https://berraknil.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </h4>
    </div>
  </div>
)

export default About

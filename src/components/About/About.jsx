import React from 'react'
import './About.css'

const About = () => (
  <div className="about">
    <div className="about__text">
      <h4>
        Built with
        {' '}
        <a
          href="https://facebook.github.io/react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        ,
        {' '}
        <a
          href="https://reacttraining.com/react-router/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-Router
        </a>, <br /> all text is taken from <a
          href="https://en.wikipedia.org/wiki/Perspective_(graphical)#Types_of_perspective"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>, <br />source code is available on <a
          href="https://github.com/berraknil/perspectives"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a> <br /> you can contact me <a
          href="https://berraknil.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
        here
        </a>.
      </h4>
    </div>
  </div>
)

export default About

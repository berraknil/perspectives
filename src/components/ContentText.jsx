import React from 'react'
import PropTypes from 'prop-types'
import './ContentText.css'

const ContentText = ({ children }) => (
  <section className="content__text">
    {children}
  </section>
  )

ContentText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ContentText

import React from 'react'
import PropTypes from 'prop-types'
import './ContentText.css'

const ContentText = ({ children }) => (
  <div className="content__text">
    {children}
  </div>
  )

ContentText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ContentText

import React from 'react'
import PropTypes from 'prop-types'

const ContentImage = ({ children }) => (
  <div className="content__image">
    {children}
  </div>
)

ContentImage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ContentImage

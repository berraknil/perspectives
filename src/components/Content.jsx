import React from 'react'
import PropTypes from 'prop-types'
import './Content.css'

const Content = props => (
  <div className="content">
    {props.children}
  </div>
)

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Content

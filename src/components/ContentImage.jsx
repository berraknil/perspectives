import React from 'react'
import PropTypes from 'prop-types'
import './ContentImage.css'

const ContentImage = props => <img className="content__image" src={props.src} alt={props.alt} />

ContentImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}


export default ContentImage

import React from 'react';
import './ContentImage.css'

const ContentImage = (props) => {
  return (
    <img className="content__image" src={props.src} alt={props.alt} />
  );
};

export default ContentImage;
import React from 'react';
import './ContentText.css'

const ContentText = (props) => {
  return (
    <p className="content__text">
      {props.children}
    </p>
  );
};

export default ContentText;
import React from 'react';
import './ContentText.css'

const ContentText = (props) => {
  return (
    <section className="content__text">
      {props.children}
    </section>
  );
};

export default ContentText;
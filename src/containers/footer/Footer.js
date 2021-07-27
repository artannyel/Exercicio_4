import React from 'react';
import './Footer.css';

const Footer = (props) => {

  const { description } = props;

  return (
    <div className="Footer">
      <span>{description}</span>
    </div>
  );
}

export default Footer;

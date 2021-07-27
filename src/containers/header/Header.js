import React from 'react';
import './Header.css';

const Header = (props) => {

  const { title } = props;

  return (
    <div className="Header">
      <span>{title}</span>
    </div>
  );
}

export default Header;

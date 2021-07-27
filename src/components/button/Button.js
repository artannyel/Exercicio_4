import React from 'react';
import './Button.css';

const Button = (props) => {

  const { callback } = props;

  const click = async () => {
    await callback();
  }

  return (
    <input className="Button" type='button' onClick={click} value="🔎"></input>
  );

}

export default Button;

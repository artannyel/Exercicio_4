import React from 'react';
import './Input.css';

const Input = (props) => {

  const handleChangeValue = async (event) => {
    await props?.callback(event.target.value);
  }

  const { label } = props;

  return (
    <div className="Input">
      <label>{label} </label>
      <input type='text' onChange={handleChangeValue} ></input>
    </div>
  );
}

export default Input;

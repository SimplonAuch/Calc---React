import React from 'react';

const Input = ({label, name, value, action}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input type='number' id={name} name={name} value={value} onChange={action}/>
  </div>
);

export default Input;

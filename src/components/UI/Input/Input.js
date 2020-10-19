import React from 'react';
import './Input.css';

const Input = props => {
  const { elementType, elementConfig, value, changed } = props;
  let inputElement = null;
  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className="FormInputElement"
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
      break;
    case 'textArea':
      inputElement = <textarea {...elementConfig} onChange={changed} />;
      break;
    case 'select':
      inputElement = (
        <select className="FormInputElement" value={value} onChange={changed}>
          {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className="FormInputElement"
          {...elementConfig}
          value={value}
          onChange={changed}
        />
      );
  }
  return (
    <div className="FormInput">
      <label className="FormLabel" />
      {inputElement}
    </div>
  );
};

export default Input;

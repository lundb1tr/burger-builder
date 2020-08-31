import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
  {
    label: 'Salad',
    type: 'salad',
  },
  {
    label: 'Bacon',
    type: 'bacon',
  },
  {
    label: 'Meat',
    type: 'meat',
  },
  {
    label: 'Cheese',
    type: 'cheese',
  },
];

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
}) => {
  return (
    <div className="BuildControls">
      <p>Current Price: {price}</p>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => ingredientAdded(control.type)}
          removed={() => ingredientRemoved(control.type)}
          disabled={disabled[control.type]}
        />
      ))}
    </div>
  );
};

export default BuildControls;

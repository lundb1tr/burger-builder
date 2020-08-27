import React from 'react';
import Aux from '../../../hoc/auxiliary';

const OrderSummary = ({ ingredients }) => {
  const ingredientSummary = Object.keys(ingredients).map(ingredientKey => {
    return (
      <li key={ingredientKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>:{' '}
        {ingredients[ingredientKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default OrderSummary;

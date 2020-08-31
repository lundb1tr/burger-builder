import React from 'react';
import Aux from '../../../hoc/auxiliary';
import Button from '../../UI/Button/Button';

const OrderSummary = ({
  ingredients,
  purchaseCancelled,
  purchaseContinued,
  price,
}) => {
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
      <p>
        <strong>Total Price: </strong>${price.toFixed(2)}
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;

import React from 'react';
import './Order.css';

const Order = ({ ingredients, price, id }) => {
  const transformedIngredients = [];
  for (const ingredientName in ingredients) {
    transformedIngredients.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
      id,
    });
  }

  const ingredientOutput = transformedIngredients.map(
    ({ name, amount, id }) => {
      return (
        <span
          style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px',
          }}
          key={id}
        >
          {name} ({amount})
        </span>
      );
    }
  );
  return (
    <div className="Order">
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD ${price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;

import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients)
    .map(ingredientKey => {
      return [...Array(ingredients[ingredientKey])].map((_, index) => {
        return (
          <BurgerIngredient
            key={`${ingredientKey}${index}`}
            type={ingredientKey}
          />
        );
      });
    })
    .reduce((array, element) => {
      return array.concat(element);
    }, []);
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients.length !== 0 ? (
        transformedIngredients
      ) : (
        <p>Please add ingredients</p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;

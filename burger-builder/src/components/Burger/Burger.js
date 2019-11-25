import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  const transformIngredient = Object.keys(props.ingredient)
    .map(igKey => {
      return [...Array(props.ingredient[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  // reduce call the callback function which take 2 argument
  // the first argument(arr) is take an initcial value if it is provide([]) and (el) take the current value of array
  // if not it will take the first value of array and then (el) will take second value of array
  // (arr) store the priviously of its value
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

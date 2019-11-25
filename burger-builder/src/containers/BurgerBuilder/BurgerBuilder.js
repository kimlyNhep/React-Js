import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    total: 4,
    purchasable: false,
    purchasing: false
  };

  addIngredientHandler = type => {
    const prevCount = this.state.ingredient[type];
    const updateCount = prevCount + 1;
    const updateIngredient = {
      ...this.state.ingredient
    };
    updateIngredient[type] = updateCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const prevPrice = this.state.total;
    const newPrice = prevPrice + priceAddition;
    this.setState({
      ingredient: updateIngredient,
      total: newPrice
    });
    this.updatePurchaseState(updateIngredient);
  };

  removeIngredientHandler = type => {
    const prevCount = this.state.ingredient[type];
    if (prevCount <= 0) return;
    const updateCount = prevCount - 1;
    const updateIngredient = {
      ...this.state.ingredient
    };
    updateIngredient[type] = updateCount;
    const priceDeduction = INGREDIENT_PRICE[type];
    const prevPrice = this.state.total;
    const newPrice = prevPrice - priceDeduction;
    this.setState({
      ingredient: updateIngredient,
      total: newPrice
    });
    this.updatePurchaseState(updateIngredient);
  };

  updatePurchaseState(ingredient) {
    const sum = Object.keys(ingredient)
      .map(igKey => {
        return ingredient[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert('You continue');
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredient
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            price={this.state.total}
            ingredient={this.state.ingredient}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredient={this.state.ingredient} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.total}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

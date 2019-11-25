import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Auxilary';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[OrderSummary.js] componentDidUpdate');
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredient).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span> :
          {this.props.ingredient[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price:{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;

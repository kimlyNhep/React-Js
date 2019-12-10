import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHanler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredient: null,
        total: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: null
    };

    componentDidMount(prevProp, prevState) {
        axios
            .get(
                'https://react-my-burger-4a24e.firebaseio.com/ingredients.json'
            )
            .then(response => {
                console.log(response.data);
                this.setState({ ingredient: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

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
        this.setState({ loading: true });
        // alert('You continue');
        const order = {
            ingredient: this.state.ingredient,
            price: this.state.total,
            customer: {
                name: 'Kimly',
                address: {
                    street: '901',
                    zipCode: '2233',
                    country: 'Cambodia'
                },
                email: 'kimly@gmail.com'
            },
            deliveryMethod: 'fastest'
        };
        axios
            .post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            })
            .catch(error =>
                this.setState({ loading: false, purchasing: false })
            );
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredient
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error ? (
            <p>ingredients can't be loaded!</p>
        ) : (
            <Spinner />
        );

        if (this.state.ingredient) {
            burger = (
                <Aux>
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
            orderSummary = (
                <OrderSummary
                    price={this.state.total}
                    ingredient={this.state.ingredient}
                    purchaseCancel={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                />
            );
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHanler(BurgerBuilder, axios);

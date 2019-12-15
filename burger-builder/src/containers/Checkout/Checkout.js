import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends React.Component {
    state = {
        ingredient: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredient = {};
        for (let param of query.entries()) {
            ingredient[param[0]] = +param[1];
        }
        this.setState({ ingredient: ingredient });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredient={this.state.ingredient}
                    CheckoutCancelled={this.checkoutCancelledHandler}
                    CheckoutContinue={this.checkoutContinuedHandler}
                />
            </div>
        );
    }
}

export default Checkout;

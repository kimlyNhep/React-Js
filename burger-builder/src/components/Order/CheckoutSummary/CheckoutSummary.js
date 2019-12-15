import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classStyle from './CheckoutSummary.css';

const checkoutSummary = props => {
    return (
        <div className={classStyle.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredient={props.ingredient} />
            </div>
            <Button btnType='Danger' clicked={props.CheckoutCancelled}>
                CANCEL
            </Button>
            <Button btnType='Success' clicked={props.CheckoutContinue}>
                CONTINUE
            </Button>
        </div>
    );
};

export default checkoutSummary;

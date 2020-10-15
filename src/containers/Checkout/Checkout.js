import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
    totalPrice: 0,
  };

  componentWillMount() {
    /* Get the search params from the navigation action which brought us here */
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let totalPrice = 0;
    /* Add each ingredient to the ingredients array and the totalPrice to the totalPrice variable */
    for (const param of query.entries()) {
      if (param[0] !== 'totalPrice') {
        ingredients[param[0]] = +param[1];
      } else {
        totalPrice = +param[1];
      }
    }
    /* Set the component state */
    this.setState({ ingredients, totalPrice });
  }

  checkoutCancelledHandler = () => {
    /* Use navigation history to go back */
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    /* Use navigation history to replace the current URL with the one specified */
    this.props.history.replace(`${this.props.match.path}/contact-data`);
  };

  render() {
    return (
      <div>
        {/* Show the checkout summary */}
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        {/* If the route matches then display the contact data component */}
        <Route
          path={`${this.props.match.path}/contact-data`}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;

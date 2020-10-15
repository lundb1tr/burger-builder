import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
    error: false,
  };

  orderHandler = async event => {
    /* Prevent the default actions which is to reload the page */
    event.preventDefault();
    /* Tell our component we are loading */
    this.setState({ loading: true });
    /* Create our order from props and component state */
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: this.state.name,
        address: {
          street: this.state.address.street,
          zipCode: this.state.address.postalCode,
          country: 'United States of America',
        },
        email: this.state.email,
      },
      deliveryMethod: 'fastest',
    };
    /* Post the order to firebase */
    try {
      await axios.post('/orders.json', order);
      this.setState({ loading: false });
      /* If we have a successful post then navigate back to the root page */
      this.props.history.push('/');
    } catch (e) {
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    /* If we're currently posting show the spinner icon, otherwise show the form */
    let form = this.state.loading ? (
      <Spinner />
    ) : (
      <form className="Form">
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="Input"
          type="text"
          name="email"
          placeholder="Your Email"
        />
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Your Street"
        />
        <input
          className="Input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    return (
      <div className="ContactData">
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;

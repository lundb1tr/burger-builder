import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import './ContactData.css';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street',
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Postal Code',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Email',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: 'fastest',
      },
    },
    loading: false,
  };

  orderHandler = async event => {
    /* Prevent the default actions which is to reload the page */
    event.preventDefault();
    /* Tell our component we are loading */
    this.setState({ loading: true });
    /* Create our order from props and component state */
    const formData = {};
    for (const formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData,
    };
    /* Post the order to firebase */
    try {
      await axios.post('/orders.json', order);
      this.setState({ loading: false });
      /* If we have a successful post then navigate back to the root page */
      this.props.history.push('/');
    } catch (e) {
      this.setState({ loading: false });
    }
  };

  inputChangedHandler = ({ target }, inputIdentifier) => {
    console.log(target.value, inputIdentifier);
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
    updatedFormElement.value = target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    const formElementsArray = [];
    for (const key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    /* If we're currently posting show the spinner icon, otherwise show the form */
    const form = this.state.loading ? (
      <Spinner />
    ) : (
      <form onSubmit={this.orderHandler} className="Form">
        {formElementsArray.map(({ config, id }) => (
          <Input
            key={id}
            elementType={config.elementType}
            elementConfig={config.elementConfig}
            value={config.elementConfig.value}
            changed={event => this.inputChangedHandler(event, id)}
          />
        ))}
        <Button btnType="Success">ORDER</Button>
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

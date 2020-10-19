import React, { Component } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  async componentDidMount() {
    try {
      const response = await axios.get('/orders.json');
      const fetchedOrders = [];
      for (const key in response.data) {
        fetchedOrders.push({ ...response.data[key], id: key });
      }
      this.setState({ loading: false, orders: fetchedOrders });
    } catch (e) {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.orders.length > 0
          ? this.state.orders.map(({ ingredients, price, id }) => (
              <Order price={+price} key={id} ingredients={ingredients} />
            ))
          : null}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);

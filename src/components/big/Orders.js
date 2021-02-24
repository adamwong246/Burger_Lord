import React from "react";

import OrdersList from "../small/OrdersList.js";

class Orders extends React.Component {

  render() {
    return (<div>
      <h1>Please complete some orders</h1>
      <OrdersList
        orders={this.props.orders}
        completeOrder={this.props.completeOrder}
        ingredients={this.props.ingredients}
      />
    </div>);
  }
}

export default Orders;

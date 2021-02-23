import React from "react";

class Orders extends React.Component {

  constructor(props) {
    super(props);

  }

  render(props) {
    return (<div>
      <h2>Orders</h2>
      <table>

        <tr>
          <th>#</th>
          <th>sandwiches</th>
          <th>status</th>
        </tr>
        {
          this.props.orders.map((order) => (
            <tr>
              <td>{order.id}</td>
              <td>{order.sandwiches}</td>
              <td>{order.status ? <button onClick={() => this.props.completeOrder(order.id)}> Complete Order</button> : "picked-up"}</td>
            </tr>
          ))
        }
      </table>


    </div>);
  }
}

export default Orders;

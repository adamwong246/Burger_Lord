import React from "react";

import Recipe from "../small/Recipe.js";

class Orders extends React.Component {

  constructor(props) {
    super(props);
  }

  sandwichNamesOfOrder(order) {
    return (
      <ul>
        {
          order.sandwiches.map((sandwich) => {
            return (<li>{sandwich.name}</li>)
          })
        }
      </ul>
    )
  }

  render() {
    return (<div>
      <h1>Please complete some orders</h1>

      <table>

        <tr>
          <th>#</th>
          <th>sandwiches</th>
          <th>cost</th>
          <th>status</th>
        </tr>
        {
          Object.keys(this.props.orders).map((orderKey) => {
            const order = this.props.orders[orderKey];
            return (<tr>
              <td>{orderKey}</td>

              <td>
                <ul>
                  {
                    order.sandwiches.map((sandwich) => {
                      return (<Recipe
                        sandwich={sandwich}
                        ingredients={this.props.ingredients}
                      />);
                    })
                  }
                </ul>
              </td>

              <td>${
                order.grandTotal
              }</td>
              <td>{
                order.status === "open" ? <button onClick={() => this.props.completeOrder(orderKey)}> Complete Order {orderKey}</button> : "picked-up"}
              </td>

            </tr>)
          })
        }
      </table>


    </div>);
  }
}

export default Orders;
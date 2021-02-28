import React from "react";

import Recipe from "./Recipe.js";

class OrdersList extends React.Component {
  render() {
    return (<div>

      {
        !Object.keys(this.props.orders).length ? <p>You've got no orders</p> : <table>

          <tr>
            <th>#</th>
            <th>sandwiches</th>
            <th>cost</th>
            <th>status</th>
          </tr>
          {
            Object.keys(this.props.orders || {}).map((orderKey) => {
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
                  order.status === "open"
                    ?
                    <button onClick={() => this.props.completeOrder(orderKey)}> Complete Order {orderKey}</button>
                    :
                    "picked-up"}
                </td>

              </tr>)
            })
          }
        </table>
      }
    </div>);
  }
}

export default OrdersList;

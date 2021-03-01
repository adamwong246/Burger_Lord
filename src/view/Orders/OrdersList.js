import React from "react";
import Button from '@material-ui/core/Button';

import Recipe from "./Recipe.js";

class OrdersList extends React.Component {
  render() {
    return (<div>

      <h1>Please complete some orders</h1>

      {
        !Object.keys(this.props.orders).length ? <p>You've got no orders</p> : <table>

          <tr>

            <th>sandwiches</th>
            <th>status</th>
          </tr>
          {
            Object.keys(this.props.orders || {}).map((orderKey) => {
              const order = this.props.orders[orderKey];
              return (<tr>


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

                <td>{
                  order.status === "open"
                    ?
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.props.completeOrder(orderKey)}
                    > Complete Order #{orderKey} for ${order.grandTotal}</Button>
                    :
                    `#${orderKey} was picked-up for $${order.grandTotal}`}
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

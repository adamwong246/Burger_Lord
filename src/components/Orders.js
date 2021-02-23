import React from "react";

import Recipe from "./Recipe.js";

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


  computedPrice(order, allSandwiches) {

    const orderSandwicheIds = order.sandwiches

    return orderSandwicheIds.reduce((mm, orderSandwicheId) => {
      return mm + allSandwiches.filter((propsSandwich) => propsSandwich.id === orderSandwicheId)[0].cost
    }, 0)
  }

  render(props) {
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
          this.props.orders.map((order) => (
            <tr>
              <td>{order.id}</td>

              <td>
                {/* {this.sandwichNamesOfOrder(order)} */}

                {
                  order.sandwiches.map((sandwich) => {
                    return (<Recipe
                      sandwhich={sandwich}
                      ingredients={this.props.ingredients}
                    />);
                  })
                }

                
                

              </td>

              <td>${
                order.grandTotal
                }</td>
              <td>{
                order.status ? <button onClick={() => this.props.completeOrder(order.id)}> Complete Order</button> : "picked-up"}
              </td>
            
            </tr>
          ))
        }
      </table>


    </div>);
  }
}

export default Orders;

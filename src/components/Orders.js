import React from "react";

class Orders extends React.Component {

  constructor(props) {
    super(props);

  }

  sandwichNamesOfOrder(order, allSandwiches){

    const orderSandwicheIds = order.sandwiches

    return orderSandwicheIds.map((orderSandwicheId) => {
      return allSandwiches.filter((propsSandwich) =>  propsSandwich.id === orderSandwicheId)[0].name
    }).map((name) => {
      return (<li>{name}</li>)
    })
  }


  computedPrice(order, allSandwiches){

    const orderSandwicheIds = order.sandwiches

    return orderSandwicheIds.reduce((mm, orderSandwicheId) => {
      return mm + allSandwiches.filter((propsSandwich) =>  propsSandwich.id === orderSandwicheId)[0].cost
    }, 0)
  }

  render(props) {
    return (<div>
      <h1>Please complete some orders</h1>

      <table>

        <tr>
          <th>#</th>
          <th>sandwiches</th>
          <th>status</th>
          <th>cost</th>
        </tr>
        {
          this.props.orders.map((order) => (
            <tr>
              <td>{order.id}</td>
              <td>
                <ul>

                  {this.sandwichNamesOfOrder(order, this.props.sandwiches)}

                </ul>
                
              </td>
              <td>${
                this.computedPrice(order, this.props.sandwiches)
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

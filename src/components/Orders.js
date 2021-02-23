import React from "react";

class Orders extends React.Component {

  constructor(props) {
    super(props);

  }

  sandwichNamesOfOrder(order, allSandwiches){

    const orderSandwicheIdss = order.sandwiches

    return orderSandwicheIdss.map((orderSandwicheId) => {
      return allSandwiches.filter((propsSandwich) =>  propsSandwich.id === orderSandwicheId)[0].name
    }).map((name) => {
      return (<li>{name}</li>)
    })

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
              <td>
                <ul>

                  {this.sandwichNamesOfOrder(order, this.props.sandwiches)}

                </ul>
                
              </td>
              <td>{order.status ? <button onClick={() => this.props.completeOrder(order.id)}> Complete Order</button> : "picked-up"}</td>
            </tr>
          ))
        }
      </table>


    </div>);
  }
}

export default Orders;

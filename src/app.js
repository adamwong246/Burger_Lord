import * as React from 'react';
import { connect } from "react-redux";

import NewOrder from "./components/NewOrder.js";
import Orders from "./components/Orders.js";

class App extends React.Component {

  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.props.orders, null, 2)}</pre> */}
        <NewOrder
          sandwiches={this.props.sandwiches}
          ingredients={this.props.ingredients}
          newOrder={this.props.dispatchNewOrder}
        />
        <Orders 
          orders={this.props.orders}
          completeOrder={this.props.dispatchCompleteOrder}
        />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);

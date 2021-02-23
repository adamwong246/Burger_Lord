import * as React from 'react';
import { connect } from "react-redux";

import NewOrder from "./components/NewOrder.js";
import Orders from "./components/Orders.js";

class App extends React.Component {

  render(props) {

    return (
      <div>
        <NewOrder
          sandwiches={this.props.sandwiches}
          ingredients={this.props.ingredients}
          dispatcher={(order) => props.dispatch({ type: "NEW_ORDER", payload: order })}
        />
        <Orders orders={this.props.orders} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);

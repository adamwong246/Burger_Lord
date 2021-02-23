import * as React from 'react';
import { connect } from "react-redux";

import NewOrder from "./NewOrder.js";
import Orders from "./Orders.js";

class App extends React.Component {

  render(props) {

    return (
      <div>
        <pre>{ JSON.stringify(this.props, null, 2) }</pre>
        <h1>Hello Deliverr Challenge</h1>
        <NewOrder
          sandwiches={this.props.sandwiches}
          ingredients={this.props.ingredients}
          dispatcher={(order) => props.dispatch({type: "NEW_ORDER", payload: order})}
        />
        <Orders orders={this.props.orders}/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);

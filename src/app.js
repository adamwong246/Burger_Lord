import * as React from 'react';
import { connect } from "react-redux";

import NewOrder from "./NewOrder.js";
import Orders from "./Orders.js";

class App extends React.Component {

  render() {

    return (
      <div>
        <h1>Hello Deliverr Challenge</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={() => this.props.dispatcher({
          type: 'INCREMENT'
        })} >increase counter</button>
        <NewOrder />
        <Orders />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);

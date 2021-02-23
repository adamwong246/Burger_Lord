import * as React from 'react';
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NewOrder from "./components/NewOrder.js";
import Orders from "./components/Orders.js";

function App(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders/new">New order</Link>
            </li>
            <li>
              <Link to="/orders">Orders index</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/orders/new">
          <NewOrder
            sandwiches={props.sandwiches}
            ingredients={props.ingredients}
            newOrder={props.dispatchNewOrder}
          />
          </Route>
          <Route path="/orders">
          <Orders
            orders={props.orders}
            completeOrder={props.dispatchCompleteOrder}
          />

          </Route>
          <Route path="/">
            <div>
              <h1>hello deliverr challenge</h1>
              <h2>aka sandwich shop</h2>
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);

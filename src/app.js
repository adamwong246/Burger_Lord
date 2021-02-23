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
              <Link to="/orders/new">Order a Sandwich!</Link>
            </li>
            <li>
              <Link to="/orders">View and complete orders!</Link>
            </li>
            <li>
              <Link to="/sandwiches">Sandwiches?</Link>
            </li>
            <li>
              <Link to="/ingredients">Ingredients?</Link>
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
              sandwiches={props.sandwiches}
              completeOrder={props.dispatchCompleteOrder}
            />
          </Route>

          <Route path="/sandwiches">
            <div>
              <pre>{JSON.stringify(props.sandwiches, null, 2)}</pre>
            </div>
          </Route>

          <Route path="/ingredients">
            <div>
              <pre>{JSON.stringify(props.ingredients, null, 2)}</pre>
            </div>
          </Route>

          <Route path="/">
            <div>
              <h1>hello deliverr challenge</h1>
              <h2>aka sandwich shop</h2>
            </div>
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);

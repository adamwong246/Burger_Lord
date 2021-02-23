import * as React from 'react';
import { connect } from "react-redux";
import {
  HashRouter as Router,
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
              <Link to="/utils/sandwiches">Sandwiches?</Link>
            </li>
            <li>
              <Link to="/utils/ingredients">Ingredients?</Link>
            </li>
            <li>
              <Link to="/utils/orders">Orders?</Link>
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

          <Route path="/utils/sandwiches">
            <div>
              <h1>sandwiches</h1>
              <pre>{JSON.stringify(props.sandwiches, null, 2)}</pre>
            </div>
          </Route>

          <Route path="/utils/ingredients">
            <div>
              <h1>ingredients</h1>
              <pre>{JSON.stringify(props.ingredients, null, 2)}</pre>
            </div>
          </Route>

          <Route path="/utils/orders">
            <div>
              <h1>orders</h1>
              <pre>{JSON.stringify(props.orders, null, 2)}</pre>
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

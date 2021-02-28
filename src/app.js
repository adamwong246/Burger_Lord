import * as React from 'react';
import { connect } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'normalize.css';

import NewOrder from "./components/big/NewOrder.js";
import Orders from "./components/big/Orders.js";

import './style.scss';

function App(props) {

  return (
    <Router>
      <div id="app">
        
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/orders/new">Order some Sandwiches!</Link>
              </li>
              <li>
                <Link to="/orders">View and complete orders!</Link>
              </li>
              <li>
                <Link to="/utils/ingredients">Ingredients?</Link>
              </li>
              <li>
                <Link to="/utils/orders">Orders?</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/orders/new">
              <NewOrder
                sandwiches={props.sandwiches}
                ingredients={props.ingredients}
                newOrder={(sandwiches) => {
                  props.dispatchNewOrder(sandwiches, () => {
                    alert("Your order was submitted")                    
                  })
                }}
              />
            </Route>
            <Route path="/orders">
              <Orders
                orders={props.orders}
                sandwiches={props.sandwiches}
                ingredients={props.ingredients}
                completeOrder={props.dispatchCompleteOrder}
              />
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
                <h1>Welcome to BURGER LORD</h1>
                <h2>"Have it _your_ way!" (tm)</h2>
              </div>
            </Route>
          </Switch>
        </main>

      </div>
    </Router >
  );
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(App);

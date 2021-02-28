import * as React from 'react';
import { connect } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'normalize.css';

import NewOrder from "./components/NewOrder/Index.js";
import Orders from "./components/Orders/Index.js";

import {NewOrderSelector, OrdersSelector} from "./selector.js";

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
                {
                  ...NewOrderSelector(props)
                }
                // newOrder={NewOrderSelector(props)}
                // addSandwich={props.dispatchAddSandwich}
                // changeStagedSandwich={props.dispatchStagedSandwichNameChange}
                // gratuity={props.gratuity}
                // ingredients={props.ingredients}
                // onChangeGratuity={(event) => props.dispatchChangeGratuity(parseInt(event.target.value))}
                // onChangeSandwichName={props.dispatchChangeSandwichName}
                // placeOrder={props.dispatchPlaceOrder}
                // popIngredient={props.dispatchPopIngredient}
                // pushIngredient={props.dispatchPushIngredient}
                // removeSandwich={props.dispatchRemoveSandwich}
                // sandwiches={props.sandwiches}
                // selectIngredientToPush={props.dispatchSelectIngredientToPush}
                // stagedSandwich={props.stagedSandwich}

                // newOrder={(sandwiches) => {
                //   props.dispatchNewOrder(sandwiches, () => {
                //     alert("Your order was submitted")                    
                //   })
                // }}

              />
            </Route>
            <Route path="/orders">
              <Orders
                {
                  ...OrdersSelector(props)
                }
                // orders={props.orders}
                // sandwiches={props.sandwiches}
                // ingredients={props.ingredients}
                // completeOrder={props.dispatchCompleteOrder}
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
                <p> Here at BURGER LORD, we believe the customer is always right. That's why you can order a sandwich with ANY ingredients (provided we have them in stock). You can make a boring White bread + Peanut Butter + Jelly + White Bread Sandwich, or you could have 99 slices of cheese on top of a pile of Ham Salad. "Have it _your_ way!" (tm)</p>

                <p>We also believe there's a right way and wrong way to make a sandwich. Our competitors like to take the easy way and make their sandiches from the bottom up. That's why at BURGER LORD, we build our sandwiches the RIGHT way- from the top down. </p>
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

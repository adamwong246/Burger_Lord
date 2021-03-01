import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'normalize.css';

import NewOrder from "./components/NewOrder/Index.js";
import Orders from "./components/Orders/Index.js";
import Navigation from "./components/Navigation.js";

import storeCreator from "./state/store.js";
import initialState from "./state/initialState.js";

import { NewOrderSelector, OrdersSelector } from "./state/selectors.js";



import './style.scss';

const store = storeCreator(initialState);

document.addEventListener('DOMContentLoaded', (event) => {

  const wrapper = document.getElementById("root");

  store.subscribe(() => {
    const storeState = store.getState();
    wrapper
      ? ReactDOM.render(
        <Router>
          <div id="app">
            <Navigation />

            <main>
              <Switch>
                <Route path="/orders/new">
                  <NewOrder
                    {
                    ...NewOrderSelector(storeState)
                    }
                    addSandwich={(sandwichName) => store.dispatch({ type: "ADD_SANDWICH", payload: sandwichName })}
                    changeStagedSandwich={(sandwichName) => store.dispatch({ type: "CHANGE_STAGED_SANDWICH_NAME", payload: sandwichName })}
                    newOrder={(sandwiches) => store.dispatch({ type: "NEW_ORDER", payload: sandwiches })}
                    onChangeGratuity={(gratuity) => store.dispatch({ type: "CHANGE_GRATUITY", payload: gratuity })}
                    onChangeSandwichName={(index, sandwichName) => store.dispatch({ type: "CHANGE_SANDWICH_NAME", payload: { index, sandwichName } })}
                    placeOrder={(grandTotal) => store.dispatch({ type: "NEW_ORDER", payload: grandTotal })}
                    popIngredient={(name) => store.dispatch({ type: "POP_INGREDIENT", payload: name })}
                    pushIngredient={(name) => store.dispatch({ type: "PUSH_INGREDIENT", payload: name })}
                    removeSandwich={(ndx) => store.dispatch({ type: "REMOVE_SANDWICH", payload: ndx })}
                    selectIngredientToPush={(sandwichName, ingredientId) => store.dispatch({ type: "SELECT_INGREDIENT_TO_PUSH", payload: { sandwichName, ingredientId } })}
                  />
                </Route>
                <Route path="/orders">
                  <Orders
                    {
                    ...OrdersSelector(storeState)
                    }
                    completeOrder={(orderId) => store.dispatch({ type: "COMPLETE_ORDER", payload: orderId })}
                  />
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
        </Router >, wrapper)
      : false;
  })
  store.dispatch({ type: "INITIALIZE" })

})


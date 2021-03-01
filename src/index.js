// index.js
// Adam Wong 2020
// 
// This is the root of the application. It handles
// - the binding of the react app to the dom
// - the routing
// - the landing page
// - connecting the top-level view components to their selector-ed props and redux actions

import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router, // hashrouter is easier but looks weird.
  Switch,
  Route
} from "react-router-dom";

// Make CSS sane across browsers
import 'normalize.css';

import NewOrder from "./view/NewOrder/Index.js";
import Orders from "./view/Orders/Index.js";
import Navigation from "./view/Navigation.js";

import storeCreator from "./state/store.js";
import initialState from "./state/initialState.js";
import {
  ADD_SANDWICH,
  CHANGE_GRATUITY,
  CHANGE_SANDWICH_NAME,
  CHANGE_STAGED_SANDWICH_NAME,
  NEW_ORDER,
  POP_INGREDIENT,
  PUSH_INGREDIENT,
  REMOVE_SANDWICH,
  SELECT_INGREDIENT_TO_PUSH,
} from "./state/Actions.js";

import { NewOrderSelector, OrdersSelector } from "./state/selectors.js";

// Add our own styling. We could use modules but it's not necessary.
import './style.scss';

// create the redux store
const store = storeCreator(initialState);

// when the page is ready...
document.addEventListener('DOMContentLoaded', (event) => {

  // we will insert the react app into the element of ID 'root'
  const wrapper = document.getElementById("root");

  // whenever the store changes...
  store.subscribe(() => {

    // get the updated state of the app
    const storeState = store.getState();

    // insert the React app into the DOM
    wrapper
      ? ReactDOM.render(
        <Router>
          <div id="app">

            {/* The navigation bar at the top of the page */}
            <Navigation />

            <main>

              {/* Our app only has 3 routes */}
              <Switch>

                <Route path="/orders/new">

                  {/*
                    The page from where a user places an order.
                    We pass in props combining the output of a selector of the curent state and the dispatchers
                  */}
                  <NewOrder
                    {
                      // All the props, nicely memoized and easily tested
                    ...NewOrderSelector(storeState)
                    }
                    
                    // All the dispatcher's hooks to trigger on button presses, form submission, etc
                    addSandwich={(sandwichName) => store.dispatch({ type: ADD_SANDWICH, payload: sandwichName })}
                    changeStagedSandwich={(sandwichName) => store.dispatch({ type: CHANGE_STAGED_SANDWICH_NAME, payload: sandwichName })}
                    newOrder={(sandwiches) => store.dispatch({ type: NEW_ORDER, payload: sandwiches })}
                    onChangeGratuity={(gratuity) => store.dispatch({ type: CHANGE_GRATUITY, payload: gratuity })}
                    onChangeSandwichName={(index, sandwichName) => store.dispatch({ type: CHANGE_SANDWICH_NAME, payload: { index, sandwichName } })}
                    placeOrder={(grandTotal) => store.dispatch({ type: NEW_ORDER, payload: grandTotal })}
                    popIngredient={(name) => store.dispatch({ type: POP_INGREDIENT, payload: name })}
                    pushIngredient={(name) => store.dispatch({ type: PUSH_INGREDIENT, payload: name })}
                    removeSandwich={(ndx) => store.dispatch({ type: REMOVE_SANDWICH, payload: ndx })}
                    selectIngredientToPush={(sandwichName, ingredientId) => store.dispatch({ type: SELECT_INGREDIENT_TO_PUSH, payload: { sandwichName, ingredientId } })}
                  />
                </Route>

                <Route path="/orders">
                  {/* 
                    The page from where an admin completes an order.
                    Do the same thing with the admin Order page- Combining the output of the selector with any dispatch hooks
                  */}
                  <Orders
                    {
                    ...OrdersSelector(storeState)
                    }
                    completeOrder={(orderId) => store.dispatch({ type: "COMPLETE_ORDER", payload: orderId })}
                  />
                </Route>

                {/* The landing page */}
                <Route path="/">
                  <div>
                    <h1>Welcome to BURGER LORD</h1>
                    <p> Here at BURGER LORD, we believe the customer is always right. That's why you can order a sandwich with ANY ingredients (provided we have them in stock). You can make a boring White bread + Peanut Butter + Jelly + White Bread Sandwich, or you could have 99 slices of cheese on top of a pile of Ham Salad. "Have it _your_ way!" (tm)</p>
                  </div>
                </Route>
              </Switch>
            </main>

          </div>
        </Router >, wrapper)
      : false;
  })

  // Dispatch something to trigger the initial render. The subscriber will listen for future changes. 
  store.dispatch({ type: "INITIALIZE" })

})


// index.js
// Adam Wong 2020
// 
// This is the root of the application. It handles
// - the binding of the react app to the dom
// - the routing
// - the landing page
// - re-rendering on state change

import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router, // hashrouter is easier but looks weird.
  Switch,
  Route
} from "react-router-dom";

// Make CSS sane across browsers
import 'normalize.css';

import newOrder from "./components/newOrder/component.js";
import orders from "./components/orders/component.js";
import storeCreator from "./state/store.js";
import initialState from "./state/initialState.js";
import Navigation from "./view/Navigation.js";

// Add our own styling. We could use modules but it's not necessary.
import './style.scss';

// create the redux store
const store = storeCreator(initialState);

// We wrap these top level component in a function so we can attach the store.dispatch callback
const NewOrder = newOrder(store.dispatch)
const Orders = orders(store.dispatch)

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

                {/*The page from where a user places an order.*/}
                <Route path="/orders/new">
                  <NewOrder storeState={storeState} />
                </Route>

                {/* The page from where an admin completes an order.*/}
                <Route path="/orders">
                  <Orders storeState={storeState} />
                </Route>

                {/* The landing page */}
                <Route path="/">
                  <>
                    <p> Here at BURGER LORD, we believe the customer is always right. That's why you can order a sandwich with ANY ingredients (provided we have them in stock). You can make a boring White bread + Peanut Butter + Jelly + White Bread Sandwich, or you could have 99 slices of cheese on top of a pile of Ham Salad. "Have it _your_ way!" (tm)</p>

                    <h2>Things I did not have the time/energy to complete</h2>
                    <ul>
                      <li>Eggegrious use of tables should be replaced with css grid</li>
                      <li>.jsx files are not yet supported</li>
                      <li>TS is not yet supported</li>
                      <li>MORE TESTS</li>
                    </ul>
                  </>
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


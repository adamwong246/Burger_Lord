import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from "./app.js";

import store from "./redux/store.js";

document.addEventListener('DOMContentLoaded', (event) => {

  const wrapper = document.getElementById("root");
  wrapper
    ? ReactDOM.render(<Provider store={store}>
      <App
        dispatchAddSandwich={(sandwichName) => store.dispatch({ type: "ADD_SANDWICH", payload: sandwichName })}
        dispatchChangeGratuity={(gratuity) => store.dispatch({ type: "CHANGE_GRATUITY", payload: gratuity })}
        dispatchChangeSandwichName={(index, sandwichName) => store.dispatch({ type: "CHANGE_SANDWICH_NAME", payload: {index, sandwichName} })}
        dispatchCompleteOrder={(orderId) => store.dispatch({ type: "COMPLETE_ORDER", payload: orderId })}
        dispatchPopIngredient={(name) => store.dispatch({ type: "POP_INGREDIENT", payload: name })}
        dispatchPushIngredient={(name) => store.dispatch({ type: "PUSH_INGREDIENT", payload: name })}
        dispatchRemoveSandwich={(ndx) => store.dispatch({ type: "REMOVE_SANDWICH", payload: ndx })}
        dispatchSelectIngredientToPush={(sandwichName, ingredientId) => store.dispatch({ type: "SELECT_INGREDIENT_TO_PUSH", payload: {sandwichName, ingredientId} })}
        dispatchStagedSandwichNameChange={(sandwichName) => store.dispatch({ type: "CHANGE_STAGED_SANDWICH_NAME", payload: sandwichName })}
        dispatchPlaceOrder={(grandTotal) => store.dispatch({ type: "NEW_ORDER", payload: grandTotal })}

        dispatchNewOrder={(sandwiches, callback) => {
          store.dispatch({ type: "NEW_ORDER", payload: sandwiches })
          callback()
        }}
      />
    </Provider >, wrapper)
    : false;
})


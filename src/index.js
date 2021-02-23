import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from "./app.js";
import store from "./store.js";

document.addEventListener('DOMContentLoaded', (event) => {
  const wrapper = document.getElementById("root");
  wrapper
    ? ReactDOM.render(<Provider store={store}>
      <App
        dispatchNewOrder={(sandwiches) => store.dispatch({ type: "NEW_ORDER", payload: sandwiches })}
        dispatchCompleteOrder={(orderId) => store.dispatch({ type: "COMPLETE_ORDER", payload: orderId })}
      />
    </Provider >, wrapper)
    : false;
})


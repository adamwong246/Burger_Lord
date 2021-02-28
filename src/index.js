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
        dispatchNewOrder={(sandwiches, callback) => {
          store.dispatch({ type: "NEW_ORDER", payload: sandwiches })
          callback()
        }}
        dispatchCompleteOrder={(orderId) => store.dispatch({ type: "COMPLETE_ORDER", payload: orderId })}
      />
    </Provider >, wrapper)
    : false;
})


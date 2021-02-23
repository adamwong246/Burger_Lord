import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import App from "./app.js";

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos,
  counter
})

const store = createStore(rootReducer, { loading: true })

document.addEventListener('DOMContentLoaded', (event) => {

  const wrapper = document.getElementById("root");
  wrapper
    ? ReactDOM.render(<Provider store={store}>
      <App
        dispatcher={store.dispatch}
      />
    </Provider >, wrapper)
    : false;

})
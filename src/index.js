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
function ingredients(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return state.concat([action.text])
    default:
      return state
  }
}

function sandwiches(state = [], action) {
  switch (action.type) {
    case 'ADD_SANDWICH':
      return state.concat([action.text])
    default:
      return state
  }
}

function orders(state = [], action) {
  switch (action.type) {
    case 'ADD_ORDER':
      return state.concat([action.payload])
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos,
  counter,
  ingredients,
  sandwiches,
  orders
})

const store = createStore(rootReducer, { 
  ingredients: [
    {id: 0, name: 'PB', amount: 0},
    {id: 1, name: 'J', amount: 1},
    {id: 2, name: 'EGG SALAD', amount: 1},
    {id: 3, name: 'HAM', amount: 0},
    {id: 4, name: 'CHEESE', amount: 1},
  ],
  sandwiches: [
    {id: 0, name: 'Peanutbutter and Jelly', cost: 1, recipe: [0, 1] },
    {id: 1, name: 'Ham and Cheese', cost: 3, recipe: [3, 4]},
    {id: 2, name: 'Egg Salad', cost: 5, recipe: [2]}
  ],
  orders: [
    {id: 0, sandwiches: [1, 1, 0, 2], status: true},
    {id: 1, sandwiches: [2], status: false}
  ]
})

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
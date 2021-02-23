import { combineReducers, createStore } from 'redux'

import initialState from "./initialState.js";

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
    case 'NEW_ORDER':
      return [
        ...state,
        {
          id: state.reduce((mm, s)=> s.id > mm) + 1,
          sandwiches: action.payload,
          status: "open"
        }
      ]
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

const store = createStore(rootReducer, initialState)

export default store
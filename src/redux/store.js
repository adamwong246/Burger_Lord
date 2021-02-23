import { combineReducers, createStore } from 'redux'

import initialState from "./initialState.js";

function ingredients(state = [], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return state.concat([action.text])
    default:
      return state
  }
}

function sandwichTemplates(state = [], action) {
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
          id: Math.max(...state.map((o)=> o.id).concat([0])) + 1,
          status: "open",
          ...action.payload
        }
      ]
    case 'COMPLETE_ORDER':
      return state.map((order) => {
        if(order.id === action.payload){
          return {
            ...order,
            status: false
          }
        } else {
          return order 
        }
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  ingredients,
  sandwichTemplates,
  orders
})

const store = createStore(rootReducer, initialState)

export default store
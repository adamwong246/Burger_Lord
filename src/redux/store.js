import { createStore } from 'redux'

import initialState from "./initialState.js";

export default createStore((state = [], action) => {

  switch (action.type) {

    case 'NEW_ORDER':
      const newKey = Math.max(Object.keys(state.orders).map((oid) => parseInt(oid))) + 1

      const ingredients = state.ingredients.map((ingredient) => {
        action.payload.sandwiches.forEach((sandwich) => {
          sandwich.recipe.forEach((ingredientId) => {
            if (ingredientId === ingredient.id) {
              ingredient.amount = ingredient.amount -1
            }
          })
        })

        return ingredient
      })

      return {
        ...state,
        orders: {
          ...state.orders,
          [newKey]: {
            status: "open",
            ...action.payload
          }
        },
        ingredients
      }

    case 'COMPLETE_ORDER':
      const newOrders = {};
      Object.keys(state.orders).forEach((ok) => {
        newOrders[ok] = state.orders[ok];
        if (ok === action.payload) {
          newOrders[ok].status = "closed";
        }

      })

      return {
        ...state,
        orders: newOrders
      }

    default:
      return state
  }
}, initialState)
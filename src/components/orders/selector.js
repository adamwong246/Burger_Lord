import { createSelector } from "reselect"

const baseSelector = state => state;

export const OrdersSelector = createSelector([baseSelector], (base) => {
  return {
    orders: base.orders,
    sandwiches: base.sandwiches,
    ingredients: base.ingredients
  }
});
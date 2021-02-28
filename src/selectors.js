import { createSelector } from "reselect"

const baseSelector = state => state;

export const NewOrderSelector = createSelector([baseSelector], (base) => {

  const subTotal = base.sandwiches.reduce((mm, sandwich) => {
    return mm + sandwich.recipe.reduce((mm2, recipeIngredientId) => {
      return mm2 + base.ingredients.find((ingredient) => ingredient.id === recipeIngredientId).cost
    }, 0)
  }, 0);

  const grandTotal = (subTotal * (1 + (base.gratuity / 100)))

  const runningTally = {};
  base.ingredients.forEach((ingredient) => runningTally[ingredient.id] = ingredient.amount)
  base.sandwiches.forEach((sandwich) => {
    sandwich.recipe.forEach((recipeIngredientId) => {
      runningTally[recipeIngredientId] = runningTally[recipeIngredientId] -1
    })
  })

  return {
    ingredients: base.orders,
    sandwiches: base.sandwiches,
    ingredients: base.ingredients,

    gratuity: base.gratuity,
    stagedSandwich: base.stagedSandwich,

    subTotal, grandTotal, runningTally
  }
});

export const OrdersSelector = createSelector([baseSelector], (base) => {
  return {
    ingredients: base.orders,
    sandwiches: base.sandwiches,
    ingredients: base.ingredients,

    orders: base.orders
  }
});
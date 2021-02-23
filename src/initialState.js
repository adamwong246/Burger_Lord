export default {
  ingredients: [
    { id: 0, name: 'PB', amount: 1 },
    { id: 1, name: 'J', amount: 1 },
    { id: 2, name: 'EGG SALAD', amount: 0 },
    { id: 3, name: 'HAM', amount: 1 },
    { id: 4, name: 'CHEESE', amount: 1 },
  ],
  sandwiches: [
    { id: 0, name: 'Peanutbutter and Jelly', cost: 1, recipe: [0, 1] },
    { id: 1, name: 'Ham and Cheese', cost: 3, recipe: [3, 4] },
    { id: 2, name: 'Egg Salad', cost: 5, recipe: [2] }
  ],
  orders: [
    { id: 0, sandwiches: [1, 1, 0, 2], status: true },
    { id: 1, sandwiches: [2], status: false }
  ]
}
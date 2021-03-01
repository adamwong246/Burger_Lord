export default {
  INITAILIZED: false, 
  gratuity: 25,     
  ingredients: [
    { id: 1, name: 'WHITE BREAD', amount: 100, cost: 1, fg: "#ffffff", bg: "#bb992c" },
    { id: 2, name: 'WHOLE WHEAT BREAD', amount: 0, cost: 1, fg: "#ffffff", bg: "#947923" },
    { id: 3, name: 'PEANUT BUTTER', amount: 1, cost: 2, fg: "yellow", bg: "947923" },
    { id: 4, name: 'JELLY', amount: 1, cost: 2, fg: "pink", bg: "#ec15e0" },
    { id: 5, name: 'EGG SALAD', amount: 5, cost: 5, fg: "green", bg: "yellow" },
    { id: 6, name: 'HAM', amount: 1, cost: 2, fg: "red", bg: "pink" },
    { id: 7, name: 'CHEESE', amount: 1, cost: 2, fg: "yellow", bg: "orange" },

  ],
  sandwiches : [
    // {
    //   name: "mine",
    //   recipe: [1]
    // },
    // {
    //   name: "his",
    //   recipe: [1, 2, 1]
    // }
  ],
  orders: {
    // "2": {
    //   "status": "closed",
    //   "grandTotal": "9.99",
    //   "sandwiches": [
    //     {
    //       "name": "adams",
    //       "recipe": [
    //         1, 2, 3
    //       ]
    //     },
    //     {
    //       "name": "chaches",
    //       "recipe": [
    //         2, 3, 4
    //       ]
    //     },
    //     {
    //       "name": "Kary's",
    //       "recipe": [
    //         3, 4, 5
    //       ]
    //     }
    //   ],
    // },
  //   "1": {
  //     "status": "open",
  //     "sandwiches": [
  //       {
  //         "name": "someone's sandwich",
  //         "recipe": [
  //           1
  //         ],
  //         "toPush": ""
  //       }
  //     ],
  //     "grandTotal": "1.25"
  //   }
  }
}
export default {
  ingredients: [
    { id: 1, name: 'WHITE BREAD', amount: 100, cost: 1, fg: "#ffffff", bg: "#bb992c" },
    { id: 2, name: 'WHOLE WHEAT BREAD', amount: 0, cost: 1, fg: "#ffffff", bg: "#947923" },
    { id: 3, name: 'PEANUT BUTTER', amount: 1, cost: 2, fg: "aabbcc", bg: "ccbbaa" },
    { id: 4, name: 'JELLY', amount: 1, cost: 2, fg: "#de80d9", bg: "#ec15e0" },
    { id: 5, name: 'EGG SALAD', amount: 5, cost: 5, fg: "aabbcc", bg: "112233" },
    { id: 6, name: 'HAM', amount: 1, cost: 2, fg: "aabbcc", bg: "112233" },
    { id: 7, name: 'CHEESE', amount: 1, cost: 2, fg: "aabbcc", bg: "112233" },

  ],
  sandwichTemplates: [
    { id: 1, name: 'PBJ on white', recipe: [1, 3, 1, 1] },
    { id: 2, name: 'PBJ on wheat', recipe: [6, 0, 1, 6] },
    { id: 3, name: 'Ham and Cheese', recipe: [5, 3, 4, 5] },
    { id: 4, name: 'Egg Salad', recipe: [5, 2, 5] }
  ],
  orders: [
    {
      "id": 1,
      "status": "open",
      "sandwiches": [
        {
          "name": "everything",
          "recipe": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
          ],
          "toPush": 0
        },

        {
          "name": "loaf",
          "recipe": [
            1,
            2,
            3
          ],
          "toPush": 0
        },
        {
          "name": "loaf2",
          "recipe": [
            1
          ]
        },
        {
          "name": "Adams",
          "recipe": [
            1,
            2,
            3
          ],
          "toPush": 0
        },
        {
          "name": "Chaches",
          "recipe": [
            4,
            4,
            4
          ],
          "toPush": 1
        }
      ],
      "gratuity": 25,
      "grandTotal": "17.50"
    }
  ]
}
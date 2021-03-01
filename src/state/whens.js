// This file holds the "when" statements.
// "Whens" always correspond to a redux action and payload

export default [
  {
    matcher: /I change the staged sandwich name to '(.*)'/gm,
    action: "CHANGE_STAGED_SANDWICH_NAME",
    payload: (match) => match[0][1]
  },
  {
    matcher: /I select the ingredient '(.*)' for '(.*)'/gm,
    action: "SELECT_INGREDIENT_TO_PUSH",
    payload: (match) => {
      return { sandwichName: match[0][2], ingredientId: parseInt(match[0][1]) }
    }
  },
  {
    matcher: /I push the selected ingredient for sandwich '(.*)'/gm,
    action: "PUSH_INGREDIENT",
    payload: (match) => parseInt(match[0][1])
  },
  {
    matcher: /I add the sandwich/gm,
    action: "ADD_SANDWICH",
    payload: () => true
  }
]

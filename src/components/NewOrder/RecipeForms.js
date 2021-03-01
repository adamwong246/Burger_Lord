import React from "react";

import RecipeForm from "./RecipeForm.js";

class RecipeForms extends React.Component {

  // recipeCost(recipe, ingredients) {
  //   return recipe.reduce((mm, id) => { return mm + ingredients.find((ingredient) => ingredient.id === id).cost }, 0)
  // }

  render() {
    const {
      addSandwich,
      changeStagedSandwich,
      ingredients,
      onChangeSandwichName,
      popIngredient,
      pushIngredient,
      removeSandwich,
      runningTally,
      sandwiches,
      selectIngredientToPush,
      stagedSandwich
    }
      = this.props

    return (<ul id="order-form" >{
      sandwiches.map((sandwich, ndx) =>
        <li>
          <input
            type="text"
            value={sandwich.name}
            onChange={(event) => onChangeSandwichName(ndx, event.target.value)}
          />
          <button
            onClick={(e) => removeSandwich(ndx)}
          >
            Remove "{sandwich.name}" (${sandwich.cost})
          </button>

          <RecipeForm
            ingredients={ingredients}
            popIngredient={popIngredient}
            pushIngredient={() => pushIngredient(ndx)}
            runningTally={runningTally}
            sandwich={sandwich}
            selectIngredientToPush={(sandwhichName, ingredientId) => selectIngredientToPush(sandwhichName, ingredientId)}
          />
        </li>
      )

    }
      <li>
        <input
          type="text"
          value={stagedSandwich}
          placeholder="sandwich description"
          onChange={(e) => changeStagedSandwich(e.target.value)}
        />
        <button onClick={() => {addSandwich()}}> Add a sandwich</button>
      </li>
    </ul>);
  }
}

export default RecipeForms;

import React from "react";

import RecipeForm from "../small/RecipeForm.js";

class RecipeForms extends React.Component {

  recipeCost(recipe, ingredients) {
    return recipe.reduce((mm, id) => { return mm + ingredients.find((ingredient) => ingredient.id === id).cost }, 0)
  }

  render() {
    const {
      addSandwich,
      changeStagedSandwhich,
      ingredients,
      onChangeSandwhichName,
      popIngredient,
      pushIngredient,
      removeSandwich,
      runningTally,
      sandwiches,
      selectIngredientToPush,
      stagedSandwhich
    }
      = this.props

    return (<ul id="order-form" >{
      sandwiches.map((sandwich) =>
        <li>
          <input
            type="text"
            value={sandwich.name}
            onChange={(event) => onChangeSandwhichName(event, sandwich.name)}
          />
          <button
            onClick={(e) => removeSandwich(sandwich.name)}
          >
            Remove "{sandwich.name}" (${this.recipeCost(sandwich.recipe, ingredients)})
          </button>

          <RecipeForm
            sandwich={sandwich}
            ingredients={ingredients}
            runningTally={runningTally}
            popIngredient={(sandwhichName) => popIngredient(sandwhichName)}
            selectIngredientToPush={(sandwhichName, ingredientId) => selectIngredientToPush(sandwhichName, ingredientId)}
            pushIngredient={(sandwhichName) => pushIngredient(sandwhichName, sandwiches, runningTally, ingredients)}
          />
        </li>
      )

    }
      <li>
        <input
          type="text"
          value={stagedSandwhich}
          placeholder="sandwich description"
          onChange={(e) => changeStagedSandwhich(e)}
        />
        <button onClick={() => addSandwich()}> Add a sandwich</button>
      </li>
    </ul>);
  }
}

export default RecipeForms;

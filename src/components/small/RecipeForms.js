import React from "react";

import RecipeForm from "../small/RecipeForm.js";

class RecipeForms extends React.Component {

  recipeCost(recipe, ingredients) {
    return recipe.reduce((mm, id) => { return mm + ingredients.find((ingredient) => ingredient.id === id).cost }, 0)
  }

  render() {
    const {
      addSandwhich,
      changeStagedSandwhich,
      ingredients,
      onChangeSandwhichName,
      popIngredient,
      pushIngredient,
      removeSandwhich,
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
            onClick={() => removeSandwhich(sandwich.name)}
          >
            Remove "{sandwich.name}" from the order
          </button>

          <RecipeForm
            sandwich={sandwich}
            ingredients={ingredients}
            cost={this.recipeCost(sandwich.recipe, ingredients)}
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
        <button onClick={() => addSandwhich()}> Add a sandwich</button>
      </li>
    </ul>);
  }
}

export default RecipeForms;

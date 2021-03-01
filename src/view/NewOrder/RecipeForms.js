import React from "react";
import Button from '@material-ui/core/Button';

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

    return (
      <>
        <h1>Please place an order</h1>

        <ul id="order-form" >{
          sandwiches.map((sandwich, ndx) =>
            <li>
              <input
                type="text"
                value={sandwich.name}
                onChange={(event) => onChangeSandwichName(ndx, event.target.value)}
              />
              <Button
                variant="contained"
                color="warning"
                size="small"
                onClick={(e) => removeSandwich(ndx)}
              >
                Remove "{sandwich.name}" (${sandwich.cost})
          </Button>

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
            <Button
              variant="contained"
              color="primary"
              onClick={() => { addSandwich() }}
            >
              Add a sandwich</Button>
          </li>
        </ul>
      </>
    );
  }
}

export default RecipeForms;

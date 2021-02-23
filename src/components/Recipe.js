import React from "react";

import IngredientPicker from "./IngredientPicker.js";

class Recipe extends React.Component {

  constructor(props) {
    super(props);
  }

  ingredientName(id, ingredients) {
    return ingredients.find((ingredient) => ingredient.id === id).name
  }

  ingredientCost(id, ingredients) {
    return ingredients.find((ingredient) => ingredient.id === id).cost
  }

  render() {
    const { sandwhich } = this.props;

    return (<div>

        <p>{sandwhich.name}</p>
      <ol>
        {sandwhich.recipe.map((ingredientId, ndx) => {
          return (<li>
            {
              this.ingredientName(ingredientId, this.props.ingredients)
            }
          </li>);
        })}

      </ol>

    </div>);
  }
}

export default Recipe;

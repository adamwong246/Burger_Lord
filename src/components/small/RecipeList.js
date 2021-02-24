import React from "react";

class RecipeList extends React.Component {

  ingredientName(id, ingredients) {
    return ingredients.find((ingredient) => ingredient.id === id).name
  }

  render() {
    const { sandwich, ingredients } = this.props;

    return ( <ol>
        {sandwich.recipe.map((ingredientId, ndx) => {
          return (<li>
            {
              this.ingredientName(ingredientId, ingredients)
            }
          </li>);
        })}

      </ol>);
  }
}

export default RecipeList;

import React from "react";
import Button from '@material-ui/core/Button';

import IngredientPicker from "./IngredientPicker.js";

class RecipeForm extends React.Component {

  ingredientName(id, ingredients) {
    return ingredients.find((ingredient) => ingredient.id === id).name
  }

  ingredientCost(id, ingredients) {
    return ingredients.find((ingredient) => ingredient.id === id).cost
  }

  ingredientBackground(id, ingredients) {
    return ingredients.find((ingredient) => ingredient.id === id).bg
  }

  ingredientColor(id, ingredients) {
    return ingredients.find((ingredient) => ingredient.id === id).fg
  }

  render() {
    const { popIngredient, sandwich, ingredients, pushIngredient } = this.props;

    return (<div>
      <table>
        {sandwich.recipe.map((ingredientId, ndx) => {
          return (<tr>

            <td style={{
              backgroundColor: this.ingredientBackground(ingredientId, ingredients),
              color: this.ingredientColor(ingredientId, ingredients)
            }}>
              {this.ingredientName(ingredientId, ingredients)}
            </td>

            <td>+ ${this.ingredientCost(ingredientId, ingredients)}</td>

            <td>{
              ndx === sandwich.recipe.length - 1 ?
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  onClick={() => popIngredient(sandwich.name)}> Pop Ingredient</Button>
                : <div />
            }</td>
          </tr>);
        })}

        <tr>

          <td>
            <IngredientPicker
              value={sandwich.toPush}
              ingredients={this.props.ingredients}
              runningTally={this.props.runningTally}
              selectIngredientToPush={(ingredientId) => this.props.selectIngredientToPush(sandwich.name, ingredientId)}
            />
          </td>

          <td>{
            sandwich.toPush ? (<div>+ ${this.ingredientCost(sandwich.toPush, this.props.ingredients)}</div>) : (<div />)
          }</td>

          <td>{
            sandwich.toPush ? (<Button
              variant="contained"
              color="primary"
              size="small"
              onClick={(e) => pushIngredient()}
            > Push Ingredient!</Button>) : (<div />)
          }</td>

        </tr>

      </table>

    </div>);
  }
}

export default RecipeForm;

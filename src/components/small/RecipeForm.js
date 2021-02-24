import React from "react";

import IngredientPicker from "./IngredientPicker.js";

class RecipeForm extends React.Component {

  constructor(props) {
    super(props);
  }

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
                <button onClick={() => popIngredient(sandwich.name)}> Pop Ingredient</button>
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
            sandwich.toPush ? (<button onClick={(e) => pushIngredient(sandwich.name)}> Push Ingredient!</button>) : (<div />)
          }</td>

        </tr>

        <tr>
          <td>
            <strong>Price for "{sandwich.name}"</strong>
          </td>

          <td>
            {/* <strong>${this.recipeCost(sandwich.recipe, this.props.ingredients)}</strong> */}
            <strong>${this.props.cost}</strong>
          </td>

        </tr>

      </table>

    </div>);
  }
}

export default RecipeForm;

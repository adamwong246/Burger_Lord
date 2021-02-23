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
    const { sandwhich } = this.props;

    return (<div>

      <table>
        {sandwhich.recipe.map((ingredientId, ndx) => {
          return (<tr>
            
            <td style={{
              backgroundColor: this.ingredientBackground(ingredientId, this.props.ingredients),
              color: this.ingredientColor(ingredientId, this.props.ingredients)
              }}>
              {this.ingredientName(ingredientId, this.props.ingredients)}
            </td>

            <td>+ ${this.ingredientCost(ingredientId, this.props.ingredients)}</td>

            <td>{
              ndx === sandwhich.recipe.length - 1 ? <button onClick={() => this.props.popIngredient(sandwhich.name)}> Pop Ingredient</button> : <div />
            }</td>


          </tr>);
        })}

        <tr>

          <td>

            <IngredientPicker
              value={sandwhich.toPush}
              ingredients={this.props.ingredients}
              selectIngredientToPush={(ingredientId) => this.props.selectIngredientToPush(sandwhich.name, ingredientId)}
            />

          </td>

          <td>
            {
              sandwhich.toPush ? (<div>+ ${this.ingredientCost(sandwhich.toPush, this.props.ingredients)}</div>) : (<div/>)
            }
            </td>

          <td>
            {
              sandwhich.toPush ? (<button onClick={() => this.props.pushIngredient(sandwhich.name)}> Push Ingredient</button>) : (<div/>)
            }
            
          </td>

        </tr>

        <tr>

          <td>
            <strong>Price for "{sandwhich.name}"</strong>
          </td>

          <td>
            {/* <strong>${this.recipeCost(sandwhich.recipe, this.props.ingredients)}</strong> */}
            <strong>${this.props.cost}</strong>
          </td>

        </tr>

      </table>

    </div>);
  }
}

export default RecipeForm;

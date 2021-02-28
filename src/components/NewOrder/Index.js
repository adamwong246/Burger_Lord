import React from "react";

import RecipeForms from "./RecipeForms.js";
import Check from "./Check.js";

class NewOrder extends React.Component {

  render() {

    const subTotal = this.props.sandwiches.reduce((mm, sandwich) => {
      return mm + sandwich.recipe.reduce((mm2, recipeIngredientId) => {
        return mm2 + this.props.ingredients.find((ingredient) => ingredient.id === recipeIngredientId).cost
      }, 0)
    }, 0);

    const grandTotal = (subTotal * (1 + (this.props.gratuity / 100)))

    const runningTally = {};
    this.props.ingredients.forEach((ingredient) => runningTally[ingredient.id] = ingredient.amount)
    this.props.sandwiches.forEach((sandwich) => {
      sandwich.recipe.forEach((recipeIngredientId) => {
        runningTally[recipeIngredientId] = runningTally[recipeIngredientId] -1
      })
    })

    return (
      <div>
        <h1>Please place an order</h1>
        <RecipeForms
          addSandwich={this.props.addSandwich}
          changeStagedSandwich={this.props.changeStagedSandwich}
          ingredients={this.props.ingredients}
          onChangeSandwichName={this.props.onChangeSandwichName}
          popIngredient={this.props.popIngredient}
          pushIngredient={this.props.pushIngredient}
          removeSandwich={this.props.removeSandwich}
          sandwiches={this.props.sandwiches}
          selectIngredientToPush={this.props.selectIngredientToPush}
          stagedSandwich={this.props.stagedSandwich}

          runningTally={runningTally}
        />

        <Check
          grandTotal={grandTotal}
          gratuity={this.props.gratuity}
          onChangeGratuity={this.props.onChangeGratuity}
          placeOrder={() => this.props.placeOrder(grandTotal)}
          subTotal={subTotal}
          disabled={false}
        />

      </div>
    );
  }
}

export default NewOrder;

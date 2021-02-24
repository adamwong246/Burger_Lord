import React from "react";

import RecipeForms from "../small/RecipeForms.js";
import Check from "../small/Check.js";

const initialState = {
  sandwiches: [
    // { name: "everything", recipe: [1, 2, 3, 4, 5, 6, 7], toPush: 0 },
    // { name: "loaf", recipe: [1, 1, 1], toPush: 0 },
    // { name: "loaf2", recipe: [1] },
    // { name: "Adams", recipe: [1, 2, 3], toPush: 0 },
    // { name: "Chaches", recipe: [4, 4, 4], toPush: 1 }
  ],
  gratuity: 25
};

class NewOrder extends React.Component {

  constructor(props) {
    super(props);

    const runningTally = {};
    props.ingredients.forEach((ingredient) => runningTally[ingredient.id] = ingredient.amount)

    this.state = {
      ...initialState,
      runningTally
    };

    this.addSandwhich = this.addSandwhich.bind(this);
    this.changeStagedSandwhich = this.changeStagedSandwhich.bind(this);
    this.onChangeSandwhichName = this.onChangeSandwhichName.bind(this);
    this.onGratuityChange = this.onGratuityChange.bind(this);
    this.pushIngredient = this.pushIngredient.bind(this);
    this.selectIngredientToPush = this.selectIngredientToPush.bind(this);
  }

  selectIngredientToPush(sandwhichName, ingredientId) {
    this.setState({
      ...this.state,
      sandwiches: this.state.sandwiches.map((sandwich) => {
        if (sandwich.name === sandwhichName) {
          sandwich.toPush = ingredientId
        }
        return sandwich
      })
    })
  }

  pushIngredient(sandwhichName, sandwhiches, runningTally, ingredients) {
    console.log("pushIngredient")
    const sandwich = sandwhiches.find((s) => s.name === sandwhichName);
    const ingredientId = sandwich.toPush;
    const oldTally = runningTally[ingredientId]

    this.setState({
      ...this.state,
      sandwiches: this.state.sandwiches.map((sandwich) => {
        if (sandwich.name === sandwhichName) {
          sandwich.recipe.push(sandwich.toPush)
          sandwich.toPush = ""
        }
        return sandwich
      }),
      runningTally: {
        ...this.state.runningTally,
        [ingredientId]: oldTally - 1
      }
    })
  }

  popIngredient(sandwhichName) {
    this.setState({
      ...this.state,
      sandwiches: this.state.sandwiches.map((sandwich) => {
        if (sandwich.name === sandwhichName) {
          sandwich.recipe.pop()
        }
        return sandwich
      }),
      runningTally: {
        ...this.state.runningTally,
        [sandwhichName]: this.state.runningTally[sandwhichName] + 1
      }
    })
  }

  changeStagedSandwhich(event) {
    this.setState({
      ...this.state,
      stagedSandwhich: event.target.value
    })
  }

  onChangeSandwhichName(event, oldSandwichName) {
    this.setState({
      ...this.state,
      sandwiches: this.state.sandwiches.map((sandwich) => {
        if (sandwich.name === oldSandwichName) {
          sandwich.name = event.target.value
        }
        return sandwich
      })
    })
  }

  addSandwhich() {
    this.setState({
      ...this.state,
      stagedSandwhich: "",
      sandwiches: [
        ...this.state.sandwiches,
        {
          name: this.state.stagedSandwhich, recipe: [], toPush: ""
        }
      ]
    })
  }

  removeSandwhich(name) {
    this.setState({
      ...this.state,
      sandwiches: this.state.sandwiches.filter((s) => s.name !== name)
    })
  }

  recipeCost(recipe, ingredients) {
    return recipe.reduce((mm, id) => { return mm + ingredients.find((ingredient) => ingredient.id === id).cost }, 0)
  }

  onGratuityChange(event) {
    this.setState({
      ...this.state,
      gratuity: parseInt(event.target.value)
    })
  }

  placeOrder(props, grandTotal, state) {
    props.newOrder({
      sandwiches: state.sandwiches,
      grandTotal
    })
  }

  render() {
    const props = this.props;

    return (
      <div>
        <h1>Please place an order</h1>

        <RecipeForms
          addSandwhich={this.addSandwhich}
          changeStagedSandwhich={this.changeStagedSandwhich}
          ingredients={this.props.ingredients}
          pushIngredient={this.pushIngredient}
          runningTally={this.state.runningTally}
          sandwiches={this.state.sandwiches}
          selectIngredientToPush={this.selectIngredientToPush}
          stagedSandwhich={this.state.stagedSandwhich}
          onChangeSandwhichName={this.onChangeSandwhichName}
        />

        <Check
          ingredients={this.props.ingredients}
          sandwiches={this.state.sandwiches}
          placeOrder={(grandTotal) => this.placeOrder(props, grandTotal, this.state)}
          onGratuityChange={this.onGratuityChange}
          gratuity={this.state.gratuity}
        />

      </div>
    );
  }
}

export default NewOrder;

import React from "react";

import RecipeForm from "../small/RecipeForm.js";

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

    this.onGratuityChange = this.onGratuityChange.bind(this);
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

  subTotal(sandwiches, ingredients) {
    return sandwiches.reduce((mm, sandwich) => {
      return mm + this.recipeCost(sandwich.recipe, ingredients)
    }, 0
    )
  }

  formatGrandTotal(sandwiches, ingredients) {
    return (this.subTotal(sandwiches, ingredients) * (1 + (this.state.gratuity / 100))).toFixed(2)
  }

  placeOrder(props, state, grandTotal) {
    props.newOrder({
      sandwiches: state.sandwiches,
      grandTotal
    })
  }

  render() {

    const grandTotal = this.formatGrandTotal(this.state.sandwiches, this.props.ingredients);

    return (<div>
      <h1>Please place an order</h1>

      <ul id="order-form" >{
        this.state.sandwiches.map((stateSandwiche) =>
          <li>
            <input
              type="text"
              value={stateSandwiche.name}
              onChange={(event) => this.onChangeSandwhichName(event, stateSandwiche.name)}
            />
            <button onClick={() => this.removeSandwhich(stateSandwiche.name)}> Remove "{stateSandwiche.name}" from the order</button>

            <RecipeForm
              sandwich={stateSandwiche}
              ingredients={this.props.ingredients}
              cost={this.recipeCost(stateSandwiche.recipe, this.props.ingredients)}
              runningTally={this.state.runningTally}
              popIngredient={(sandwhichName) => this.popIngredient(sandwhichName)}
              selectIngredientToPush={(sandwhichName, ingredientId) => this.selectIngredientToPush(sandwhichName, ingredientId)}
              pushIngredient={(sandwhichName) => this.pushIngredient(sandwhichName, this.state.sandwiches, this.state.runningTally, this.props.ingredients)}
            />
          </li>
        )

      }
        <li>
          <input
            type="text"
            value={this.state.stagedSandwhich}
            placeholder="sandwich description"
            onChange={(e) => this.changeStagedSandwhich(e)}
          />
          <button onClick={() => this.addSandwhich()}> Add a sandwich</button>
        </li>
      </ul>

      <div id="totaler">
        <table>
          <tr><td>SUB TOTAL</td><td>${this.subTotal(this.state.sandwiches, this.props.ingredients)}</td></tr>
          <tr><td>GRATUITY</td><td>          <input
            type="number"
            placeholder={25}
            value={this.state.gratuity}
            onChange={this.onGratuityChange}
          />%</td></tr>
          <tr>
            <td>GRAND TOTAL</td>
            <td>
              <button
                disabled={!this.state.sandwiches.length}
                onClick={() => this.placeOrder(this.props, this.state, grandTotal)}
              >
                Submit Order for ${grandTotal}
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>);
  }
}

export default NewOrder;

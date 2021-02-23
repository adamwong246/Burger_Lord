import React from "react";

import RecipeForm from "./RecipeForm.js";

const initialState = {
  sandwiches: [
    { name: "loaf", recipe: [1, 1, 1], toPush: 0 },
    { name: "loaf2", recipe: [1] },
    { name: "Adams", recipe: [1, 2, 3], toPush: 0 },
    { name: "Chaches", recipe: [4, 4, 4], toPush: 1 }
  ],
  gratuity: 25
};

class NewOrder extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;

    this.onGratuityChange = this.onGratuityChange.bind(this);
  }

  selectIngredientToPush(sandwhichName, ingredientId) {
    this.setState({
      ...this.state,
      sandwiches: this.state.sandwiches.map((sandwhich) => {
        if (sandwhich.name === sandwhichName) {
          sandwhich.toPush = ingredientId
        }
        return sandwhich
      })
    })
  }

  pushIngredient(sandwhichName) {
    this.setState({
      ...this.state,
      sandwiches: this.state.sandwiches.map((sandwhich) => {
        if (sandwhich.name === sandwhichName) {
          sandwhich.recipe.push(sandwhich.toPush)
          sandwhich.toPush = ""
        }
        return sandwhich
      })
    })
  }

  popIngredient(sandwhichName) {
    this.setState({
      ...this.state,
      sandwiches: this.state.sandwiches.map((sandwhich) => {
        if (sandwhich.name === sandwhichName) {
          sandwhich.recipe.pop()
        }
        return sandwhich
      })
    })
  }

  changeStagedSandwhich(event) {
    this.setState({
      ...this.state,
      stagedSandwhich: event.target.value
    })
  }

  onChangeSandwhichName(event, oldSandwichName) {
    console.log(event)
    this.setState({
      ...this.state,
      sandwiches: this.state.sandwiches.map((sandwhich) => {
        if (sandwhich.name === oldSandwichName) {
          sandwhich.name = event.target.value
        }
        return sandwhich
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
    // return recipe.reduce((mm, id) => mm + ingredients.find((ingredient) => ingredient.id === id).cost)
  }

  formatGrandTotal(sandwiches, ingredients) {
    return (this.subTotal(sandwiches, ingredients) * (1 + (this.state.gratuity / 100))).toFixed(2)
  }

  placeOrder(props, state, grandTotal){
    props.newOrder({...state, grandTotal})
  }

  render() {

    const grandTotal = this.formatGrandTotal(this.state.sandwiches, this.props.ingredients);

    return (<div>
      <h1>Please place an order</h1>

      <ul>{
        this.state.sandwiches.map((stateSandwiche) =>
          <li>
            <input
              type="text"
              value={stateSandwiche.name}
              onChange={(event) => this.onChangeSandwhichName(event, stateSandwiche.name)}
            />
            <button onClick={() => this.removeSandwhich(stateSandwiche.name)}> Remove "{stateSandwiche.name}" from the order</button>

            <RecipeForm
              sandwhich={stateSandwiche}
              ingredients={this.props.ingredients}
              cost={this.recipeCost(stateSandwiche.recipe, this.props.ingredients)}
              popIngredient={(sandwhichName) => this.popIngredient(sandwhichName)}
              selectIngredientToPush={(sandwhichName, ingredientId) => this.selectIngredientToPush(sandwhichName, ingredientId)}
              pushIngredient={(sandwhichName) => this.pushIngredient(sandwhichName)}
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
          <button onClick={() => this.addSandwhich()}> Add a sandwhich</button>
        </li>
      </ul>

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
            {/* <button onClick={() => this.props.newOrder(this.state)}> */}
            <button onClick={() => this.placeOrder(this.props, this.state, grandTotal)}>
              Submit Order for ${grandTotal}
            </button>
          </td>
        </tr>
      </table>


      {/* <IngredientPicker ingredients={this.props.ingredients}/>

      <input type="text" placeholder="Eater and name this sandwich"/>
      <button>Add to Order</button> */}


      {/* {
        this.orderIsInValid() ?
          <div/> :
          <table>

        <tr>
          <td>id</td>
          <td>name</td>
          <td>cost</td>
        </tr>

        {
          this.state.sandwiches.map((stateSandwichId) => {
            const propsSandwich = this.props.sandwiches.filter((propsSandwich) => propsSandwich.id == stateSandwichId)[0];
            return (
              <tr>
                <td>#{propsSandwich.id}</td>
                <td>{propsSandwich.name}</td>
                <td>${propsSandwich.cost}</td>
              </tr>
            );
          })
        }
      </table>
      }

      <select name="sandwiches" id="sandwiches" value={this.state.newSandwich} onChange={this.setSandwich}>

        <option value="" disabled selected hidden>Pick a sandwich</option>
        {
          this.props.sandwiches.map((s) => {
            const notEnoughIngredients = this.notEnoughIngredients(s, this.props.ingredients)
            return (
              <option
                value={s.id}
                disabled={notEnoughIngredients}
              >
                #{s.id} - {s.name} - ${s.cost} { notEnoughIngredients ? "(OUT OF STOCK)" : "" }
              </option>
            );
          })
        }
      </select>

      {
        this.noSandwichSelected() ?
          <div/> :
          <button onClick={this.addSandwich}> + </button>
      }
      <br />
      {
        this.orderIsInValid() ?
          <div/> :
          <button onClick={() => this.placeOrder(this.props.newOrder)}>
            Place Order for ${this.calculatePrice(this.props)}
          </button>
      } */}

    </div>);
  }
}

export default NewOrder;

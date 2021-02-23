import React from "react";

const initialState = {
  sandwiches: [],
  newSandwich: ""
};

class NewOrder extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;

    this.setSandwich = this.setSandwich.bind(this);
    this.addSandwich = this.addSandwich.bind(this);
  }

  addSandwich(event) {
    this.setState({
      ...this.state,
      sandwiches: [
        ...this.state.sandwiches,
        this.state.newSandwich
      ]
    })
  }

  setSandwich(event) {
    this.setState({
      ...this.state,
      newSandwich: parseInt(event.target.value)
    })
  }

  notEnoughIngredients(sandwich, ingredients) {
    return !sandwich.recipe.every((recipeIngredientId) => {
      return ingredients.filter((stockIngredient) => recipeIngredientId === stockIngredient.id)[0].amount > 0
    })
  }

  placeOrder(newOrderDispatcher) {
    newOrderDispatcher(this.state.sandwiches)
    this.setState(initialState);
  }

  noSandwichSelected() {
    return this.state.newSandwich === initialState.newSandwich
  }

  calculatePrice(props) {
    return this.state.sandwiches.reduce((mm, stateSandwichId) => {
      return mm + props.sandwiches.filter((propsSandwich) => stateSandwichId === propsSandwich.id)[0].cost
    }, 0)
  }

  orderIsInValid() {
    return this.state.sandwiches.length === 0
  }

  render(props) {
    return (<div>
      <h2>New Order</h2>

      {
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
            return (
              <option
                value={s.id}
                disabled={this.notEnoughIngredients(s, this.props.ingredients)}
              >
                #{s.id} - {s.name} - ${s.cost}
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
      }

    </div>);
  }
}

export default NewOrder;

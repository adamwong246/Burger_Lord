import React from "react";

class NewOrder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sandwiches: []
    };

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

  isDisabled(sandwich, ingredients){
    return ! sandwich.recipe.every((recipeIngredientId) => {
      return ingredients.filter((stockIngredient) => recipeIngredientId === stockIngredient.id)[0].amount > 0
    })
  }


  render(props) {
    return (<div>
      <h2>New Order</h2>
      <table>

        <tr>
          <td>#</td>
          <td>name</td>
          <td>$</td>
        </tr>

        {
          this.state.sandwiches.map((stateSandwichId) => {

            const propsSandwich = this.props.sandwiches.filter((propsSandwich) => propsSandwich.id == stateSandwichId)[0];
            return (
              <tr>
                <td>{propsSandwich.id}</td>
                <td>{propsSandwich.name}</td>
                <td>{propsSandwich.cost}</td>
              </tr>
            );
          })
        }

      </table>

      <div>

        <label for="sandwiches">Choose a sandiwch:</label>

        <select name="sandwiches" id="sandwiches" value={this.state.newSandwich} onChange={this.setSandwich}>

          <option value="" disabled selected hidden>Please Choose...</option>
          {
            this.props.sandwiches.map((s) => {
              return (
                <option
                  value={s.id}
                  disabled={this.isDisabled(s, this.props.ingredients)}
                >
                  #{s.id} - {s.name} - ${s.cost}
                </option>
              );
            })
          }
        </select>

        <button onClick={this.addSandwich} > Add Sandwhich to order</button>
      </div>
      
      <p>
        Total Price: {this.state.sandwiches.reduce((mm, stateSandwichId) => {
          return mm + this.props.sandwiches.filter((propsSandwich) => stateSandwichId === propsSandwich.id)[0].cost
        }, 0)}
      </p>

      <button > Complete Order</button>
    </div>);
  }
}

export default NewOrder;

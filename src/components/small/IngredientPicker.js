import React from "react";

class IngredientPicker extends React.Component {

  constructor(props) {
    super(props);
  }

  notEnoughIngredients(ingredient, runningTally) {
    return ! (runningTally[ingredient.id] > 0);
  }

  render() {
    return (<div>
      <select
        value={this.props.value}
        onChange={(event) => this.props.selectIngredientToPush(parseInt(event.target.value))}
      >

        <option value="" disabled selected hidden>Please Choose...</option>
        {
          this.props.ingredients.map((i) => {
            const notEnoughIngredients = this.notEnoughIngredients(i, this.props.runningTally)
            return (
              <option
                value={i.id}
                disabled={notEnoughIngredients}
              >
                {i.name}
                {
                  notEnoughIngredients ? " (out of stock)": ""
                }
              </option>
            );
          })
        }
      </select>


    </div>);
  }
}

export default IngredientPicker;

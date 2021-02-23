import React from "react";

class IngredientPicker extends React.Component {

  constructor(props) {
    super(props);
  }

  notEnoughIngredients(ingredient) {
    return ingredient.amount > 0;
  }

  render() {
    return (<div>
      <select value={this.props.value} onChange={(event) => this.props.selectIngredientToPush(parseInt(event.target.value))}>

        <option value="" disabled selected hidden>Please Choose...</option>
        {
          this.props.ingredients.map((i) => {
            const notEnoughIngredients = this.notEnoughIngredients(i)
            return (
              <option
                value={i.id}
                // disabled={notEnoughIngredients}
              >
                {i.name}
              </option>
            );
          })
        }
      </select>


    </div>);
  }
}

export default IngredientPicker;

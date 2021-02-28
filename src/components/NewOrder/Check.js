import React from "react";

class Check extends React.Component {

  recipeCost(recipe, ingredients) {
    return recipe.reduce((mm, id) => { return mm + ingredients.find((ingredient) => ingredient.id === id).cost }, 0)
  }

  subTotal(sandwiches, ingredients) {
    return sandwiches.reduce((mm, sandwich) => {
      return mm + this.recipeCost(sandwich.recipe, ingredients)
    }, 0
    )
  }

  formatGrandTotal(sandwiches, ingredients, gratuity) {
    return (this.subTotal(sandwiches, ingredients) * (1 + (gratuity / 100))).toFixed(2)
  }

  render() {
    const { sandwiches, ingredients, placeOrder, onGratuityChange, gratuity } = this.props
    const grandTotal = this.formatGrandTotal(sandwiches, ingredients, gratuity);

    return (<div id="totaler">
      <table>
        <tr><td>SUB TOTAL</td><td>${this.subTotal(sandwiches, ingredients)}</td></tr>
        <tr>
          <td>GRATUITY</td>
          <td>
            <input
              type="number"
              placeholder={25}
              value={gratuity}
              onChange={onGratuityChange}
            />%
          </td>
        </tr>
        <tr>
          <td>GRAND TOTAL</td>
          <td>
            <button
              disabled={!sandwiches.length}
              onClick={(e) => placeOrder(grandTotal)}
            >
              Submit Order for ${grandTotal}
            </button>
          </td>
        </tr>
      </table>
    </div>);
  }
}

export default Check;

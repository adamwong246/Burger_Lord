import React from "react";

import RecipeForms from "./RecipeForms.js";
import Check from "./Check.js";

class NewOrder extends React.Component {

  render() {

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
          runningTally={this.props.runningTally}
          sandwiches={this.props.sandwiches}
          selectIngredientToPush={this.props.selectIngredientToPush}
          stagedSandwich={this.props.stagedSandwich}
        />

        <hr/>

        <Check
          disabled={this.props.orderDisabled}
          grandTotal={this.props.grandTotal}
          gratuity={this.props.gratuity}
          onChangeGratuity={this.props.onChangeGratuity}
          placeOrder={() => this.props.placeOrder(this.props.grandTotal)}
          subTotal={this.props.subTotal}
        />

      </div>
    );
  }
}

export default NewOrder;

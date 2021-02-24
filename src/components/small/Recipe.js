import React from "react";

class Recipe extends React.Component {

  constructor(props) {
    super(props);

    this.state = { collapsed: true }
  }

  ingredientName(id, ingredients) {
    return ingredients.find((ingredient) => ingredient.id === id).name
  }

  ingredientCost(id, ingredients) {
    return ingredients.find((ingredient) => ingredient.id === id).cost
  }

  render() {
    const { sandwhich } = this.props;

    return (<li>

      <button onClick={(e) => this.setState({ collapsed: !this.state.collapsed })}> {sandwhich.name} {this.state.collapsed ? "+" : "-"} </button>

      {
        this.state.collapsed ? <div /> : <ol>
          {sandwhich.recipe.map((ingredientId, ndx) => {
            return (<li>
              {
                this.ingredientName(ingredientId, this.props.ingredients)
              }
            </li>);
          })}

        </ol>
      }

    </li>);
  }
}

export default Recipe;

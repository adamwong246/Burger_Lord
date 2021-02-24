import React from "react";
import RecipeList from "./RecipeList";

class Recipe extends React.Component {

  constructor(props) {
    super(props);

    this.state = { collapsed: true }
  }

  render() {
    const { sandwhich } = this.props;

    return (
      <li>

        <button
          onClick={(e) => this.setState({ collapsed: !this.state.collapsed })}
        >
          {sandwhich.name} {this.state.collapsed ? "+" : "-"}
        </button>

        {
          this.state.collapsed ? <div /> : <RecipeList sandwhich={sandwhich} ingredients={this.props.ingredients} />
        }

      </li>
    );
  }
}

export default Recipe;

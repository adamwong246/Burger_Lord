import React from "react";
import RecipeList from "./RecipeList";
import Button from '@material-ui/core/Button';

class Recipe extends React.Component {

  constructor(props) {
    super(props);

    this.state = { collapsed: true }
  }

  render() {
    const { sandwich } = this.props;

    return (
      <li>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={(e) => this.setState({ collapsed: !this.state.collapsed })}
        >
          {sandwich.name} {this.state.collapsed ? "+" : "-"}
        </Button>

        {
          this.state.collapsed
            ?
            <div />
            :
            <RecipeList
              sandwich={sandwich}
              ingredients={this.props.ingredients}
            />
        }

      </li>
    );
  }
}

export default Recipe;

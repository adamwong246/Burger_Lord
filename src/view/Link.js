import React from "react";
import { Typography, Link as MaterialLink } from '@material-ui/core';
import {
  Link as RouterLink
} from "react-router-dom";

class Link extends React.Component {

  render() {
    return (
      <Typography >
        <MaterialLink color="inherit">
          <RouterLink to={this.props.to}>
            {this.props.children}
          </RouterLink>
        </MaterialLink>
      </Typography>

    )
  }
}

export default Link;

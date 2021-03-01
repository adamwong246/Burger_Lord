import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

import Link from "./Link.js";

class Navigation extends React.Component {

  render() {
    return (<AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">

        </IconButton>

        <Typography variant="h5" >
          <Link to="/">BURGER LORD</Link>
        </Typography>

        <header>
          <nav>
            <ul>
              <li>
                <Link to="/orders/new">Order some Sandwiches!</Link>
              </li>
              <li>
                <Link to="/orders">View and complete orders!</Link>
              </li>
            </ul>
          </nav>
        </header>



      </Toolbar>
    </AppBar>);
  }
}

export default Navigation;

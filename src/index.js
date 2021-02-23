import React from "react";
import ReactDOM from 'react-dom'
import App from "./app.js";

console.log("hello index.js")

document.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.render(<App/>, document.getElementById('root'));
})